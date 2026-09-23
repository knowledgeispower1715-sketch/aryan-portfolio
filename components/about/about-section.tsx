"use client";

import React, { useState } from "react";
import { Terminal, MapPin } from "lucide-react";
import { personalInfo, timeline } from "@/data/portfolio-data";
import { Reveal } from "@/components/motion/motion-wrapper";

export function AboutSection() {
  const [selectedYear, setSelectedYear] = useState<string>("2018");

  const metrics = [
    { label: "YEARS IN CRYPTO", value: "8+", sub: "Began at Age 12 in 2018" },
    { label: "COMPILERS & LANGS", value: "7+", sub: "Solidity · C++ · Python · Java" },
    { label: "OPERATOR AGE", value: "20", sub: "Born in Jabalpur, India" },
    { label: "DATA INTEGRITY", value: "100%", sub: "Zero Fabrications" },
  ];

  return (
    <section
      id="odyssey"
      className="relative py-32 px-6 sm:px-10 lg:px-16 bg-[#07080c] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00d9ff]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 pb-8 border-b border-white/[0.08]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00d9ff] uppercase tracking-wider mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>CHRONICLE OF AN ODYSSEY // 05</span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
                The Evolutionary Dossier
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-2 text-sm font-mono text-[#9ca3af]">
              <MapPin className="w-4 h-4 text-[#00d9ff]" />
              <span>{personalInfo.location}</span>
            </div>
          </Reveal>
        </div>

        {/* Two-Column Grid: Editorial Narrative & Metrics + Interactive Chronology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Wing (5 Cols): Editorial Narrative & High-Density Stats */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-snug mb-6">
                Eight Years Immersed in Distributed Code.
              </h3>
              <div className="space-y-4 text-base text-[#9ca3af] leading-relaxed font-normal">
                <p>
                  A 20-year-old blockchain developer and security engineer with over 8 years of hands-on experience in the cryptocurrency ecosystem. Starting at age 12, I explored Bitcoin fundamentals, mining optimization, and decentralized protocols before EVM architectures became global standards.
                </p>
                <p>
                  My engineering bridges low-level system design (C++, C, Java) with Ethereum smart contracts and offensive penetration testing via Kali Linux. I build resilient, verifiable Web3 infrastructure with zero tolerance for security loopholes.
                </p>
              </div>
            </div>

            {/* Metrics Matrix */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-5 rounded-2xl bg-[#0c0e14] border border-white/[0.1] shadow-inner"
                >
                  <span className="font-mono text-3xl sm:text-4xl font-black text-white block mb-1">
                    {m.value}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#00d9ff] uppercase tracking-wider block mb-1">
                    {m.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#6b7280]">
                    {m.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Wing (7 Cols): The Chronological Timeline Track */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="p-2 border-b border-white/[0.08] mb-4 flex items-center justify-between text-xs font-mono text-[#6b7280]">
              <span>TIMELINE LOG // 2018 — PRESENT</span>
              <span className="text-[#00d9ff]">UNBROKEN PROGRESSION</span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.12] flex flex-col gap-8">
              {timeline.map((item) => {
                const isSelected = selectedYear === item.year;

                return (
                  <div
                    key={item.year}
                    onClick={() => setSelectedYear(item.year)}
                    className="relative group cursor-pointer"
                  >
                    {/* Glowing Timeline Marker */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        isSelected
                          ? "bg-[#00d9ff] border-white shadow-[0_0_12px_#00d9ff] scale-125"
                          : "bg-[#050507] border-[#00d9ff] group-hover:scale-125 group-hover:border-white"
                      }`}
                    />

                    <div
                      className={`p-6 rounded-2xl border transition-all ${
                        isSelected
                          ? "bg-[#0f121b] border-[#00d9ff]/50 shadow-[0_8px_30px_rgba(0,217,255,0.12)]"
                          : "bg-[#0c0e14]/70 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0e1119]"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                        <span className="font-mono text-lg font-black text-[#00d9ff]">
                          {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-white group-hover:text-[#00d9ff] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-[#9ca3af] leading-relaxed font-mono">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
