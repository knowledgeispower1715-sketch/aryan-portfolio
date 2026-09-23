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
    scene.fog = new THREE.FogExp2(0x050507, 0.035);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 1. Central 3D Cryptographic Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer Holographic Wireframe Icosahedron
    const icosaGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, wireframeMat);
    coreGroup.add(icosaMesh);

    // Inner Metallic / Crystalline Octahedron
    const octGeo = new THREE.OctahedronGeometry(1.2, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x0d121d,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0x00d9ff,
      emissiveIntensity: 0.15,
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    coreGroup.add(octMesh);

    // Inner Crystalline Point Vertices
    const octWire = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const octWireMesh = new THREE.Mesh(octGeo, octWire);
    coreGroup.add(octWireMesh);

    // 2. Multi-Axis Orbital Holographic Gimbal Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00d9ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
    });

    const ringGeo1 = new THREE.TorusGeometry(3.0, 0.015, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.4, 0.015, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    coreGroup.add(ring2);

    // 3. Distributed 3D Particle Constellation (1,000 Nodes)
    const particleCount = 1000;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00d9ff);
    const violetColor = new THREE.Color(0x8b5cf6);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 4 + Math.random() * 12;
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
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 4. Studio Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00d9ff, 3, 20);
    cyanLight.position.set(4, 3, 4);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 2.5, 20);
    violetLight.position.set(-4, -3, 3);
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
        // Continuous Rotation
        icosaMesh.rotation.x = elapsed * 0.15;
        icosaMesh.rotation.y = elapsed * 0.2;

        octMesh.rotation.x = -elapsed * 0.25;
        octMesh.rotation.y = -elapsed * 0.3;
        octWireMesh.rotation.x = octMesh.rotation.x;
        octWireMesh.rotation.y = octMesh.rotation.y;

        ring1.rotation.z = elapsed * 0.18;
        ring2.rotation.x = elapsed * 0.12;

        particleSystem.rotation.y = elapsed * 0.03;
        particleSystem.rotation.x = elapsed * 0.015;
      }

      // Mouse-driven core parallax
      coreGroup.rotation.x = mouse.y * 0.4;
      coreGroup.rotation.y = mouse.x * 0.5;

      // Scroll-driven Camera Flythrough Dynamics
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollProgress = Math.min(scrollY / maxScroll, 1);

      // Camera smoothly tracks deeper into the particle lattice as user scrolls
      camera.position.z = 7 - scrollProgress * 3.5;
      camera.position.y = -scrollProgress * 2.0;
      coreGroup.position.y = scrollProgress * 1.5;

      // Pulsing lighting
      cyanLight.intensity = 2.5 + Math.sin(elapsed * 2) * 0.6;
      violetLight.intensity = 2.0 + Math.cos(elapsed * 1.8) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup & Resource Disposal
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      icosaGeo.dispose();
      wireframeMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      octWire.dispose();
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
