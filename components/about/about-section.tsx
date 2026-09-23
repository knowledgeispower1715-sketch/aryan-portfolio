"use client";

import * as React from "react";
import { personalInfo, timeline } from "@/data/portfolio-data";
import type { TimelineItem } from "@/data/portfolio-data";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion/motion-wrapper";

export function AboutSection() {
  const bioParagraphs = personalInfo?.bio ? personalInfo.bio.split("\n\n").filter(Boolean) : [];

  const stats = [
    { value: "8+", label: "Years in Crypto" },
    { value: "7+", label: "Languages" },
    { value: "20", label: "Age" },
    { value: "∞", label: "Curiosity" },
  ];

  return (
    <div className="w-full flex flex-col py-24 md:py-32 bg-[#050507]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Part 1: About narrative */}
        <section id="about" className="mb-32 scroll-mt-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[rgba(255,255,255,0.12)]" />
              <span className="font-mono text-xs tracking-widest text-[#6b7280] uppercase">
                About
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="flex flex-col gap-8">
              <Reveal>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0f0f0] tracking-tight leading-tight">
                  Building at the intersection of blockchain and security
                </h3>
              </Reveal>
              
              <div className="flex flex-col gap-6">
                <StaggerContainer>
                  {bioParagraphs.map((paragraph, index) => (
                    <StaggerItem key={index}>
                      <p className="text-lg text-[#6b7280] leading-relaxed">
                        {paragraph}
                      </p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <StaggerContainer className="grid grid-cols-2 gap-4 w-full md:w-auto">
                {stats.map((stat, i) => (
                  <StaggerItem key={i}>
                    <div className="flex flex-col p-8 bg-[#12151e] border border-[rgba(255,255,255,0.06)] rounded-xl items-center justify-center text-center aspect-square transition-colors hover:border-[rgba(255,255,255,0.12)]">
                      <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </span>
                      <span className="text-sm font-medium text-[#6b7280]">
                        {stat.label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Part 2: Journey Timeline */}
        <section id="journey" className="scroll-mt-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[rgba(255,255,255,0.12)]" />
              <span className="font-mono text-xs tracking-widest text-[#6b7280] uppercase">
                Journey
              </span>
            </div>
          </Reveal>

          <Reveal>
            <h3 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] tracking-tight mb-16">
              From curiosity to engineering
            </h3>
          </Reveal>

          <div className="relative border-l border-[rgba(255,255,255,0.06)] ml-4 md:ml-0">
            <StaggerContainer>
              {timeline?.map((item: TimelineItem, i: number) => (
                <StaggerItem key={i}>
                  <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-[120px_1fr] md:gap-8 pb-16 last:pb-0 group">
                    {/* Marker */}
                    <div className="absolute left-[-4px] md:left-[118px] top-1.5 w-[7px] h-[7px] rounded-full bg-[#00d9ff] ring-4 ring-[#050507] group-hover:scale-150 transition-transform duration-300" />
                    
                    {/* Year */}
                    <div className="mb-2 md:mb-0 md:text-right md:pr-8">
                      <span className="font-mono text-sm font-medium text-[#00d9ff]">
                        {item.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-semibold text-[#f0f0f0]">
                        {item.title}
                      </h4>
                      <p className="text-base text-[#6b7280] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

      </div>
    </div>
  );
}
