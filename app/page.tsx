import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/hero/hero";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
