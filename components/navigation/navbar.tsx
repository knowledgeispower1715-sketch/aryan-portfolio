"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, availability } from "@/data/portfolio-data";
import type { NavItem } from "@/data/portfolio-data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 h-16 md:h-18 flex items-center",
          isScrolled
            ? "bg-[#050507]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 w-full flex items-center justify-between h-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#00d9ff] rounded">
            <span className="text-xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
              AT
            </span>
            <span className="text-xs uppercase tracking-widest font-mono text-[#f0f0f0] hidden sm:block">
              Aryan Tiwari
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item: NavItem) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[#f0f0f0] relative py-2 focus:outline-none focus:ring-2 focus:ring-[#00d9ff] rounded block",
                    activeSection === item.href
                      ? "text-[#f0f0f0]"
                      : "text-[#6b7280]"
                  )}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00d9ff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            {/* Availability */}
            {availability.status === 'open' && (
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-[#6b7280] font-mono">
                  Open to opportunities
                </span>
              </div>
            )}

            {/* CTA */}
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-[#050507] bg-[#f0f0f0] rounded-lg hover:bg-[#00d9ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d9ff] flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#00d9ff] rounded"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-[#0c0e14] md:hidden flex flex-col p-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
                AT
              </span>
              <button
                className="p-2 text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#00d9ff] rounded"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <ul className="flex flex-col gap-6 flex-1">
              {navItems.map((item: NavItem) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-2xl font-medium text-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#00d9ff] rounded inline-block"
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        setTimeout(() => {
                          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-6">
              {availability.status === 'open' && (
                <div className="flex items-center gap-2 justify-center mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm text-[#6b7280] font-mono">
                    Open to opportunities
                  </span>
                </div>
              )}
              <a
                href="#contact"
                className="w-full py-4 text-center text-lg font-medium text-[#050507] bg-[#f0f0f0] rounded-xl hover:bg-[#00d9ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d9ff]"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
