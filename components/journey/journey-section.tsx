"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { timeline } from "@/data/portfolio-data";

export function JourneySection() {
  const [activeYear, setActiveYear] = useState<string>("Now");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8%" });

  const activeItem = timeline.find((t) => t.year === activeYear) ?? timeline[timeline.length - 1];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#0D0D0D] border-t overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,197,24,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]" style={{ fontFamily: "var(--font-jetbrains)" }}>05</span>
          <span className="flex-1 h-px bg-[#1E1E1E]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]" style={{ fontFamily: "var(--font-jetbrains)" }}>Journey</span>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA] mb-16 sm:mb-20 max-w-xl leading-[1.05]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          A decade in the{" "}
          <span className="italic text-[#F5C518]">making.</span>
        </motion.h2>

        {/* Timeline rows */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Year rows */}
          <div className="lg:w-[55%] flex flex-col">
            {timeline.map((item, i) => {
              const isActive = item.year === activeYear;

              return (
                <motion.button
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveYear(item.year)}
                  className="group relative text-left w-full"
                  data-cursor="hover"
                >
                  <div
                    className={`flex items-center gap-8 py-5 transition-all duration-300 border-b`}
                    style={{
                      borderColor: isActive ? "rgba(245,197,24,0.3)" : "rgba(255,255,255,0.06)",
                      paddingLeft: isActive ? "16px" : "0px",
                    }}
                  >
                    {/* Year */}
                    <span
                      className="text-[clamp(36px,5vw,64px)] font-black leading-none tracking-[-0.03em] transition-colors duration-300 shrink-0"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        color: isActive ? "#F5C518" : "#222222",
                      }}
                    >
                      {item.year}
                    </span>

                    {/* Title */}
                    <div className="min-w-0">
                      <div
                        className="text-sm font-semibold transition-colors duration-300 truncate"
                        style={{
                          fontFamily: "var(--font-inter)",
                          color: isActive ? "#FAFAFA" : "#555555",
                        }}
                      >
                        {item.title}
                      </div>
                      {/* Mobile: show description inline */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-1 block lg:hidden"
                        >
                          <p
                            className="text-xs text-[#888888] leading-relaxed"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="active-indicator"
                        className="ml-auto w-1 h-full min-h-[56px] shrink-0"
                        style={{ background: "#F5C518" }}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Active description (desktop) */}
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:w-[45%] flex-col justify-center"
          >
            <div
              className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: "var(--font-jetbrains)", color: "#F5C518" }}
            >
              {activeItem.year}
            </div>
            <h3
              className="text-2xl font-bold text-[#FAFAFA] mb-5 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {activeItem.title}
            </h3>
            <p
              className="text-base text-[#888888] leading-[1.85]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {activeItem.description}
            </p>

            {/* Gold accent line */}
            <div
              className="mt-8 h-px w-24"
              style={{ background: "linear-gradient(to right, #F5C518, transparent)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
