import { MagneticCursor } from "@/components/ui/magnetic-cursor";
import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/hero/hero";
import { MarqueeTicker } from "@/components/ui/marquee-ticker";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { EcosystemSection } from "@/components/ecosystem/ecosystem-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { JourneySection } from "@/components/journey/journey-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="relative bg-[#0A0A0A] text-[#FAFAFA] selection:bg-[rgba(245,197,24,0.25)] selection:text-[#FAFAFA]">
      {/* Magnetic cursor — desktop only */}
      <MagneticCursor />

      {/* Floating navigation */}
      <Navbar />

      {/* Main experience */}
      <main>
        {/* 01 — Split-screen editorial hero */}
        <Hero />

        {/* Marquee ticker strip */}
        <MarqueeTicker />

        {/* 02 — Giant stats + editorial bio */}
        <AboutSection />

        {/* 03 — Category skill grid */}
        <SkillsSection />

        {/* 03.5 — Toolchain Architecture (Interactive Integration Card) */}
        <EcosystemSection />

        {/* 04 — Horizontal scroll project gallery (GSAP pinned) */}
        <ProjectsSection />

        {/* 05 — Staircase timeline journey */}
        <JourneySection />

        {/* 06 — Large CTA contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
