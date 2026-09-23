"use client";

import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 sm:px-10 lg:px-16 bg-[#050507] border-t border-white/[0.08] relative overflow-hidden text-xs font-mono text-[#6b7280]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Row: System Identity & Coordinates */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#12151e] to-[#252a38] border border-white/[0.16] flex items-center justify-center">
              <span className="text-white font-bold text-xs">AT</span>
            </div>
            <div>
              <span className="text-white font-bold block text-sm tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-[#00d9ff] text-[10px] tracking-widest uppercase">
                BLOCKCHAIN ARCHITECT & SECURITY ENGINEER
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span>ORIGIN: 23.1815° N, 79.9864° E</span>
            <span className="text-white/20">|</span>
            <span>JABALPUR, INDIA</span>
            <span className="text-white/20">|</span>
            <span className="text-emerald-400">SYS_VERIFIED</span>
          </div>
        </div>

        {/* Middle Row: Chapter Quick Jump & Social Channels */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-4 text-[#8b949e]">
            <a
              href="#hero"
              className="hover:text-[#00d9ff] transition-colors"
            >
              01 // ORIGIN
            </a>
            <a
              href="#manifesto"
              className="hover:text-[#00d9ff] transition-colors"
            >
              02 // MANIFESTO
            </a>
            <a
              href="#ecosystem"
              className="hover:text-[#00d9ff] transition-colors"
            >
              03 // CAPABILITY
            </a>
            <a
              href="#work"
              className="hover:text-[#00d9ff] transition-colors"
            >
              04 // SYSTEMS
            </a>
            <a
              href="#odyssey"
              className="hover:text-[#00d9ff] transition-colors"
            >
              05 // ODYSSEY
            </a>
            <a
              href="#transmission"
              className="hover:text-[#00d9ff] transition-colors"
            >
              06 // TRANSMIT
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] text-white hover:border-[#00d9ff]/50 hover:text-[#00d9ff] transition-all cursor-pointer"
          >
            <span>RETURN TO ORBIT</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-[10px] text-[#4b5563]">
          <p>© 2026 ARYAN TIWARI. TRUTHFUL DATA STRICTLY PRESERVED.</p>
          <p className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-[#00d9ff]" />
            ENGINEERED WITH NEXT.JS 16, THREE.JS, TAILWIND CSS & MOTION
          </p>
        </div>
      </div>
    </footer>
  );
}
