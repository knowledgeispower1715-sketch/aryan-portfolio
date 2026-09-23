"use client"

import { motion, type Variants } from "motion/react"
import { useReducedMotion } from "./use-reduced-motion"

const EASE = [0.25, 0.46, 0.45, 0.94] as const

// FadeIn - basic opacity reveal on scroll
export function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Reveal - slide up with clip reveal effect
export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// StaggerContainer & StaggerItem
const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
}

export function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : staggerItemVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// SlideIn - directional slide
export function SlideIn({ children, className, direction = 'left', delay = 0 }: { children: React.ReactNode; className?: string; direction?: 'left' | 'right' | 'up' | 'down'; delay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  const dirMap = { left: { x: -40, y: 0 }, right: { x: 40, y: 0 }, up: { x: 0, y: -40 }, down: { x: 0, y: 40 } }
  const d = dirMap[direction]
  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, ...d }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ScaleIn - subtle scale entrance
export function ScaleIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// TextReveal - for hero/display text with character stagger feel
export function TextReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
