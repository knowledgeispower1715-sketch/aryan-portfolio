"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { personalInfo } from "@/data/portfolio-data";
import { Mail, Copy, ExternalLink } from "lucide-react";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href={`mailto:${personalInfo.email}`}
        className="group text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#FAFAFA] hover:text-[#F5C518] transition-colors duration-300"
        style={{ fontFamily: "var(--font-jetbrains)" }}
        data-cursor="hover"
      >
        {personalInfo.email}
      </a>
      <button
        onClick={copy}
        className="flex items-center gap-2 px-4 py-2 border text-xs font-medium tracking-wide transition-colors duration-200 hover:border-[#F5C518] hover:text-[#F5C518]"
        style={{
          fontFamily: "var(--font-inter)",
          borderColor: "rgba(255,255,255,0.12)",
          color: "#555555",
        }}
        data-cursor="hover"
      >
        <Copy className="w-3.5 h-3.5" />
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-6%" });

  const words = ["LET'S", "BUILD", "SOMETHING", "REMARKABLE."];
  const wordColors = ["#FAFAFA", "#F5C518", "#FAFAFA", "#FAFAFA"];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-32 bg-[#0A0A0A] border-t overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(245,197,24,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full text-center">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="flex-1 h-px bg-[#1E1E1E]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]" style={{ fontFamily: "var(--font-jetbrains)" }}>
            06 — Contact
          </span>
          <span className="flex-1 h-px bg-[#1E1E1E]" />
        </div>

        {/* Giant headline — word by word reveal */}
        <div
          className="flex flex-col items-center gap-1 sm:gap-2 mb-16"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {words.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.div
                initial={{ y: "105%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[clamp(48px,9vw,120px)] font-black leading-none tracking-[-0.03em]"
                style={{ color: wordColors[i] }}
              >
                {word}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm text-[#555555] mb-10 max-w-sm mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Open for Blockchain development, Web3 architecture, smart contract auditing,
          and security engineering collaborations.
        </motion.p>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <CopyEmail />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-px h-12 bg-[#333333] mx-auto mb-10 origin-top"
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: ExternalLink, label: "GitHub", href: personalInfo.github },
            { icon: ExternalLink, label: "LinkedIn", href: personalInfo.linkedin },
            { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2.5 transition-transform hover:-translate-y-1 duration-300"
              data-cursor="hover"
            >
              <div
                className="w-12 h-12 flex items-center justify-center border transition-colors duration-300 group-hover:border-[#F5C518] group-hover:text-[#F5C518]"
                style={{ borderColor: "rgba(255,255,255,0.1)", color: "#555555" }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className="text-[10px] tracking-[0.18em] uppercase text-[#444444] group-hover:text-[#888888] transition-colors"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
