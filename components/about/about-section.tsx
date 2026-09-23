"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* ─── Animated count-up number ───────────────────────────── */
function StatNumber({ value, label, sub }: { value: string; label: string; sub: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col"
    >
      <span
        className="text-[clamp(72px,10vw,140px)] font-black leading-none tracking-[-0.04em]"
        style={{ fontFamily: "var(--font-playfair)", color: "#FAFAFA" }}
      >
        {inView ? value : "0"}
      </span>
      <div className="mt-3 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div
          className="text-[11px] font-semibold tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-jetbrains)", color: "#F5C518" }}
        >
          {label}
        </div>
        <div
          className="text-xs text-[#555555] mt-0.5"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {sub}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Skill tag ──────────────────────────────────────────── */
function Tag({ text, variant = "default" }: { text: string; variant?: "gold" | "default" | "violet" }) {
  const styles = {
    gold: { border: "1px solid rgba(245,197,24,0.35)", color: "#F5C518", background: "rgba(245,197,24,0.06)" },
    violet: { border: "1px solid rgba(124,58,237,0.35)", color: "#A78BFA", background: "rgba(124,58,237,0.06)" },
    default: { border: "1px solid rgba(255,255,255,0.1)", color: "#888888", background: "transparent" },
  };

  return (
    <span
      className="inline-block px-3 py-1 text-[11px] font-medium tracking-wide"
      style={{ fontFamily: "var(--font-jetbrains)", ...styles[variant] }}
    >
      {text}
    </span>
  );
}

/* ─── About Section ──────────────────────────────────────── */
export function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const inView = useInView(textRef, { once: true, margin: "-8%" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-16 sm:mb-20">
          <span
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            02
          </span>
          <span className="flex-1 h-px bg-[#1E1E1E]" />
          <span
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            About
          </span>
        </div>

        {/* Stat trio */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="sm:pr-12">
            <StatNumber value="8+" label="Years in Crypto" sub="Immersed since 2018 at age 12" />
          </div>
          <div className="sm:px-12">
            <StatNumber value="7+" label="Languages" sub="Python · Solidity · C++ · Java · JS" />
          </div>
          <div className="sm:pl-12">
            <StatNumber value="20" label="Years Old" sub="Jabalpur, Madhya Pradesh, India" />
          </div>
        </div>

        {/* Bio + domains */}
        <div ref={textRef} className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAFAFA] leading-[1.15]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Eight years immersed in{" "}
              <span className="italic text-[#F5C518]">cryptographic systems</span>{" "}
              and distributed architecture.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[#888888] leading-[1.85]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Starting at age 12 in 2018, I began exploring Bitcoin fundamentals,
              mining optimization, and decentralized protocols — before EVM architectures
              became global standards. Today, I architect gas-optimized Solidity contracts,
              deploy DeFi protocols across EVM-compatible chains, and conduct penetration
              testing via Kali Linux.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[#888888] leading-[1.85]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              My engineering bridges low-level system design — C++, C, Java — with
              on-chain smart contract architecture and offensive security methodologies.
              I build with a security-first mindset: every contract I deploy, every
              system I architect assumes an adversarial environment.
            </motion.p>
          </div>

          {/* Expertise domains */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555555] mb-5"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Expertise Domains
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Blockchain & Crypto",
                  tags: ["Ethereum", "Polygon", "BNB Chain", "EVM", "DeFi", "Hardhat"],
                  variant: "gold" as const,
                },
                {
                  title: "Security Engineering",
                  tags: ["Kali Linux", "Pen Testing", "Smart Contract Audit", "Cryptography"],
                  variant: "violet" as const,
                },
                {
                  title: "Languages & Systems",
                  tags: ["Python", "Solidity", "C++", "Java", "JavaScript", "TypeScript"],
                  variant: "default" as const,
                },
              ].map((domain) => (
                <div key={domain.title}>
                  <div
                    className="text-xs text-[#FAFAFA] mb-2.5 font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {domain.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.tags.map((tag) => (
                      <Tag key={tag} text={tag} variant={domain.variant} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
