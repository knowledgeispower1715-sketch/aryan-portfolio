"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor for precision pointer devices (mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) {
        setCursorType(null);
        return;
      }

      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        setCursorType(interactive.dataset.cursor || "pointer");
        return;
      }

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorType("pointer");
      } else {
        setCursorType(null);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const isExpanded = !!cursorType;
  const isLabeled = cursorType && cursorType !== "pointer";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer reticle / fluid ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#00d9ff]/50 bg-[#00d9ff]/[0.04] backdrop-blur-[2px] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.2)]"
        style={{
          x: smoothX,
          y: smoothY,
          width: isLabeled ? 72 : isExpanded ? 44 : 20,
          height: isLabeled ? 28 : isExpanded ? 44 : 20,
          borderRadius: isLabeled ? 14 : 9999,
          transition: "width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.22s",
        }}
      >
        {isLabeled && (
          <span className="font-mono text-[9px] font-bold tracking-wider text-[#00d9ff] uppercase">
            {cursorType}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#00d9ff] -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-[0_0_8px_#00d9ff]"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isLabeled ? 0 : 1,
        }}
      />
    </div>
  );
}
