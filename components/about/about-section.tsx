"use client";

import React from "react";
import { personalInfo, timeline } from "@/data/portfolio-data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/motion-wrapper";
import { GraduationCap, MapPin } from "lucide-react";

export function AboutSection() {
  const bioParagraphs = personalInfo.bio.split("\n\n").filter(Boolean);

  const educationCards = [
    {
      title: "Blockchain & DeFi Architecture",
      subtitle: "Autonomous Study & Implementation",
      description: "Smart contract patterns, EVM execution environment, liquidity mechanics, and formal verification.",
    },
    {
      title: "Offensive Security & Ethical Hacking",
      subtitle: "Hands-on Kali Linux Labs",
      description: "Penetration testing methodology, network security protocols, vulnerability scanning, and auditing.",
    },
    {
      title: "Core Computer Science & Systems",
      subtitle: "Multi-Language Programming",
      description: "Memory models, object-oriented architecture, data structures, and algorithms across C++, Java, and Python.",
    },
    {
      title: "Full-Stack Web Engineering",
      subtitle: "Modern Reactive Frameworks",
      description: "Declarative UI engineering, Next.js architecture, TypeScript type safety, and real-time state management.",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 bg-[#050507] border-t border-white/[0.06] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#00d9ff]" />
              <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest">
                Profile & Journey
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f0f0f0] leading-tight">
                  Eight years of self-driven curiosity at the frontier of{" "}
                  <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
                    cryptographic systems.
                  </span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="flex items-center gap-2 text-xs font-mono text-[#9ca3af]">
                  <MapPin className="w-4 h-4 text-[#00d9ff]" />
                  <span>Jabalpur, Madhya Pradesh, India · Age 20</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <StaggerContainer>
              {bioParagraphs.map((para, i) => (
                <StaggerItem key={i}>
                  <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed font-normal">
                    {para}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-8 rounded-3xl bg-[#0c0e14] border border-white/[0.08] shadow-2xl">
              <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest block mb-4">
                Telemetry Summary
              </span>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#f0f0f0] font-mono">
                    8+
                  </div>
                  <div className="text-xs text-[#6b7280] font-mono mt-1">
                    Years in Crypto
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#f0f0f0] font-mono">
                    12
                  </div>
                  <div className="text-xs text-[#6b7280] font-mono mt-1">
                    Age Began Mining & Web3
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#f0f0f0] font-mono">
                    7+
                  </div>
                  <div className="text-xs text-[#6b7280] font-mono mt-1">
                    Languages Mastered
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#00d9ff] font-mono">
                    20
                  </div>
                  <div className="text-xs text-[#6b7280] font-mono mt-1">
                    Current Age
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chronology Section */}
        <div id="journey" className="pt-12 border-t border-white/[0.06]">
          <div className="mb-16">
            <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest block mb-2">
              Timeline of Development
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0]">
              The Evolutionary Milestones
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-10 border-l border-white/[0.12] flex flex-col gap-14">
            {timeline.map((item) => (
              <div key={item.year} className="relative group">
                {/* Year indicator dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#050507] border-2 border-[#00d9ff] shadow-[0_0_10px_#00d9ff] group-hover:scale-125 transition-transform" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#00d9ff]">
                    {item.year}
                  </span>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#f0f0f0] group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Knowledge Foundation */}
        <div className="mt-28 pt-16 border-t border-white/[0.06]">
          <div className="mb-12">
            <span className="font-mono text-xs text-[#00d9ff] uppercase tracking-widest block mb-2">
              Knowledge Foundation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0]">
              Self-Directed Mastery & Technical Disciplines
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationCards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0c0e14]/70 border border-white/[0.06] hover:border-white/[0.16] transition-colors"
              >
                <GraduationCap className="w-5 h-5 text-[#00d9ff] mb-4" />
                <h4 className="text-base font-semibold text-[#f0f0f0] mb-1">
                  {card.title}
                </h4>
                <div className="text-xs text-[#00d9ff] font-mono mb-3">
                  {card.subtitle}
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
