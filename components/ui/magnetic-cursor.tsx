"use client";

import { useEffect, useRef } from "react";

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only show on desktop with precise pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let ringScale = 1;
    let targetRingScale = 1;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Dot snaps fast
      dotX = lerp(dotX, mouseX, 0.88);
      dotY = lerp(dotY, mouseY, 0.88);
      dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;

      // Ring follows slower
      ringX = lerp(ringX, mouseX, 0.10);
      ringY = lerp(ringY, mouseY, 0.10);
      ringScale = lerp(ringScale, targetRingScale, 0.12);
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px) scale(${ringScale})`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [data-cursor='hover'], label, input");
      targetRingScale = isInteractive ? 2.8 : 1;
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Fast gold dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ backgroundColor: "#F5C518", mixBlendMode: "normal" }}
      />
      {/* Slow ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border pointer-events-none z-[9998] hidden md:block transition-[background-color] duration-200"
        style={{
          borderColor: "rgba(245,197,24,0.45)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
