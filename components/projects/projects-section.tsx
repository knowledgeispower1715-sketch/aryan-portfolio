"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/portfolio-data";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Project Card ───────────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const colors = ["#F5C518", "#FF6B35", "#7C3AED", "#FAFAFA"];
  const accent = colors[index % colors.length];

  return (
    <div
      className="relative shrink-0 flex flex-col justify-between h-full overflow-hidden"
      style={{
        width: "min(75vw, 680px)",
        marginRight: "clamp(16px, 3vw, 48px)",
        background: index % 2 === 0 ? "#111111" : "#0F0F0F",
        border: "1px solid rgba(255,255,255,0.07)",
        padding: "clamp(28px, 4vw, 56px)",
      }}
    >
      {/* Project number */}
      <div>
        <div
          className="text-[clamp(80px,10vw,140px)] font-black leading-none tracking-[-0.05em] select-none mb-8"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "rgba(255,255,255,0.06)",
          }}
        >
          0{index + 1}
        </div>

        {/* Category badge */}
        <div
          className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase mb-5"
          style={{
            fontFamily: "var(--font-jetbrains)",
            border: `1px solid ${accent}40`,
            color: accent,
            background: `${accent}0D`,
          }}
        >
          {project.category}
        </div>

        {/* Title */}
        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAFAFA] leading-[1.15] mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-[#888888] leading-[1.75] max-w-md"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {project.description}
        </p>
      </div>

      {/* Bottom: Tech stack + link */}
      <div className="mt-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] font-medium tracking-wide"
              style={{
                fontFamily: "var(--font-jetbrains)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "#666666",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Horizontal rule */}
        <div className="h-px w-full mb-5" style={{ background: "rgba(255,255,255,0.07)" }} />

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span
            className="text-[11px] font-semibold tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-jetbrains)", color: "#555555" }}
          >
            {project.subtitle.split("·")[0].trim()}
          </span>
          <div
            className="w-10 h-10 flex items-center justify-center border transition-colors duration-200 hover:bg-[#F5C518] hover:border-[#F5C518] group cursor-pointer"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>

      {/* Accent line top */}
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
      />
    </div>
  );
}

/* ─── Projects Section ───────────────────────────────────── */
export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Sync GSAP ScrollTrigger with Lenis
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Wait for fonts/layout to settle
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const totalScroll = track.scrollWidth - window.innerWidth;

        if (totalScroll <= 0) return; // Mobile: no pinning

        gsap.to(track, {
          x: () => -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll + window.innerWidth * 0.3}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }, section);

      return () => ctx.revert();
    }, 300);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#0A0A0A] border-t overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Section header — sits above the scrollable track */}
      <div ref={headerRef} className="relative z-10 px-6 lg:px-10 pt-16 pb-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]" style={{ fontFamily: "var(--font-jetbrains)" }}>04</span>
          <span className="flex-1 h-px bg-[#1E1E1E]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#555555]" style={{ fontFamily: "var(--font-jetbrains)" }}>Selected Work</span>
        </div>

        <div className="flex items-end justify-between gap-8">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA] leading-[1.05] max-w-xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What I&apos;ve{" "}
            <span className="italic text-[#F5C518]">built.</span>
          </h2>
          <div
            className="hidden sm:flex items-center gap-2 text-[11px] tracking-wide text-[#555555] shrink-0"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            <span className="hidden lg:block">Scroll horizontally →</span>
            <span className="block lg:hidden">Swipe →</span>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling track */}
      <div className="relative overflow-hidden" style={{ height: "min(70vh, 580px)" }}>
        <div
          ref={trackRef}
          className="absolute top-0 left-0 h-full flex items-stretch will-change-transform"
          style={{ paddingLeft: "clamp(24px, 5vw, 80px)", paddingRight: "24px" }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom padding for pin spacer breathing room */}
      <div className="h-8" />
    </section>
  );
}
