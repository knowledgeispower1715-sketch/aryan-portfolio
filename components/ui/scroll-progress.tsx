"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none bg-white/[0.05]"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#00d9ff] via-[#8b5cf6] to-[#00d9ff] origin-left shadow-[0_0_12px_rgba(0,217,255,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
}
