"use client";

import { useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { personalInfo } from "@/data/portfolio-data";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Work", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useLenis(({ scroll }) => {
    setScrolled(scroll > 60);
  });

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/[0.06]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            <span
              className="w-9 h-9 flex items-center justify-center border text-xs font-bold tracking-widest transition-colors duration-300 group-hover:bg-[#F5C518] group-hover:text-black group-hover:border-[#F5C518]"
              style={{
                fontFamily: "var(--font-jetbrains)",
                borderColor: "rgba(245,197,24,0.4)",
                color: "#F5C518",
              }}
            >
              AT
            </span>
            <span
              className="hidden sm:block text-xs font-medium tracking-[0.15em] uppercase text-[#888888] group-hover:text-[#FAFAFA] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Aryan Tiwari
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-xs font-medium tracking-[0.12em] uppercase text-[#888888] hover:text-[#FAFAFA] transition-colors duration-200 relative group"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#F5C518] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Status + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-[11px] tracking-wide text-[#888888]" style={{ fontFamily: "var(--font-jetbrains)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase bg-[#F5C518] text-black hover:bg-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-px bg-[#FAFAFA] transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-6 h-px bg-[#FAFAFA] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-px bg-[#FAFAFA] transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-center items-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-5xl font-black text-[#FAFAFA] hover:text-[#F5C518] transition-colors"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-8 px-8 py-3 text-sm font-semibold tracking-widest uppercase bg-[#F5C518] text-black"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
