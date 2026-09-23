"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
