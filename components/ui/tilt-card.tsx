"use client";

import React, { useRef, useState } from "react";
import { soundFX } from "@/lib/sound-fx";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("");
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
    );

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.18,
      });
    }

    if (onMouseMove) onMouseMove(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    soundFX.playHover();
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Dynamic 3D Glare Overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(0, 217, 255, 0.25), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
