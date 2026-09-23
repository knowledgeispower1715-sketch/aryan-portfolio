"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { personalInfo } from "@/data/portfolio-data";
import { TextReveal, FadeIn } from "@/components/motion/motion-wrapper";

export function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-20 pb-12 px-6 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-3xl max-h-3xl rounded-full bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto space-y-8">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#0c0e14]/80 backdrop-blur-md text-xs text-[#9ca3af] font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00d9ff] animate-pulse" />
            <span>Jabalpur, India</span>
            <span className="text-[#4b5563]">•</span>
            <span>8+ Years Crypto Experience</span>
          </div>
        </FadeIn>

        <TextReveal delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#f0f0f0] tracking-[-0.04em] leading-[1.1]">
            Aryan Tiwari
          </h1>
        </TextReveal>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#f0f0f0] tracking-tight">
            {personalInfo.title.split('Blockchain')[0]}
            <span className="relative whitespace-nowrap">
              Blockchain
              <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#00d9ff] rounded-full opacity-70" />
            </span>
            {personalInfo.title.split('Blockchain')[1] || " and Security"}
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            {personalInfo.shortBio}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full justify-center">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-[#050507] bg-[#f0f0f0] rounded-full hover:bg-[#00d9ff] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00d9ff] focus:ring-offset-2 focus:ring-offset-[#050507]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-[#f0f0f0] bg-transparent border border-[rgba(255,255,255,0.12)] rounded-full hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00d9ff] focus:ring-offset-2 focus:ring-offset-[#050507]"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-6 pt-8">
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-[#00d9ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d9ff] rounded"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
            )}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-[#00d9ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d9ff] rounded"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#6b7280] hover:text-[#00d9ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00d9ff] rounded"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </FadeIn>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#6b7280]"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
