"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { IntegrationCard, Integration } from "@/components/ui/integration-card";
import { Cpu, ShieldCheck, Terminal, Layers } from "lucide-react";

const PIPELINE_PILLARS = [
  {
    icon: Cpu,
    title: "EVM Smart Contract Core",
    description:
      "Production Solidity contracts engineered for Ethereum, Polygon, and BNB Chain. Optimized for gas conservation and strict state invariability.",
    tag: "Solidity / Hardhat",
  },
  {
    icon: ShieldCheck,
    title: "Offensive Security & Audits",
    description:
      "Audit methodology informed by Kali Linux penetration testing tools to detect reentrancy, access control bypasses, and arithmetic anomalies.",
    tag: "Kali Linux / Audit",
  },
  {
    icon: Layers,
    title: "Reactive Web3 Interface",
    description:
      "High-performance client frontends built with React 19, Motion, and Tailwind CSS, guaranteeing sub-second state reflection and zero layout shift.",
    tag: "React 19 / Motion",
  },
  {
    icon: Terminal,
    title: "On-Chain Data Intelligence",
    description:
      "Python data pipelines and block event listeners streaming transaction metrics, wallet clustering, and liquidity pool migrations.",
    tag: "Python / Web3.py",
  },
];

export function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8%" });

  return (
    <section
      id="ecosystem"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            03.5
          </span>
          <span className="flex-1 h-px bg-[#1E1E1E]" />
          <span
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Toolchain Architecture
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA] leading-[1.05]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Connected design &amp;{" "}
            <span className="italic text-[#F5C518]">engineering synergy.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#888888] mt-4 leading-relaxed max-w-2xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            How design tokens, AI acceleration, reactive UI primitives, and decentralized on-chain contracts converge into an audited, deterministic production system.
          </motion.p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Interactive Integration Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center w-full"
          >
            <div className="w-full max-w-xl">
              <IntegrationCard
                visual={<Integration />}
                title="Unified Design-Engineering Pipeline"
                description="Synchronizing Figma design tokens with Claude AI, React 19, Motion, and Tailwind CSS for production Web3 systems."
                url="#contact"
              />
            </div>
          </motion.div>

          {/* Right: Architectural Principles */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {PIPELINE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-5 border transition-all duration-300 group"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,197,24,0.35)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(245,197,24,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 flex items-center justify-center border text-[#F5C518] bg-[rgba(245,197,24,0.06)] border-[rgba(245,197,24,0.2)]">
                        <Icon className="size-3.5" />
                      </div>
                      <h3
                        className="text-sm font-semibold text-[#FAFAFA]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    <span
                      className="text-[10px] font-mono tracking-wider text-[#F5C518] opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                  <p
                    className="text-xs text-[#888888] leading-relaxed pl-9"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
