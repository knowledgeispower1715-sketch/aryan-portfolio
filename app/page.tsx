import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Navbar } from "@/components/navigation/navbar";
import { CyberScene } from "@/components/3d/cyber-scene";
import { Hero } from "@/components/hero/hero";
import { IdentityManifesto } from "@/components/identity/identity-manifesto";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { TerminalSection } from "@/components/terminal/terminal-section";
import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-[#ededef] selection:bg-[#00d9ff]/30 selection:text-[#00d9ff]">
      {/* Real-Time Interactive 3D WebGL Scene Core */}
      <CyberScene />

      {/* Top Scroll Indicator & Magnetic Cursor */}
      <ScrollProgress />
      <CustomCursor />

      {/* Floating Tactical Flight Deck */}
      <Navbar />

      {/* Main Narrative Chapters */}
      <main className="relative flex flex-col z-10">
        <Hero />
        <IdentityManifesto />
        <SkillsSection />
        <ProjectsSection />
        <TerminalSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Engineering Telemetry Footer */}
      <Footer />
    </div>
  );
}
