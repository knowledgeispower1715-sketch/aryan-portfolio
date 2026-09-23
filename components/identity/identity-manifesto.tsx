"use client";

import React, { useState } from "react";
import { Shield, Lock, Layers, Zap, Terminal, ChevronRight, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/motion-wrapper";
import { TiltCard } from "@/components/ui/tilt-card";

export function IdentityManifesto() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars = [
    {
      id: "01",
      title: "THE 8-YEAR CRYPTO GENESIS",
      badge: "AGE 12 // 2018 ANCHOR",
      icon: Zap,
      metric: "8+ YRS",
      statement: "Deep historical immersion across crypto market cycles and infrastructure.",
      deepDive:
        "Entered cryptocurrency at age 12 in 2018. Dissected Bitcoin mining algorithms, proof-of-work consensus, and early blockchain mechanics years before DeFi gained global adoption. This multi-cycle experience provides rare intuition regarding tokenomic vulnerabilities and distributed consensus bottlenecks.",
      vectors: ["Bitcoin Mining & Mempools", "EVM Genesis", "Multi-Cycle Intuition"],
    },
    {
      id: "02",
      title: "ZERO-TRUST OFFENSIVE DEFENSE",
      badge: "KALI LINUX // PENTESTING",
      icon: Lock,
      metric: "ZERO-TRUST",
      statement: "Penetration testing mindset applied to distributed smart contracts.",
      deepDive:
        "Trained in hands-on Kali Linux offensive operations, network penetration testing, and smart contract vulnerability analysis. Auditing protocols against reentrancy vectors, access control bypasses, oracle manipulation, and economic exploit scenarios before mainnet deployment.",
      vectors: ["Reentrancy Vulnerability Audits", "Kali Linux Toolchain", "Access Control Formal Verification"],
    },
    {
      id: "03",
      title: "EVM NATIVE ARCHITECTURE",
      badge: "SOLIDITY // GAS OPTIMIZED",
      icon: Layers,
      metric: "EVM NATIVE",
      statement: "Scalable smart contract systems across Ethereum, Polygon, and BNB Chain.",
      deepDive:
        "Engineering modular smart contract architectures for automated market makers (AMMs), decentralized liquidity pools, and asset vaults. Designing contracts with strict gas efficiency constraints, reentrancy guards, and proxy patterns.",
      vectors: ["Solidity Compiler Mastery", "Gas Optimization", "Multi-Chain Deployment"],
    },
    {
      id: "04",
      title: "POLYGLOT SYSTEMS FOUNDATION",
      badge: "7+ PROGRAMMING LANGUAGES",
      icon: Shield,
      metric: "7+ LANGS",
      statement: "Low-level memory management meets modern reactive Web3 engineering.",
      deepDive:
        "Fluency spanning low-level and high-level environments: Python, Solidity, C++, Java, C, TypeScript, and JavaScript. Bridges traditional algorithmic trading pipelines and systems engineering with decentralized user interfaces.",
      vectors: ["Python Algorithmic Pipelines", "C/C++ Low-Level Systems", "Full-Stack Web3"],
    },
  ];

  return (
    <section
      id="manifesto"
      className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#07080c] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00d9ff]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#8b5cf6]/[0.02] rounded-full blur-3xl pointer-events-none" />

      {/* Kinetic Architectural Ticker */}
      <div className="w-full overflow-hidden border-b border-white/[0.08] pb-6 mb-16 select-none opacity-40">
        <div className="flex gap-8 whitespace-nowrap font-mono text-xs tracking-widest text-[#9ca3af] animate-none">
          <span>{"// 02 DECLASSIFIED ENGINEERING MANIFESTO"}</span>
          <span>•</span>
          <span>ZERO-TRUST ARCHITECTURE</span>
          <span>•</span>
          <span>GAS EFFICIENCY FORMAL PROOF</span>
          <span>•</span>
          <span>KALI LINUX OFFENSIVE VECTORS</span>
          <span>•</span>
          <span>8+ YEARS CRYPTOCURRENCY EVOLUTION</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00d9ff] uppercase tracking-wider mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>DECLASSIFIED MANIFESTO // 02</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.02]">
                Security is Not an Afterthought.
                <br />
                <span className="text-[#8b949e]">It is the Foundational Constraint.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base text-[#9ca3af] font-mono leading-relaxed border-l-2 border-[#00d9ff]/50 pl-4">
                In decentralized protocols, code execution is irreversible. Every smart contract is an adversarial battlefield where only mathematically verified, gas-conscious architecture survives.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric 4-Pillar Architectural Matrix */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isExpanded = activePillar === idx;

            return (
              <StaggerItem key={pillar.id}>
                <TiltCard
                  maxTilt={6}
                  onClick={() => setActivePillar(isExpanded ? null : idx)}
                  className={`group relative rounded-2xl p-7 transition-all duration-300 cursor-pointer overflow-hidden border ${
                    isExpanded
                      ? "bg-[#0f121b] border-[#00d9ff]/50 shadow-[0_12px_40px_rgba(0,217,255,0.12)]"
                      : "bg-[#0b0d13]/90 border-white/[0.1] hover:border-white/[0.22] hover:bg-[#0e1119]"
                  }`}
                  data-cursor="inspect"
                >
                  {/* Top Specular Line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />

                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-[#00d9ff] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#00d9ff] tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>
                    <span className="font-mono text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {pillar.id}
                    </span>
                  </div>

                  {/* Title & Metric */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold tracking-tight text-white mb-1.5 flex items-center justify-between">
                      <span>{pillar.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#00d9ff] transition-transform duration-300 ${
                          isExpanded ? "rotate-90" : "group-hover:translate-x-1"
                        }`}
                      />
                    </h3>
                    <p className="text-sm text-[#9ca3af] leading-relaxed">
                      {pillar.statement}
                    </p>
                  </div>

                  {/* Deep-Dive Expandable Dossier */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-4">
                      <p className="text-xs sm:text-sm text-[#d1d5db] leading-relaxed font-mono">
                        {pillar.deepDive}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {pillar.vectors.map((vec) => (
                          <span
                            key={vec}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.1] text-[11px] font-mono text-[#00d9ff]"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            {vec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom micro-cue */}
                  <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-[#6b7280]">
                    <span>STATUS: DECLASSIFIED</span>
                    <span className="text-[#00d9ff] group-hover:underline">
                      {isExpanded ? "[ COLLAPSE DOSSIER ]" : "[ CLICK TO INSPECT ]"}
                    </span>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
