"use client"

import { personalInfo, availability, socialLinks } from '@/data/portfolio-data'
import { FadeIn, Reveal } from '@/components/motion/motion-wrapper'
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    LinkedIn: LinkedInIcon,
    GitHub: GitHubIcon,
    Email: Mail
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        <Reveal>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Contact</span>
            <div className="h-[1px] w-12 bg-border"></div>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Let&apos;s build something <br className="hidden md:block" />
            <span className="text-primary">together</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto md:mx-0">
            Ready to collaborate on blockchain development, security auditing, or Web3 projects. Always open to interesting conversations.
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-2/3 space-y-6">
            <FadeIn delay={0.1}>
              <div className="p-6 md:p-8 bg-surface-2 border border-border rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Send an email</p>
                    <p className="font-mono text-lg font-medium text-foreground">{personalInfo.email}</p>
                  </div>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-border/50 hover:text-foreground text-muted-foreground transition-colors group"
                >
                  {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4 group-hover:text-primary transition-colors" />}
                  <span className="text-sm font-medium">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.filter(link => link.platform !== 'Email').map((link, idx) => {
                const Icon = icons[link.platform] || ArrowUpRight
                return (
                  <FadeIn key={idx} delay={0.2 + (0.1 * idx)}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-5 bg-card/50 border border-border rounded-xl hover:bg-card hover:border-primary/30 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="font-medium text-foreground">{link.platform}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  </FadeIn>
                )
              })}
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <FadeIn delay={0.3}>
              <div className="p-6 bg-surface-2 border border-border rounded-xl">
                <h3 className="text-sm font-medium text-foreground mb-4">Availability</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="relative flex h-3 w-3">
                      <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", availability.status === 'Available' ? 'bg-green-400' : 'bg-yellow-400')}></span>
                      <span className={cn("relative inline-flex rounded-full h-3 w-3", availability.status === 'Available' ? 'bg-green-500' : 'bg-yellow-500')}></span>
                    </span>
                    <span className="text-sm text-muted-foreground">{availability.status}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Interested in</p>
                    <div className="flex flex-wrap gap-2">
                      {availability.roles.map((role, idx) => (
                        <span key={idx} className="inline-block px-3 py-1 bg-background border border-border rounded-full text-xs text-muted-foreground">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
