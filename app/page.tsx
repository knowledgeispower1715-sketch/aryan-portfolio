import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/hero/hero";
import { IdentityManifesto } from "@/components/identity/identity-manifesto";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-[#ededef] selection:bg-[#00d9ff]/30 selection:text-[#00d9ff]">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative flex flex-col">
        <Hero />
        <IdentityManifesto />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
