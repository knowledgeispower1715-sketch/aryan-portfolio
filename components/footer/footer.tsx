"use client";

import { personalInfo } from "@/data/portfolio-data";

export function Footer() {
  return (
    <footer
      className="relative py-8 border-t"
      style={{
        backgroundColor: "#080808",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="w-7 h-7 flex items-center justify-center border text-[10px] font-bold tracking-wider"
            style={{
              fontFamily: "var(--font-jetbrains)",
              borderColor: "rgba(245,197,24,0.3)",
              color: "#F5C518",
            }}
          >
            AT
          </span>
          <span
            className="text-[11px] tracking-[0.14em] text-[#444444] uppercase"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Aryan Tiwari
          </span>
        </div>

        {/* Center */}
        <div
          className="text-[11px] tracking-wide text-[#333333] text-center"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          © 2026 · All data verified · Zero fabrications
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-[11px] text-[#333333]" style={{ fontFamily: "var(--font-jetbrains)" }}>
          <span>Jabalpur, India</span>
          <span className="text-[#1A1A1A]">·</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5C518] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
