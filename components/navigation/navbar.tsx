"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, personalInfo, availability } from "@/data/portfolio-data";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-4 px-4 sm:px-6">
      <div
        className={cn(
          "max-w-5xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-full transition-all duration-500",
          isScrolled
            ? "bg-[#050507]/80 backdrop-blur-2xl border border-white/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Brand Monogram */}
        <a
          href="#"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d9ff] rounded-full"
          aria-label="Back to top"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.15] group-hover:border-[#00d9ff]/50 transition-colors">
            <span className="font-mono text-xs font-bold tracking-tight text-[#f0f0f0] group-hover:text-[#00d9ff] transition-colors">
              AT
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00d9ff] shadow-[0_0_8px_#00d9ff]" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#f0f0f0] uppercase">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-[#6b7280] font-mono">
              Web3 & Security
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-full uppercase",
                  isActive
                    ? "text-[#f0f0f0] font-semibold"
                    : "text-[#6b7280] hover:text-[#f0f0f0]"
                )}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-[#00d9ff]/30 shadow-[0_0_12px_rgba(0,217,255,0.15)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          {/* Availability Radar */}
          {availability.status === "open" && (
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available</span>
            </div>
          )}

          {/* Liquid Glass CTA */}
          <LiquidButton
            size="sm"
            variant="cyan"
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden sm:inline-flex"
          >
            <span>Initiate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </LiquidButton>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.12] text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-5xl mx-auto p-6 rounded-3xl bg-[#0c0e14]/95 backdrop-blur-2xl border border-white/[0.12] shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 rounded-xl font-mono text-sm uppercase tracking-wider text-[#f0f0f0] hover:bg-white/[0.06] transition-colors"
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Collaboration</span>
              </div>

              <LiquidButton
                size="sm"
                variant="cyan"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Contact</span>
              </LiquidButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
