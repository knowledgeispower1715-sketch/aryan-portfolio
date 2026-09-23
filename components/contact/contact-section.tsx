"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Terminal } from "lucide-react";
import { personalInfo, availability } from "@/data/portfolio-data";
import { Reveal } from "@/components/motion/motion-wrapper";
import { MetallicButton } from "@/components/ui/metallic-button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="transmission"
      className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#050507] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Terminal Header Tag */}
        <div className="text-center mb-12">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] font-mono text-xs text-[#00d9ff] uppercase tracking-wider mb-6">
              <Terminal className="w-3.5 h-3.5" />
              <span>DIRECT TRANSMISSION CHANNEL // 06</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none mb-6">
              Let&apos;s Build Something
              <br />
              <span className="bg-gradient-to-r from-[#00d9ff] via-white to-[#8b5cf6] bg-clip-text text-transparent">
                Uncompromising & Resilient.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-[#9ca3af] font-normal leading-relaxed">
              Available for high-stakes blockchain engineering, EVM protocol architecture, DeFi security audits, and penetration testing.
            </p>
          </Reveal>
        </div>

        {/* Central Cryptographic Terminal Interface */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-white/[0.14] bg-[#0c0e14]/90 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d9ff]/50 to-transparent" />

          {/* Terminal Console Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] font-mono text-xs text-[#6b7280]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-semibold">CHANNEL: ENCRYPTED // READY</span>
            </div>
            <span className="text-[#00d9ff]">SEC_VERIFIED: 100%</span>
          </div>

          {/* Interactive Direct Email Interface */}
          <div className="my-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#050507] border border-white/[0.1]">
            <div className="flex items-center gap-3.5 pl-2 overflow-hidden">
              <Mail className="w-5 h-5 text-[#00d9ff] shrink-0" />
              <span className="font-mono text-sm sm:text-base text-white tracking-wide truncate">
                {personalInfo.email}
              </span>
            </div>

            <button
              onClick={handleCopyEmail}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                copied
                  ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                  : "bg-white/[0.08] text-white hover:bg-white/[0.15] border border-white/[0.1]"
              }`}
              data-cursor="copy"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY DISPATCH EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Dual Action Triggers: Liquid Glass + Metallic Hardware */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-2">
            <LiquidButton
              variant="cyan"
              size="lg"
              href={`mailto:${personalInfo.email}`}
              data-cursor="transmit"
            >
              <Mail className="w-4 h-4 text-black" />
              <span>LAUNCH MAIL CLIENT</span>
              <ArrowUpRight className="w-4 h-4 text-black/70" />
            </LiquidButton>

            <MetallicButton
              variant="silver"
              size="lg"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
            >
              <LinkedInIcon className="w-4 h-4 text-black" />
              <span>LINKEDIN DISPATCH</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </MetallicButton>

            <MetallicButton
              variant="dark"
              size="lg"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
            >
              <GitHubIcon className="w-4 h-4 text-white" />
              <span>GITHUB REPOSITORIES</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </MetallicButton>
          </div>

          {/* Open Collaboration Roles */}
          <div className="mt-10 pt-6 border-t border-white/[0.08] text-center">
            <span className="font-mono text-[11px] text-[#6b7280] uppercase tracking-wider block mb-3">
              ACTIVE ENGAGEMENT CAPABILITIES
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {availability.roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#9ca3af]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
