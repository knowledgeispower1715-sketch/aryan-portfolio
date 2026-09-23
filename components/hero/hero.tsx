"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Terminal, Shield, Cpu, Activity } from "lucide-react";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { MetallicButton } from "@/components/ui/metallic-button";
import { TiltCard } from "@/components/ui/tilt-card";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { soundFX } from "@/lib/sound-fx";
import { personalInfo } from "@/data/portfolio-data";

export function Hero() {
  const scrollTo = (id: string) => {
    soundFX.playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-28 pb-10 px-6 sm:px-10 lg:px-16 overflow-hidden bg-[#050507]"
    >
      {/* Real-Time Three.js WebGL Shader Surface */}
      <WebGLShader intensity={1.15} speed={0.8} />

      {/* Atmospheric Vignette & Grid Horizon Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/15 via-[#050507]/60 to-[#050507] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent pointer-events-none" />

      {/* Architectural Crosshair Reticles */}
      <div className="absolute top-24 left-8 text-white/[0.12] font-mono text-xs select-none pointer-events-none">
        + 001 // SEC_ORIGIN
      </div>
      <div className="absolute top-24 right-8 text-white/[0.12] font-mono text-xs select-none pointer-events-none">
        GRID_POS // 23.18°N 79.98°E +
      </div>

      {/* Main Asymmetric Split Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: The Typographic Monument & Direct Manifesto (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Identity Telemetry Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.14] bg-white/[0.04] backdrop-blur-xl mb-6 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00d9ff] shadow-[0_0_8px_#00d9ff] animate-pulse" />
            <span className="font-mono text-[11px] tracking-wider text-[#9ca3af] uppercase">
              OPERATIONAL DOSSIER // JABALPUR, INDIA
            </span>
            <span className="text-white/20 font-mono">•</span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-[#00d9ff]">
              8+ YRS CRYPTO DEPTH
            </span>
          </motion.div>

          {/* Giant Editorial Typographic Title */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full tracking-tighter"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase text-white leading-[0.88] select-none">
              ARYAN
              <br />
              <span className="bg-gradient-to-r from-white via-[#dedede] to-white/30 bg-clip-text text-transparent">
                TIWARI
              </span>
            </h1>
          </motion.div>

          {/* Engineering Positioning Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl"
          >
            <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-[#00d9ff] tracking-wide mb-3">
              <Terminal className="w-4 h-4" />
              <span>BLOCKCHAIN ARCHITECT & SECURITY ENGINEER</span>
            </div>
            <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed font-normal">
              Immersed in cryptocurrency protocols since age 12. Engineering gas-optimized EVM smart contracts, conducting offensive penetration testing in Kali Linux, and architecting zero-trust Web3 systems.
            </p>
          </motion.div>

          {/* Contrast Interaction Controls: Metallic Button + Liquid Glass Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* Primary Action: Tactile Metallic Button */}
            <MetallicButton
              variant="silver"
              size="lg"
              onClick={() => scrollTo("work")}
              className="group"
              data-cursor="explore"
            >
              <span>EXPLORE SYSTEMS ARCHITECTURE</span>
              <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
            </MetallicButton>

            {/* Secondary Action: Refractive Liquid Glass Button */}
            <LiquidButton
              variant="default"
              size="lg"
              onClick={() => scrollTo("transmission")}
              data-cursor="transmit"
            >
              <Terminal className="w-4 h-4 text-[#00d9ff]" />
              <span>INITIATE CONTACT</span>
              <ArrowUpRight className="w-4 h-4 text-white/50" />
            </LiquidButton>
          </motion.div>

          {/* Direct Verified Social Anchors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex items-center gap-6 text-xs font-mono text-[#6b7280]"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#00d9ff] transition-colors"
              data-cursor="open"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GITHUB // REPOS</span>
            </a>
            <span className="text-white/10">|</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#00d9ff] transition-colors"
              data-cursor="open"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LINKEDIN // PROFILE</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Real-Time Cybernetic Telemetry Terminal (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <TiltCard
            maxTilt={12}
            className="w-full max-w-md rounded-2xl border border-white/[0.14] bg-[#0c0e14]/90 backdrop-blur-2xl p-6 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden"
          >
            {/* Glossy top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d9ff]/50 to-transparent" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00d9ff] shadow-[0_0_8px_#00d9ff]" />
                <span className="text-[#f0f0f0] font-semibold">CORE_TELEMETRY // HUD</span>
              </div>
              <span className="text-[#00d9ff] font-bold">STATE: ONLINE</span>
            </div>

            {/* Biometric Operator Holographic Frame */}
            <div className="py-4 border-b border-white/[0.08] flex items-center gap-4">
              <div className="relative group/avatar shrink-0">
                {/* 3D Holographic Outer Frame */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-[#00d9ff]/50 bg-black/60 shadow-[0_0_20px_rgba(0,217,255,0.25)]">
                  {/* Real Authenticated Profile Photo */}
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-100 group-hover/avatar:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Holographic Cyan Scanlines Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,217,255,0.15)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay opacity-70" />
                  {/* Radial Lens Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00d9ff]/10 via-transparent to-white/10 pointer-events-none" />
                </div>
                {/* Status Indicator */}
                <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#050507] border border-[#00d9ff]/60">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                </div>
              </div>

              <div className="flex flex-col min-w-0 font-mono">
                <div className="flex items-center gap-1.5 text-[10px] text-[#00d9ff] font-bold tracking-widest uppercase">
                  <span>SEC_OPERATOR // VERIFIED</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight truncate">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-[#9ca3af] truncate">
                  Blockchain & Security Engineer
                </p>
                <div className="mt-1.5 flex items-center gap-2 text-[10px] text-[#6b7280]">
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#dedede]">
                    AGE 20
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-emerald-400">
                    CLEARANCE: L5
                  </span>
                </div>
              </div>
            </div>

            {/* Telemetry Metric Rows */}
            <div className="py-4 flex flex-col gap-3 text-xs font-mono">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[#8b949e] flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#00d9ff]" />
                  SECURITY_POSTURE
                </span>
                <span className="text-white font-semibold">OFFENSIVE / ZERO-TRUST</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[#8b949e] flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#00d9ff]" />
                  PRIMARY_VM
                </span>
                <span className="text-white font-semibold">EVM (ETH / POLYGON / BNB)</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[#8b949e] flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#00d9ff]" />
                  GENESIS_ANCHOR
                </span>
                <span className="text-[#00d9ff] font-bold">AGE 12 // 2018 BITCOIN</span>
              </div>
            </div>

            {/* Live Terminal Log readout */}
            <div className="p-3 rounded-lg bg-[#050507] border border-white/[0.08] font-mono text-[11px] text-[#6b7280] space-y-1">
              <p className="text-[#00d9ff]">$ ./verify_integrity.sh --all</p>
              <p className="text-emerald-400">✓ EVM Contracts: Gas-Optimized</p>
              <p className="text-emerald-400">✓ Kali Linux: PenTest Vectors Active</p>
              <p className="text-[#f0f0f0]">● Languages: Sol · Py · C++ · Java · TS</p>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#6b7280] gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>ALL PROTOCOLS VERIFIED · NO FABRICATIONS</span>
        </div>
        <div className="flex items-center gap-6">
          <span>LAT 23.1815° N, 79.9864° E</span>
          <span className="text-white/20">|</span>
          <button
            onClick={() => scrollTo("manifesto")}
            className="text-[#f0f0f0] hover:text-[#00d9ff] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>SCROLL DOWN</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
