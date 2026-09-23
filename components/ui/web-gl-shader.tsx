"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/components/motion/use-reduced-motion";

interface WebGLShaderProps {
  className?: string;
  intensity?: number;
  speed?: number;
}

const vertexShader = `
  precision highp float;
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_intensity;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv = vUv;
    
    // Aspect ratio correction
    float aspect = u_resolution.x / u_resolution.y;
    vec2 p = uv - 0.5;
    p.x *= aspect;

    float t = u_time * 0.15;
    
    // Wave distortion layers
    float n1 = snoise(p * 2.2 + vec2(t * 0.4, -t * 0.3));
    float n2 = snoise(p * 3.5 - vec2(t * 0.2, t * 0.5) + n1 * 0.5);
    float n3 = snoise(p * 5.0 + vec2(-t * 0.6, t * 0.3) + n2 * 0.3);

    // Chromatic RGB separation
    float r = snoise(p * 2.4 + vec2(n3 * 0.3, t * 0.2) + vec2(0.008, 0.0));
    float g = snoise(p * 2.4 + vec2(n3 * 0.3, t * 0.2));
    float b = snoise(p * 2.4 + vec2(n3 * 0.3, t * 0.2) - vec2(0.008, 0.0));

    // Color mixing: Deep obsidian -> Cyan energy -> Subtle violet edge
    vec3 darkBase = vec3(0.02, 0.024, 0.035);
    vec3 cyan = vec3(0.0, 0.85, 1.0) * 0.7;
    vec3 violet = vec3(0.55, 0.36, 0.96) * 0.6;

    float mask = smoothstep(-0.4, 0.7, n2);
    float edge = smoothstep(0.3, 0.7, n3);

    vec3 col = mix(darkBase, cyan, mask * 0.12);
    col = mix(col, violet, edge * 0.08);

    // Apply RGB split aberration
    col.r += r * 0.03 * u_intensity;
    col.g += g * 0.025 * u_intensity;
    col.b += b * 0.045 * u_intensity;

    // Subtle vignette
    float dist = length(uv - 0.5);
    col *= smoothstep(0.9, 0.2, dist);

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function WebGLShader({ className = "", intensity = 1.0, speed = 1.0 }: WebGLShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // WebGL support check
    let canvas: HTMLCanvasElement;
    try {
      canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        requestAnimationFrame(() => setHasWebGL(false));
        return;
      }
    } catch {
      requestAnimationFrame(() => setHasWebGL(false));
      return;
    }

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.OrthographicCamera | null = null;
    let material: THREE.RawShaderMaterial | null = null;
    let geometry: THREE.PlaneGeometry | null = null;
    let animationFrameId: number | null = null;

    try {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      renderer = new THREE.WebGLRenderer({
        powerPreference: "high-performance",
        antialias: false,
        alpha: true,
      });

      // DPR capping for optimal GPU performance
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(width * dpr, height * dpr) },
          u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
          u_intensity: { value: intensity },
        },
        depthTest: false,
        depthWrite: false,
      });

      geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const clock = new THREE.Clock();

      const renderLoop = () => {
        if (!material || !renderer || !scene || !camera) return;
        
        // When reduced motion is preferred, advance very slowly
        const delta = prefersReducedMotion ? 0.05 : clock.getDelta();
        material.uniforms.u_time.value += delta * speed;
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(renderLoop);
      };

      animationFrameId = requestAnimationFrame(renderLoop);

      // Responsive resize handler
      const handleResize = () => {
        if (!container || !renderer || !material) return;
        const newWidth = container.clientWidth || window.innerWidth;
        const newHeight = container.clientHeight || window.innerHeight;
        renderer.setSize(newWidth, newHeight);
        const newDpr = Math.min(window.devicePixelRatio || 1, 2);
        renderer.setPixelRatio(newDpr);
        material.uniforms.u_resolution.value.set(newWidth * newDpr, newHeight * newDpr);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);

        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
        if (geometry) geometry.dispose();
        if (material) material.dispose();
      };
    } catch {
      requestAnimationFrame(() => setHasWebGL(false));
    }
  }, [intensity, speed, prefersReducedMotion]);

  if (!hasWebGL) {
    return (
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#050507] to-[#050507] pointer-events-none ${className}`}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
