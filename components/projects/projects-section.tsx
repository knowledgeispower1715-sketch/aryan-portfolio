"use client";

import React from "react";
import { ArrowUpRight, Shield, Layers, LineChart, Code2, Terminal } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { Reveal } from "@/components/motion/motion-wrapper";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function ProjectsSection() {
  const projectIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "smart-contracts": Layers,
    "security-suite": Shield,
    "onchain-analytics": LineChart,
    "web3-interfaces": Code2,
  };

  return (
    <section id="projects" className="relative py-32 px-6 bg-[#050507] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#00d9ff]" />
                <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest">
                  Featured Case Studies
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f0f0f0] leading-none">
                Engineering Selected Work
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm text-[#9ca3af] font-mono">
              {"// EVM protocols, cybersecurity audit pipelines, on-chain analytics, and decentralized interfaces."}
            </p>
          </Reveal>
        </div>

        {/* Editorial Project Storytelling Stack */}
        <div className="flex flex-col gap-24">
          {projects.map((project, idx) => {
            const indexStr = `0${idx + 1}`;
            const Icon = projectIcons[project.id] || Terminal;

            return (
              <article
                key={project.id}
                className="group relative rounded-3xl bg-[#0c0e14]/90 border border-white/[0.08] hover:border-white/[0.18] transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              >
                {/* Top specular border line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.25] to-transparent" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 p-8 sm:p-12 lg:p-16 items-center">
                  {/* Left Column: Metadata & Narrative */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Project Index Number & Category */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="font-mono text-5xl sm:text-7xl font-extrabold text-white/[0.07] tracking-tighter select-none">
                          {indexStr}
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-[#00d9ff]">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{project.category}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle / Stack highlight */}
                      <p className="font-mono text-xs sm:text-sm text-[#00d9ff] mt-2 mb-6">
                        {project.subtitle}
                      </p>

                      {/* Long Detailed Description */}
                      <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed mb-8">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#cbd5e1]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual Telemetry Display Panel */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="relative rounded-2xl bg-[#050507] border border-white/[0.08] p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[300px]">
                      {/* Grid background effect */}
                      <div
                        className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{
                          backgroundImage:
                            "linear-gradient(#00d9ff 1px, transparent 1px), linear-gradient(90deg, #00d9ff 1px, transparent 1px)",
                          backgroundSize: "32px 32px",
                        }}
                      />

                      {/* Top status */}
                      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs font-mono text-[#6b7280]">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#00d9ff]" />
                          <span>ARCHITECTURE_VERIFIED</span>
                        </span>
                        <span>{project.category.toUpperCase()}</span>
                      </div>

                      {/* Center Interactive Concept Visualization */}
                      <div className="relative z-10 my-8 flex flex-col items-center justify-center text-center">
                        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-[#00d9ff] mb-4 shadow-[0_0_30px_rgba(0,217,255,0.15)] group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-10 h-10" />
                        </div>
                        <span className="font-mono text-sm font-semibold text-[#f0f0f0]">
                          {project.title}
                        </span>
                        <span className="font-mono text-xs text-[#6b7280] mt-1">
                          Production Ready Architecture
                        </span>
                      </div>

                      {/* Bottom Action Trigger */}
                      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#9ca3af]">
                          Ecosystem: EVM / Systems
                        </span>

                        <LiquidButton
                          size="sm"
                          variant="cyan"
                          onClick={() => {
                            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </LiquidButton>
                      </div>
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
