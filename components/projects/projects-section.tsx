"use client"

import { projects } from '@/data/portfolio-data'
import { FadeIn, Reveal, StaggerContainer, StaggerItem } from '@/components/motion/motion-wrapper'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 2)
  const secondaryProjects = projects.slice(2, 4)

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Projects</span>
              <div className="h-[1px] w-12 bg-border"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
              Selected work
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-12 md:gap-16">
          {/* Featured Projects */}
          <div className="flex flex-col gap-8 md:gap-12">
            {featuredProjects.map((project, idx) => (
              <FadeIn key={idx}>
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="group relative bg-card/50 border border-border rounded-xl p-6 md:p-10 hover:border-primary/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-6 h-6 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  
                  <div className="absolute -top-10 -right-10 md:-top-20 md:-right-10 pointer-events-none">
                    <span className="font-mono text-[120px] md:text-[180px] leading-none text-foreground/5 select-none font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="relative z-10 max-w-2xl">
                    <span className="inline-block px-3 py-1 mb-6 rounded-full border border-primary/20 text-xs font-medium tracking-wider text-primary uppercase bg-primary/5">
                      {project.category}
                    </span>
                    
                    <h3 className="text-2xl md:text-4xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="font-mono text-sm text-primary mb-6">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <StaggerContainer className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <StaggerItem key={tIdx}>
                          <span className="inline-block px-3 py-1.5 rounded-full border border-border bg-background text-xs text-muted-foreground group-hover:border-primary/20 transition-colors">
                            {tech}
                          </span>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Secondary Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="group relative bg-card/30 border border-border rounded-xl p-6 md:p-8 hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block px-2 py-1 rounded border border-primary/20 text-[10px] font-medium tracking-wider text-primary uppercase bg-primary/5">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="font-mono text-xs text-primary mb-4">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-muted-foreground text-sm mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span key={tIdx} className="inline-block px-2 py-1 rounded-full border border-border bg-background text-[10px] text-muted-foreground group-hover:border-primary/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="inline-block px-2 py-1 rounded-full border border-border bg-background text-[10px] text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
