"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { skillCategories } from "@/data/portfolio-data";

const CATEGORY_STYLES: Record<string, { border: string; color: string; bg: string }> = {
  languages:  { border: "rgba(255,255,255,0.15)", color: "#FAFAFA", bg: "rgba(255,255,255,0.04)" },
  blockchain: { border: "rgba(245,197,24,0.4)",   color: "#F5C518", bg: "rgba(245,197,24,0.07)"  },
  security:   { border: "rgba(124,58,237,0.4)",   color: "#A78BFA", bg: "rgba(124,58,237,0.07)" },
  frontend:   { border: "rgba(255,255,255,0.12)", color: "#CCCCCC", bg: "rgba(255,255,255,0.03)" },
  crypto:     { border: "rgba(255,107,53,0.4)",   color: "#FF8C60", bg: "rgba(255,107,53,0.07)"  },
};

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8%" });

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#0D0D0D] border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]" style={{ fontFamily: "var(--font-jetbrains)" }}>03</span>
          <span className="flex-1 h-px bg-[#1E1E1E]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]" style={{ fontFamily: "var(--font-jetbrains)" }}>The Stack</span>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA] mb-16 sm:mb-20 max-w-2xl leading-[1.05]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Tools of the{" "}
          <span className="italic text-[#F5C518]">craft.</span>
        </motion.h2>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => {
            const style = CATEGORY_STYLES[category.slug] ?? CATEGORY_STYLES.frontend;

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] items-start gap-6 sm:gap-10"
              >
                {/* Category label */}
                <div className="pt-1">
                  <div
                    className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                    style={{ fontFamily: "var(--font-jetbrains)", color: style.color }}
                  >
                    {category.name}
                  </div>
                  <div
                    className="mt-2 h-px w-full opacity-40"
                    style={{ backgroundColor: style.color }}
                  />
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.button
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: catIdx * 0.1 + skillIdx * 0.04 + 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative px-4 py-2 text-xs font-medium transition-all duration-300"
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        border: `1px solid ${style.border}`,
                        color: style.color,
                        background: style.bg,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = style.bg.replace("0.07", "0.15").replace("0.04", "0.10").replace("0.03", "0.08");
                        (e.currentTarget as HTMLElement).style.borderColor = style.color;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = style.bg;
                        (e.currentTarget as HTMLElement).style.borderColor = style.border;
                      }}
                      data-cursor="hover"
                    >
                      {skill.name}
                      {skill.rating && (
                        <span className="ml-2 opacity-50 text-[10px]">{skill.rating}</span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
