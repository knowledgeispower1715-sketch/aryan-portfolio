"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/components/motion/use-reduced-motion";

interface CyberSceneProps {
  className?: string;
}

export function CyberScene({ className = "" }: CyberSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // WebGL capability check
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.03);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 1. Central Master 3D Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Sculptural Artifact: Metallic Torus Knot Ribbon with Physical Shader
    const knotGeo = new THREE.TorusKnotGeometry(1.6, 0.42, 128, 32, 2, 3);
    const knotMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xd2d6e2),
      emissive: new THREE.Color(0x080a12),
      roughness: 0.16,
      metalness: 0.92,
      clearcoat: 0.85,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    knotMesh.castShadow = true;
    knotMesh.receiveShadow = true;
    masterGroup.add(knotMesh);

    // Internal Evolving Holographic Wireframe Core
    const innerGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerMesh);

    // Orbital Holographic Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    });

    const ringGeo1 = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    masterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.3, 0.015, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    masterGroup.add(ring2);

    // 2. Distributed 3D Particle Constellation (1,200 Nodes)
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00d9ff);
    const violetColor = new THREE.Color(0x8b5cf6);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.6 ? cyanColor : Math.random() > 0.3 ? violetColor : whiteColor;
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 3. Cinematic Studio Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 8, 6);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(0x00d9ff, 4.5, 25);
    cyanLight.position.set(5, 3, 5);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 3.5, 25);
    violetLight.position.set(-5, -3, 4);
    scene.add(violetLight);

    // Mouse & Scroll Interactivity
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Continuous Sculptural Rotation
        knotMesh.rotation.x = elapsed * 0.22;
        knotMesh.rotation.y = elapsed * 0.28;

        innerMesh.rotation.x = -elapsed * 0.35;
        innerMesh.rotation.y = -elapsed * 0.45;

        ring1.rotation.z = elapsed * 0.2;
        ring2.rotation.x = elapsed * 0.16;

        particleSystem.rotation.y = elapsed * 0.035;
        particleSystem.rotation.x = elapsed * 0.02;
      }

      // Mouse-driven core parallax
      masterGroup.rotation.x = mouse.y * 0.45;
      masterGroup.rotation.y = mouse.x * 0.55;

      // Scroll-driven Camera Flythrough Dynamics
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollProgress = Math.min(scrollY / maxScroll, 1);

      // Camera smoothly tracks through the lattice as user scrolls
      camera.position.z = 7.5 - scrollProgress * 4.0;
      camera.position.y = -scrollProgress * 2.2;
      masterGroup.position.y = scrollProgress * 1.8;

      // Pulsing lighting
      cyanLight.intensity = 3.5 + Math.sin(elapsed * 2.2) * 1.0;
      violetLight.intensity = 2.8 + Math.cos(elapsed * 1.9) * 0.8;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup & Resource Disposal
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      knotGeo.dispose();
      knotMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
