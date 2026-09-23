"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Shield, Code, Sparkles, Network, Database } from "lucide-react";
import { skillCategories } from "@/data/portfolio-data";
import { Integration, VisualContainer } from "@/components/ui/integration-card";
import { Reveal, FadeIn } from "@/components/motion/motion-wrapper";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0]?.slug || "languages");

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    languages: Code,
    blockchain: Network,
    security: Shield,
    frontend: Cpu,
    crypto: Database,
  };

  const selectedCategoryData =
    skillCategories.find((cat) => cat.slug === activeCategory) || skillCategories[0];

  return (
    <section id="stack" className="relative py-32 px-6 bg-[#050507] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#00d9ff]" />
              <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest">
                Technology Ecosystem
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f0f0f0] leading-tight">
                  A multi-layered stack engineered for{" "}
                  <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
                    decentralized resilience.
                  </span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  Synthesizing low-level system programming, smart contract development, and modern reactive frontends into a cohesive production environment.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Spatial Ecosystem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Spatial Taxonomy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Category Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#0c0e14] border border-white/[0.08]">
              {skillCategories.map((cat) => {
                const Icon = categoryIcons[cat.slug] || Sparkles;
                const isSelected = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={cn(
                      "relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300",
                      isSelected
                        ? "text-[#050507] font-semibold"
                        : "text-[#9ca3af] hover:text-[#f0f0f0] hover:bg-white/[0.04]"
                    )}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 rounded-xl bg-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.4)]"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5" />
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Display Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl bg-[#0c0e14]/90 border border-white/[0.1] shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                  <div>
                    <span className="font-mono text-[11px] text-[#00d9ff] uppercase tracking-widest">
                      Active Domain
                    </span>
                    <h3 className="text-xl font-bold text-[#f0f0f0] mt-1">
                      {selectedCategoryData.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#9ca3af]">
                    {selectedCategoryData.skills.length} Competencies
                  </span>
                </div>

                {/* Connected Nodes / Pills */}
                <div className="flex flex-wrap gap-3">
                  {selectedCategoryData.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00d9ff]/50 hover:bg-white/[0.06] transition-all duration-300 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] group-hover:scale-125 transition-transform" />
                      <span className="font-mono text-xs sm:text-sm text-[#e2e8f0] group-hover:text-white font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Subtext description based on active category */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs font-mono text-[#6b7280]">
                  {activeCategory === "languages" &&
                    "// Primary languages utilized across blockchain smart contracts, system utilities, and full-stack web architectures."}
                  {activeCategory === "blockchain" &&
                    "// EVM protocol engineering, smart contract security, decentralized finance mechanics, and tooling integration."}
                  {activeCategory === "security" &&
                    "// Offensive security methodologies, penetration testing frameworks, vulnerability scanning, and cryptographic verification."}
                  {activeCategory === "frontend" &&
                    "// High-performance client engineering, declarative state management, modern CSS design systems, and animated interfaces."}
                  {activeCategory === "crypto" &&
                    "// On-chain transaction analytics, algorithmic execution models, network mining parameters, and tokenomic modeling."}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Signature Integration Card Centerpiece */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.2} className="relative">
              {/* Studio Frame with specular lighting */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <div className="rounded-[22px] bg-[#0c0e14] p-3 sm:p-5 border border-white/[0.06] overflow-hidden">
                  {/* Window Bar Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] px-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[10px] tracking-wider text-[#6b7280] uppercase">
                        ecosystem.core.flow
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#00d9ff] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] animate-ping" />
                      LIVE INTEGRATION
                    </span>
                  </div>

                  {/* Hardened Integration Card Canvas */}
                  <VisualContainer className="rounded-2xl border border-white/[0.06] bg-[#050507] overflow-hidden shadow-inner">
                    <Integration />
                  </VisualContainer>

                  <div className="mt-4 pt-3 flex items-center justify-between px-2 text-[11px] font-mono text-[#6b7280]">
                    <span>Figma · Claude · shadcn · React · Motion · Tailwind</span>
                    <span className="text-[#00d9ff]">Deterministic Synced</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
