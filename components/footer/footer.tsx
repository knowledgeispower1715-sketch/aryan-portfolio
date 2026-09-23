import { personalInfo, navItems, socialLinks } from '@/data/portfolio-data'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear() || 2026

  return (
    <footer className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.platform}
              </a>
            ))}
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">
            Built with Next.js, Tailwind CSS & Motion
          </p>
          
          <a 
            href="#" 
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
