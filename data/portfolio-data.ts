// Types
export interface PersonalInfo { name: string, title: string, age: number, location: string, email: string, linkedin: string, github: string, bio: string, shortBio: string }
export interface Skill { name: string, category?: string, icon?: string }
export interface SkillCategory { name: string, slug: string, skills: Skill[] }
export interface Project { id: string, title: string, subtitle: string, description: string, longDescription: string, technologies: string[], category: string, link?: string, github?: string, featured: boolean }
export interface TimelineItem { year: string, title: string, description: string }
export interface NavItem { label: string, href: string }
export interface SocialLink { platform: string, url: string, icon: string }

// Data
export const personalInfo: PersonalInfo = {
  name: 'Aryan Tiwari',
  title: 'Blockchain Developer & Security Engineer',
  age: 20,
  location: 'Jabalpur, Madhya Pradesh, India',
  email: 'tiwariji0028@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aryan-t-199014224',
  github: 'https://github.com/knowledgeispower1715-sketch',
  bio: `A 20-year-old blockchain developer and security engineer with over 8 years of experience in the cryptocurrency ecosystem. Starting at age 12, I developed deep expertise in blockchain architecture, smart contract development, and cybersecurity—combining hands-on penetration testing with security-first protocol design.

I specialize in building secure, scalable Web3 solutions across EVM-compatible chains, with a strong foundation in full-stack development and algorithmic trading systems. My work bridges the gap between traditional security engineering and decentralized application architecture.`,
  shortBio: 'Blockchain developer and security engineer building secure Web3 solutions since age 12.',
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    slug: 'languages',
    skills: [
      { name: 'Python' },
      { name: 'Solidity' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C++' },
      { name: 'Java' },
      { name: 'C' },
    ]
  },
  {
    name: 'Blockchain & Web3',
    slug: 'blockchain',
    skills: [
      { name: 'Smart Contracts' },
      { name: 'Ethereum' },
      { name: 'Polygon' },
      { name: 'BNB Chain' },
      { name: 'DeFi Protocols' },
      { name: 'Ethers.js' },
      { name: 'Web3.js' },
      { name: 'Hardhat' },
      { name: 'Truffle' },
    ]
  },
  {
    name: 'Security & Auditing',
    slug: 'security',
    skills: [
      { name: 'Kali Linux' },
      { name: 'Penetration Testing' },
      { name: 'Smart Contract Auditing' },
      { name: 'Network Security' },
      { name: 'Cryptography' },
      { name: 'Vulnerability Assessment' },
    ]
  },
  {
    name: 'Frontend & Tools',
    slug: 'frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Motion' },
      { name: 'shadcn/ui' },
      { name: 'Figma' },
    ]
  },
  {
    name: 'Crypto Intelligence',
    slug: 'crypto',
    skills: [
      { name: 'On-Chain Analysis' },
      { name: 'Trading & Analysis' },
      { name: 'Mining Optimization' },
      { name: 'Tokenomics' },
      { name: 'Portfolio Management' },
      { name: 'Market Analysis' },
    ]
  }
]

export const projects: Project[] = [
  {
    id: 'smart-contracts',
    title: 'EVM Smart Contract Architecture',
    subtitle: 'Solidity • Ethereum • Polygon • Hardhat',
    description: 'Designed and deployed smart contracts for DeFi protocols across EVM-compatible chains, with emphasis on gas optimization, security patterns, and modular architecture.',
    longDescription: 'Comprehensive smart contract development across Ethereum, Polygon, and BNB Chain ecosystems. Focused on implementing lending protocols, liquidity pool mechanics, and AMM architecture with rigorous security-first design patterns including reentrancy guards, access controls, and formal verification workflows.',
    technologies: ['Solidity', 'Ethereum', 'Polygon', 'BNB Chain', 'Hardhat', 'Ethers.js'],
    category: 'Web3',
    featured: true,
  },
  {
    id: 'security-suite',
    title: 'Penetration Testing & Security Auditing',
    subtitle: 'Kali Linux • Python • Network Security',
    description: 'Comprehensive security auditing toolkit and methodology for smart contract vulnerability assessment and network penetration testing.',
    longDescription: 'Built systematic security auditing workflows combining Kali Linux penetration testing with smart contract-specific vulnerability assessment. Covers static analysis, reentrancy detection, access control validation, gas optimization auditing, and network protocol security analysis.',
    technologies: ['Kali Linux', 'Python', 'Cryptography', 'Network Security'],
    category: 'Security',
    featured: true,
  },
  {
    id: 'onchain-analytics',
    title: 'On-Chain Market Analytics',
    subtitle: 'Python • Blockchain APIs • Data Analysis',
    description: 'Algorithmic trading analysis and mining optimization systems leveraging on-chain data, technical indicators, and market pattern recognition.',
    longDescription: 'Developed on-chain analytics pipelines for cryptocurrency market analysis, incorporating technical indicator computation, pattern recognition algorithms, and mining pool efficiency optimization. Built data-driven portfolio management tools with risk assessment frameworks.',
    technologies: ['Python', 'Blockchain APIs', 'Data Analysis', 'Trading Algorithms'],
    category: 'Analytics',
    featured: true,
  },
  {
    id: 'web3-interfaces',
    title: 'Decentralized Web3 Interfaces',
    subtitle: 'Next.js • TypeScript • Ethers.js • Tailwind',
    description: 'Modern frontend interfaces for decentralized applications with wallet integration, transaction management, and responsive design.',
    longDescription: 'Full-stack Web3 application development using Next.js, TypeScript, and Ethers.js. Focused on creating intuitive user experiences for interacting with smart contracts, managing wallet connections, and visualizing on-chain data with responsive, accessible interfaces.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Ethers.js', 'Tailwind CSS'],
    category: 'Frontend',
    featured: false,
  }
]

export const timeline: TimelineItem[] = [
  { year: '2018', title: 'Entered Crypto at Age 12', description: 'Began exploring Bitcoin, blockchain fundamentals, and cryptocurrency markets.' },
  { year: '2020', title: 'Programming & Development', description: 'Learned Python, Java, C++, and C. Started building tools for crypto analysis.' },
  { year: '2022', title: 'Web3 & Smart Contracts', description: 'Moved into Solidity development, DeFi protocol design, and EVM-compatible chain deployment.' },
  { year: '2023', title: 'Security Engineering', description: 'Trained in Kali Linux, penetration testing, and smart contract auditing.' },
  { year: '2024', title: 'Full-Stack Web3', description: 'Integrated modern frontend (React, Next.js, Tailwind) with blockchain backends.' },
  { year: 'Now', title: 'Building & Shipping', description: 'Focused on secure, scalable Web3 solutions and expanding into AI-assisted development.' },
]

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/aryan-t-199014224', icon: 'linkedin' },
  { platform: 'GitHub', url: 'https://github.com/knowledgeispower1715-sketch', icon: 'github' },
  { platform: 'Email', url: 'mailto:tiwariji0028@gmail.com', icon: 'mail' },
]

export const availability = {
  status: 'open',
  roles: ['Blockchain Development', 'Smart Contracts', 'DeFi Projects', 'Web3', 'Security Auditing', 'Full-Stack Development'],
}
