"use client";

import React, { useState } from "react";
import { Terminal, Shield, Cpu, Database, Layout, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/motion-wrapper";
import { IntegrationCard } from "@/components/ui/integration-card";
import { skillCategories } from "@/data/portfolio-data";

export function SkillsSection() {
  const [selectedSlug, setSelectedSlug] = useState<string>("blockchain");

  const domainIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    languages: Cpu,
    blockchain: Database,
    security: Shield,
    frontend: Layout,
    crypto: Sparkles,
  };

  const domainDescriptions: Record<string, string> = {
    blockchain:
      "Architecting decentralized financial primitives, liquidity mechanisms, and gas-efficient EVM smart contracts deployed across Ethereum, Polygon, and BNB Chain.",
    security:
      "Hands-on offensive security operations utilizing Kali Linux to audit smart contracts against reentrancy vectors, access control bypasses, and network vulnerabilities.",
    languages:
      "Low-level to high-level multi-language fluency spanning compiled systems (C++, C, Java) and dynamic cryptographic environments (Python, Solidity, TypeScript).",
    frontend:
      "Building high-frequency, responsive decentralized application interfaces with wallet state management, real-time transaction telemetry, and fluid micro-interactions.",
    crypto:
      "Quantitative on-chain analysis, mempool pattern detection, algorithmic trading logic, and mining pool optimization frameworks developed over 8 years.",
  };

  const currentCategory =
    skillCategories.find((c) => c.slug === selectedSlug) || skillCategories[1];
  const CurrentIcon = domainIcons[currentCategory.slug] || Terminal;

  return (
    <section
      id="ecosystem"
      className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#050507] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00d9ff] uppercase tracking-wider mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>CAPABILITY MATRIX & NEXUS // 03</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none">
                Interactive Technology Ecosystem
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="max-w-md text-sm font-mono text-[#9ca3af] leading-relaxed">
              {"// An interconnected web of cryptographic execution, low-level compilers, penetration testing, and design-engineering workflows."}
            </p>
          </Reveal>
        </div>

        {/* Two-Column Grid: Spatial Domain Explorer + Integration Engine Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Wing (7 Cols): Spatial Domain Selector & Capability Readout */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Domain Navigation Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#0c0e14] border border-white/[0.1] shadow-inner">
              {skillCategories.map((cat) => {
                const Icon = domainIcons[cat.slug] || Terminal;
                const isActive = selectedSlug === cat.slug;

                return (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedSlug(cat.slug)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#00d9ff] text-[#050507] font-bold shadow-[0_0_20px_rgba(0,217,255,0.4)]"
                        : "text-[#8b949e] hover:text-white hover:bg-white/[0.04]"
                    }`}
                    data-cursor="select"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.name.toUpperCase()}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Domain Telemetry Terminal Box */}
            <div className="rounded-2xl border border-white/[0.12] bg-[#0c0e14]/90 backdrop-blur-xl p-7 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00d9ff]/10 border border-[#00d9ff]/30 flex items-center justify-center text-[#00d9ff]">
                    <CurrentIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                      DOMAIN: {currentCategory.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#00d9ff]">
                      VERIFIED REPOSITORY PROTOCOL
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-[10px] font-mono text-[#9ca3af]">
                  {currentCategory.skills.length} OPERATIONAL NODES
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#9ca3af] leading-relaxed mb-6 font-mono">
                {domainDescriptions[currentCategory.slug]}
              </p>

              {/* Operational Nodes Array */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-[#00d9ff]/50 hover:bg-white/[0.05] transition-all flex items-center justify-between"
                  >
                    <span className="font-mono text-xs text-[#f0f0f0] group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/60 group-hover:text-[#00d9ff] transition-colors" />
                  </div>
                ))}
              </div>

              {/* Sub-telemetry readout */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#6b7280]">
                <span>STATUS: HIGH_VERIFICATION</span>
                <span className="text-[#00d9ff] flex items-center gap-1">
                  SYS_INTEGRITY: 100%
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Wing (5 Cols): The Hardened Integration Card Engine */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl border border-white/[0.12] bg-[#0c0e14]/60 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono">
                <span className="text-[#8b949e] flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#00d9ff]" />
                  DESIGN-TO-CODE ENGINE
                </span>
                <span className="text-emerald-400 font-bold">PIPELINE: ACTIVE</span>
              </div>

              {/* Hardened Integration Card Component */}
              <div className="w-full flex justify-center py-2">
                <IntegrationCard />
              </div>

              <div className="pt-2 text-[11px] font-mono text-[#6b7280] text-center border-t border-white/[0.08]">
                {"// Hardened, deterministic animated workflow linking Figma, Claude, shadcn, React, Motion, and Tailwind"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
