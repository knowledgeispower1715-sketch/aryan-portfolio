"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolio-data";

export function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A0A0A]"
    >
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bottom-left amber glow */}
        <div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #F5C518 0%, transparent 70%)" }}
        />
        {/* Top-right violet glow */}
        <div
          className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
        />
      </div>

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 flex-1 flex flex-col lg:flex-row items-center pt-28 pb-16 gap-12 lg:gap-0">

        {/* ─── LEFT: Typography Monument ─────────────────────── */}
        <div className="lg:w-[58%] flex flex-col justify-center">
          {/* Label strip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span
              className="w-8 h-px"
              style={{ backgroundColor: "#F5C518" }}
            />
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#888888]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Blockchain Engineer · Jabalpur, India · 2018→
            </span>
          </motion.div>

          {/* Giant name */}
          <div
            className="leading-[0.9] tracking-[-0.03em] select-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block text-[clamp(72px,13vw,180px)] font-black text-[#FAFAFA]"
              >
                ARYAN
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                className="block text-[clamp(72px,13vw,180px)] font-black text-[#F5C518] italic ml-[6%]"
              >
                TIWARI
              </motion.h1>
            </div>
          </div>

          {/* Subtitle + bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md"
          >
            <div
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
              style={{ fontFamily: "var(--font-jetbrains)", color: "#F5C518" }}
            >
              Blockchain · Security · Web3
            </div>
            <p
              className="text-base text-[#888888] leading-[1.75]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              8 years immersed in cryptographic protocols since age 12. Building
              gas-optimized EVM smart contracts, DeFi architectures, and
              conducting penetration testing across distributed networks.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={scrollToWork}
              className="group relative px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase overflow-hidden transition-all duration-300"
              style={{
                fontFamily: "var(--font-inter)",
                border: "1px solid #F5C518",
                color: "#F5C518",
              }}
              data-cursor="hover"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                View Work ↓
              </span>
              <span className="absolute inset-0 bg-[#F5C518] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="px-7 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase bg-[#FAFAFA] text-black hover:bg-[#F5C518] transition-colors duration-300"
              style={{ fontFamily: "var(--font-inter)" }}
              data-cursor="hover"
            >
              Get in Touch ↗
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-16 flex items-center gap-3 text-[#555555]"
          >
            <div className="relative w-5 h-8 border border-[#333333] rounded-full flex justify-center">
              <motion.span
                animate={{ y: [2, 10, 2] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="mt-1.5 w-0.5 h-2 rounded-full bg-[#F5C518]"
              />
            </div>
            <span
              className="text-[11px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Scroll
            </span>
          </motion.div>
        </div>

        {/* ─── RIGHT: Profile Photo Frame ─────────────────────── */}
        <div className="lg:w-[42%] flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer decorative frame */}
            <div
              className="relative"
              style={{
                border: "1px solid rgba(245,197,24,0.2)",
                padding: "12px",
              }}
            >
              {/* Corner accents */}
              <span className="absolute top-1 left-1 w-4 h-4 border-t border-l" style={{ borderColor: "#F5C518" }} />
              <span className="absolute top-1 right-1 w-4 h-4 border-t border-r" style={{ borderColor: "#F5C518" }} />
              <span className="absolute bottom-1 left-1 w-4 h-4 border-b border-l" style={{ borderColor: "#F5C518" }} />
              <span className="absolute bottom-1 right-1 w-4 h-4 border-b border-r" style={{ borderColor: "#F5C518" }} />

              {/* Photo */}
              <div className="w-[280px] sm:w-[340px] lg:w-[380px] aspect-[3/4] relative overflow-hidden bg-[#111111]">
                <Image
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} — Blockchain Developer`}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                />
                {/* Subtle color overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Info tags below photo */}
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <div
                  className="text-[11px] font-semibold tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-jetbrains)", color: "#F5C518" }}
                >
                  {personalInfo.name}
                </div>
                <div
                  className="text-[10px] tracking-wide text-[#555555] mt-0.5"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Age 20 · Jabalpur, India
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span
                  className="text-[10px] tracking-wide text-[#888888]"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Open to work
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-3 flex items-center gap-4 px-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-wide text-[#555555] hover:text-[#F5C518] transition-colors underline underline-offset-2"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                GitHub
              </a>
              <span className="text-[#333333]">/</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-wide text-[#555555] hover:text-[#F5C518] transition-colors underline underline-offset-2"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                LinkedIn
              </a>
              <span className="text-[#333333]">/</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[11px] tracking-wide text-[#555555] hover:text-[#F5C518] transition-colors underline underline-offset-2"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Thin gold bottom rule */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, #F5C518, transparent)" }} />
      </div>
    </section>
  );
}
