"use client";

import React from "react";
import { ArrowUpRight, Terminal, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { Reveal } from "@/components/motion/motion-wrapper";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function ProjectsSection() {

  const projectDetails: Record<
    string,
    {
      num: string;
      categoryTag: string;
      architectureSummary: string;
      metricLabel: string;
      metricValue: string;
      visualType: "solidity" | "audit" | "analytics" | "interface";
    }
  > = {
    "smart-contracts": {
      num: "01",
      categoryTag: "DECENTRALIZED FINANCE // PROTOCOL",
      architectureSummary:
        "Gas-optimized DeFi architectures deployed across Ethereum, Polygon, and BNB Chain. Implementing modular AMM mechanics, liquidity vaults, and reentrancy-safe state execution.",
      metricLabel: "GAS OPTIMIZATION",
      metricValue: "STRICT YUL / HEURISTIC",
      visualType: "solidity",
    },
    "security-suite": {
      num: "02",
      categoryTag: "OFFENSIVE SECURITY // AUDITING",
      architectureSummary:
        "Comprehensive penetration testing and smart contract vulnerability analysis built on Kali Linux tools, static analysis pipelines, and formal verification vectors.",
      metricLabel: "THREAT PREVENTION",
      metricValue: "ZERO-DAY PROTOCOLS",
      visualType: "audit",
    },
    "onchain-analytics": {
      num: "03",
      categoryTag: "QUANTITATIVE // ON-CHAIN INTELLIGENCE",
      architectureSummary:
        "Algorithmic market analytics pipelines and mining pool optimization frameworks leveraging on-chain mempool data, mathematical indicators, and risk mitigation models.",
      metricLabel: "PIPELINE PROFILE",
      metricValue: "HIGH-FREQUENCY ON-CHAIN",
      visualType: "analytics",
    },
    "web3-interfaces": {
      num: "04",
      categoryTag: "REACTIVE FRONTEND // FULL-STACK WEB3",
      architectureSummary:
        "Full-stack Web3 interfaces engineered with Next.js, TypeScript, and Ethers.js. Delivering zero-latency wallet connectivity, transaction life-cycle tracking, and fluid motion design.",
      metricLabel: "INTERFACE LATENCY",
      metricValue: "SUB-FRAME OPTIMIZED",
      visualType: "interface",
    },
  };

  return (
    <section
      id="work"
      className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#050507] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-24 pb-8 border-b border-white/[0.08]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00d9ff] uppercase tracking-wider mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>SELECTED SYSTEMS ARCHITECTURE // 04</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
                Engineering Case Studies
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="max-w-md text-sm font-mono text-[#9ca3af] leading-relaxed">
              {"// Deep-dive analysis into EVM smart contracts, security audit methodologies, algorithmic trading pipelines, and Web3 interfaces."}
            </p>
          </Reveal>
        </div>

        {/* Editorial Storytelling Alternating Spreads */}
        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => {
            const meta = projectDetails[project.id] || {
              num: `0${idx + 1}`,
              categoryTag: "SYSTEM ARCHITECTURE",
              architectureSummary: project.description,
              metricLabel: "STATUS",
              metricValue: "ACTIVE",
              visualType: "solidity",
            };

            const isEven = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="relative rounded-3xl border border-white/[0.12] bg-[#090b10]/95 backdrop-blur-2xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)]"
              >
                {/* Subtle top edge specular highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.2] to-transparent" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* TEXT CONTENT COLUMN (6 Cols) */}
                  <div className={`lg:col-span-6 flex flex-col items-start ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {/* Index Number & Category Pill */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-mono text-3xl sm:text-4xl font-black text-[#00d9ff]">
                        {meta.num}
                      </span>
                      <span className="text-white/20 font-mono">/</span>
                      <span className="font-mono text-xs tracking-wider text-[#9ca3af] uppercase">
                        {meta.categoryTag}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase mb-4 leading-tight">
                      {project.title}
                    </h3>

                    {/* Long Description Narrative */}
                    <p className="text-base text-[#9ca3af] leading-relaxed mb-6 font-normal">
                      {project.longDescription || project.description}
                    </p>

                    {/* Architectural Metric Callout */}
                    <div className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] mb-6 flex items-center justify-between font-mono text-xs">
                      <span className="text-[#8b949e]">{meta.metricLabel}:</span>
                      <span className="text-[#00d9ff] font-bold">{meta.metricValue}</span>
                    </div>

                    {/* Technology Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.1] font-mono text-xs text-[#f0f0f0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Triggers */}
                    <div className="flex items-center gap-4">
                      <LiquidButton
                        variant="default"
                        size="default"
                        onClick={() => {
                          const contactEl = document.getElementById("transmission");
                          contactEl?.scrollIntoView({ behavior: "smooth" });
                        }}
                        data-cursor="explore"
                      >
                        <span>INQUIRE ARCHITECTURE</span>
                        <ArrowUpRight className="w-4 h-4 text-[#00d9ff]" />
                      </LiquidButton>
                    </div>
                  </div>

                  {/* INTERACTIVE VISUAL DISPLAY COLUMN (6 Cols) */}
                  <div className={`lg:col-span-6 w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="w-full rounded-2xl border border-white/[0.12] bg-[#050507] p-6 shadow-inner relative overflow-hidden font-mono text-xs">
                      {/* Top Chrome */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4 text-[#6b7280]">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          <span className="ml-2 text-[11px] text-[#9ca3af]">
                            {project.id}.terminal
                          </span>
                        </div>
                        <span className="text-[#00d9ff] text-[10px]">VERIFIED_SPEC</span>
                      </div>

                      {/* Visual Content Based on Project Type */}
                      {meta.visualType === "solidity" && (
                        <div className="space-y-2 text-[#9ca3af]">
                          <p className="text-purple-400">{"// SPDX-License-Identifier: MIT"}</p>
                          <p className="text-purple-400">pragma solidity ^0.8.24;</p>
                          <p className="text-blue-400 mt-2">
                            contract <span className="text-emerald-400">EVMResilientVault</span> is ReentrancyGuard &#123;
                          </p>
                          <p className="pl-4 text-[#dedede]">
                            mapping(address =&gt; uint256) private _balances;
                          </p>
                          <p className="pl-4 text-blue-400 mt-1">
                            function <span className="text-yellow-300">executeLiquiditySweep</span>() external nonReentrant &#123;
                          </p>
                          <p className="pl-8 text-emerald-400">
                            uint256 delta = _calculateAMMInvariance();
                          </p>
                          <p className="pl-8 text-emerald-400">
                            emit SettlementExecuted(msg.sender, delta);
                          </p>
                          <p className="pl-4 text-blue-400">&#125;</p>
                          <p className="text-blue-400">&#125;</p>
                          <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#00d9ff]">
                            <span>GAS ESTIMATE: 28,450 GWEI</span>
                            <span>SECURITY: AUDITED</span>
                          </div>
                        </div>
                      )}

                      {meta.visualType === "audit" && (
                        <div className="space-y-2.5 font-mono text-[11px]">
                          <p className="text-[#00d9ff]">$ kali-audit --target evm_protocol --vectors all</p>
                          <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-[#dedede]">
                            <p className="text-emerald-400 flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              REENTRANCY_CHECK: PASSED (NO EXTERNAL CALL DRIFT)
                            </p>
                          </div>
                          <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-[#dedede]">
                            <p className="text-emerald-400 flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              ACCESS_CONTROL: ENFORCED (ROLE_BASED_PERMISSIONS)
                            </p>
                          </div>
                          <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-[#dedede]">
                            <p className="text-emerald-400 flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              INTEGER_OVERFLOW: IMMUNE (SOLIDITY 0.8+ CHECKED ARITHMETIC)
                            </p>
                          </div>
                          <p className="text-[#6b7280] pt-2">
                            [SUMMARY] 0 Critical, 0 High, 0 Medium Vulnerabilities Found.
                          </p>
                        </div>
                      )}

                      {meta.visualType === "analytics" && (
                        <div className="space-y-2.5 text-xs text-[#9ca3af]">
                          <p className="text-[#00d9ff]">$ python3 onchain_quant_pipeline.py</p>
                          <div className="grid grid-cols-2 gap-2 pt-1">
                            <div className="p-2 rounded bg-white/[0.02] border border-white/[0.06]">
                              <span className="text-[10px] text-[#6b7280] block">MEMPOOL TX/SEC</span>
                              <span className="text-sm font-bold text-white">4,820 TX</span>
                            </div>
                            <div className="p-2 rounded bg-white/[0.02] border border-white/[0.06]">
                              <span className="text-[10px] text-[#6b7280] block">MINING POOL EFF</span>
                              <span className="text-sm font-bold text-emerald-400">99.84%</span>
                            </div>
                          </div>
                          <p className="text-[#dedede] pt-1">
                            &gt; Calculating VWAP divergence and liquidity concentration bands...
                          </p>
                          <p className="text-emerald-400">&gt; Risk delta mitigated across 3 volatility regimes.</p>
                        </div>
                      )}

                      {meta.visualType === "interface" && (
                        <div className="space-y-3 text-xs">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                            <span className="text-[#8b949e]">WALLET CONNECTION</span>
                            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              CONNECTED
                            </span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                            <span className="text-[#8b949e]">TRANSACTION STATE</span>
                            <span className="text-[#00d9ff] font-bold">BLOCK CONFIRMED (12 SEC)</span>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                            <span className="text-[#8b949e]">UI FRAME BUDGET</span>
                            <span className="text-white font-bold">120 FPS / ZERO DROPPED</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
