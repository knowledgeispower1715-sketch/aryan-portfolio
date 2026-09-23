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
    <section id="contact" className="relative py-36 px-6 bg-[#050507] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,217,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Tag */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#00d9ff]" />
            <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest">
              Final Scene · Inquiries & Transmission
            </span>
          </div>
        </Reveal>

        {/* Large Editorial Headline */}
        <div className="mb-20">
          <Reveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[0.95] text-[#f0f0f0]">
              LET&apos;S BUILD
              <br />
              SOMETHING{" "}
              <span className="bg-gradient-to-r from-[#00d9ff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent">
                RESILIENT.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Interactive Communication Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Email & Terminal Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-[#0c0e14] border border-white/[0.1] shadow-2xl relative overflow-hidden">
            {/* Specular top border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d9ff]/30 to-transparent" />

            <div>
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00d9ff]" />
                  <span className="font-mono text-xs text-[#9ca3af] uppercase">
                    direct_transmission
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Projects</span>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-xs font-mono text-[#6b7280] uppercase tracking-wider block mb-2">
                  Primary Contact Address
                </span>
                <div className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-[#f0f0f0] break-all select-all">
                  {personalInfo.email}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-4">
              <MetallicButton
                variant="cyan"
                size="default"
                onClick={handleCopyEmail}
                className="group"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>Coordinates Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </MetallicButton>

              <LiquidButton
                variant="default"
                size="default"
                onClick={() => {
                  window.location.href = `mailto:${personalInfo.email}`;
                }}
              >
                <Mail className="w-4 h-4" />
                <span>Launch Mail Client</span>
              </LiquidButton>
            </div>
          </div>

          {/* Right: Verified Channels & Focus Roles */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Social Verified Links */}
            <div className="p-8 rounded-3xl bg-[#0c0e14] border border-white/[0.08] shadow-xl flex flex-col gap-4">
              <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest mb-2 block">
                Verified Networks
              </span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00d9ff]/40 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#00d9ff]">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-sm font-semibold text-[#f0f0f0] group-hover:text-[#00d9ff] transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-[11px] text-[#6b7280] font-mono">
                      /in/aryan-t-199014224
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#00d9ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#00d9ff]/40 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-[#00d9ff]">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-sm font-semibold text-[#f0f0f0] group-hover:text-[#00d9ff] transition-colors">
                      GitHub
                    </div>
                    <div className="text-[11px] text-[#6b7280] font-mono">
                      @knowledgeispower1715-sketch
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6b7280] group-hover:text-[#00d9ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Engagement Domains Pill Card */}
            <div className="p-8 rounded-3xl bg-[#0c0e14] border border-white/[0.08] shadow-xl">
              <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest mb-3 block">
                Collaboration Scopes
              </span>
              <div className="flex flex-wrap gap-2">
                {availability.roles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#cbd5e1]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
