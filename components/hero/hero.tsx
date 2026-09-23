"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { MetallicButton } from "@/components/ui/metallic-button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between pt-28 pb-12 px-6 overflow-hidden">
      {/* Cinematic WebGL Shader Background */}
      <WebGLShader intensity={1.2} speed={0.9} />

      {/* Atmospheric vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/20 to-[#050507] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050507] to-transparent pointer-events-none" />

      {/* Top Metadata Bar */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-[#6b7280] uppercase pt-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#00d9ff]" />
          <span>EVM ARCHITECTURE · AUDITING · FULL-STACK</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>LAT 23.1815° N, 79.9864° E</span>
          <span className="text-[#374151]">/</span>
          <span>JABALPUR, INDIA</span>
        </div>
      </div>

      {/* Main Editorial Hero Typography */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-12 flex flex-col items-start text-left">
        {/* Experience Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.03] backdrop-blur-xl mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#00d9ff] shadow-[0_0_10px_#00d9ff] animate-pulse" />
          <span className="font-mono text-xs text-[#9ca3af]">
            8+ Years Cryptocurrency Experience
          </span>
          <span className="text-white/[0.2] font-mono">•</span>
          <span className="font-mono text-xs text-[#00d9ff]">
            Began at Age 12
          </span>
        </motion.div>

        {/* Oversized Layered Name Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-[-0.05em] leading-[0.92] text-[#f0f0f0] select-none">
            ARYAN
            <br />
            <span className="bg-gradient-to-r from-white via-[#f0f0f0] to-white/40 bg-clip-text text-transparent">
              TIWARI
            </span>
          </h1>
        </motion.div>

        {/* Identity & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#f0f0f0] flex flex-wrap items-center gap-2">
            <span>Blockchain Developer</span>
            <span className="text-[#00d9ff] font-serif italic">&</span>
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Security Engineer
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9ca3af] leading-relaxed font-normal">
            Specializing in resilient smart contracts, EVM-compatible decentralized protocols, and rigorous penetration testing. Merging security-first systems with full-stack digital execution.
          </p>
        </motion.div>

        {/* Dual Interaction System: Metallic & Liquid Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Hardware Metallic Button */}
          <MetallicButton
            variant="cyan"
            size="lg"
            onClick={handleScrollToProjects}
            className="group"
          >
            <span>Explore Architecture</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MetallicButton>

          {/* Liquid Glass Button */}
          <LiquidButton
            variant="default"
            size="lg"
            onClick={handleScrollToContact}
            className="group"
          >
            <span>Initiate Transmission</span>
          </LiquidButton>

          {/* Social Micro-links */}
          <div className="flex items-center gap-3 ml-2 sm:ml-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#9ca3af] hover:text-[#00d9ff] hover:border-[#00d9ff]/40 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#9ca3af] hover:text-[#00d9ff] hover:border-[#00d9ff]/40 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Architectural Details & Scroll Cue */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-8 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#6b7280]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00d9ff]" />
            <span>KALI LINUX & SOLIDITY AUDITING</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#8b5cf6]" />
            <span>DEFI & ON-CHAIN ALGORITHMS</span>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 cursor-pointer hover:text-[#f0f0f0] transition-colors"
          onClick={handleScrollToProjects}
        >
          <span className="hidden sm:inline">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-4 h-4 text-[#00d9ff]" />
        </motion.div>
      </div>
    </section>
  );
}
