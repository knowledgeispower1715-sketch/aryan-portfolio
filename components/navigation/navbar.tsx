"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const NAV_CHAPTERS = [
  { id: "hero", label: "01 // ORIGIN", target: "hero" },
  { id: "manifesto", label: "02 // MANIFESTO", target: "manifesto" },
  { id: "ecosystem", label: "03 // CAPABILITY", target: "ecosystem" },
  { id: "work", label: "04 // SYSTEMS", target: "work" },
  { id: "odyssey", label: "05 // ODYSSEY", target: "odyssey" },
  { id: "transmission", label: "06 // TRANSMIT", target: "transmission" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_CHAPTERS.map((item) => document.getElementById(item.target));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_CHAPTERS[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 transition-all duration-500 pointer-events-none ${
          scrolled ? "pt-3 sm:pt-4" : "pt-5 sm:pt-6"
        }`}
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-500 max-w-6xl w-full ${
            scrolled
              ? "bg-[#090b10]/85 backdrop-blur-2xl border-white/[0.14] shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
              : "bg-white/[0.03] backdrop-blur-md border-white/[0.08]"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Monogram & System Status */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 group text-left cursor-pointer focus-visible:outline-none"
            data-cursor="pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#12151e] to-[#252a38] border border-white/[0.16] flex items-center justify-center shadow-inner group-hover:border-[#00d9ff]/50 transition-colors">
              <span className="font-mono text-xs font-bold text-[#f0f0f0] group-hover:text-[#00d9ff] transition-colors">
                AT
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold tracking-tight text-[#f0f0f0] group-hover:text-white transition-colors">
                Aryan Tiwari
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#00d9ff] flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00d9ff] animate-pulse" />
                SEC_LEVEL: 0
              </span>
            </div>
          </button>

          {/* Desktop Navigation Chapters */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.02] border border-white/[0.06] rounded-full p-1">
            {NAV_CHAPTERS.map((item) => {
              const isActive = activeSection === item.target;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.target)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#8b949e] hover:text-[#f0f0f0] hover:bg-white/[0.04]"
                  }`}
                  data-cursor="pointer"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-white/[0.1] to-white/[0.05] border border-white/[0.18] shadow-[0_0_15px_rgba(0,217,255,0.15)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-[#00d9ff]" />
                    )}
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Trigger / Contact Quick-jump */}
          <div className="flex items-center gap-2">
            <LiquidButton
              variant="default"
              size="sm"
              onClick={() => scrollTo("transmission")}
              className="text-xs font-mono tracking-wider"
              data-cursor="transmit"
            >
              <Terminal className="w-3 h-3 text-[#00d9ff]" />
              <span className="hidden sm:inline">TRANSMIT</span>
              <ArrowUpRight className="w-3 h-3 text-white/50" />
            </LiquidButton>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full border border-white/[0.12] bg-white/[0.04] text-[#f0f0f0] hover:text-white hover:border-[#00d9ff]/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen HUD Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050507]/95 flex flex-col justify-center px-8 lg:hidden"
          >
            <div className="max-w-md mx-auto w-full flex flex-col gap-6">
              <div className="text-[11px] font-mono tracking-widest text-[#00d9ff] uppercase pb-2 border-b border-white/[0.08]">
                {"// NAVIGATION FLIGHT DECK"}
              </div>

              <div className="flex flex-col gap-3">
                {NAV_CHAPTERS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.target)}
                    className="flex items-center justify-between text-left py-2.5 px-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-[#f0f0f0] hover:text-white hover:border-[#00d9ff]/50 hover:bg-white/[0.05] transition-all font-mono text-sm tracking-wider"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#00d9ff] text-xs">0{idx + 1}</span>
                      <span>{item.label.split("// ")[1]}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#6b7280]">
                <span>ARYAN TIWARI // PORTFOLIO</span>
                <span className="text-[#00d9ff]">SEC_VERIFIED</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
