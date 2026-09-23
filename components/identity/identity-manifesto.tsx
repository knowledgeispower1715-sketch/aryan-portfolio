"use client";

import React from "react";
import { Shield, Lock, Layers, Zap } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/motion-wrapper";

export function IdentityManifesto() {
  const pillars = [
    {
      icon: Lock,
      metric: "8+ YRS",
      title: "Cryptocurrency Depth",
      description:
        "Actively immersed in digital assets, mining protocols, and market microstructure since age 12.",
    },
    {
      icon: Shield,
      metric: "ZERO-TRUST",
      title: "Offensive Security",
      description:
        "Trained in Kali Linux penetration testing, smart contract auditing, and formal reentrancy defense.",
    },
    {
      icon: Layers,
      metric: "EVM NATIVE",
      title: "Smart Contract Architecture",
      description:
        "Gas-optimized DeFi protocols, liquidity pool mechanics, and tokenomics across Ethereum and Polygon.",
    },
    {
      icon: Zap,
      metric: "7+ LANGS",
      title: "Systems Engineering",
      description:
        "Solid foundations in Python, Solidity, C++, Java, C, and TypeScript bridging backend logic with Web3.",
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#050507] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#00d9ff]" />
                <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest">
                  Statement & Foundations
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f0f0f0] leading-[1.15]">
                Cryptographic security is not an afterthought—it is the{" "}
                <span className="bg-gradient-to-r from-[#00d9ff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent">
                  architecture itself.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="max-w-md text-sm sm:text-base text-[#9ca3af] leading-relaxed font-normal">
              From analyzing Bitcoin blocks at age 12 to auditing EVM smart contracts and engineering reactive full-stack interfaces, my focus is building resilient decentralized technology.
            </p>
          </Reveal>
        </div>

        {/* 4 Architectural Pillar Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={i}>
                <div className="group relative h-full p-8 rounded-2xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-[#00d9ff]/40 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden">
                  {/* Subtle top edge specular highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.2] to-transparent" />

                  {/* Hover ambient glow */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#00d9ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#00d9ff]/30 text-[#00d9ff] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-wider text-white/[0.3] group-hover:text-[#00d9ff] transition-colors">
                        {pillar.metric}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#f0f0f0] mb-3 group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
