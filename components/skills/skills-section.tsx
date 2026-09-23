"use client"

import { skillCategories } from '@/data/portfolio-data'
import { Integration, VisualContainer } from '@/components/ui/integration-card'
import { FadeIn, Reveal, StaggerContainer, StaggerItem } from '@/components/motion/motion-wrapper'

export function SkillsSection() {
  return (
    <section id="stack" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Stack</span>
                <div className="h-[1px] w-12 bg-border"></div>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-foreground">
                Technology ecosystem
              </h2>
            </Reveal>
            
            <Reveal>
              <p className="text-muted-foreground text-lg mb-12 max-w-xl">
                A full-stack toolkit spanning blockchain engineering, security, and modern frontend—built from 8+ years of hands-on experience.
              </p>
            </Reveal>

            <div className="space-y-10">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <Reveal>
                    <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                      {category.name}
                    </h3>
                  </Reveal>
                  
                  <StaggerContainer className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <StaggerItem key={sIdx}>
                        <span className="inline-block px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors cursor-default">
                          {skill.name}
                        </span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FadeIn className="h-full flex flex-col justify-center sticky top-24">
              <VisualContainer className="rounded-xl border border-border bg-surface-2 overflow-hidden shadow-2xl">
                <Integration />
              </VisualContainer>
              <p className="text-sm text-muted-foreground text-center mt-6">
                Design & Development Ecosystem
              </p>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  )
}
