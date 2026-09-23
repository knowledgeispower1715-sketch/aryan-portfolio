"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const liquidButtonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d9ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507] disabled:pointer-events-none disabled:opacity-50 overflow-hidden cursor-pointer select-none group active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "text-[#f0f0f0] bg-white/[0.05] backdrop-blur-xl border border-white/[0.14] hover:border-[#00d9ff]/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_32px_0_rgba(0,217,255,0.25),inset_0_1px_2px_rgba(0,217,255,0.4)]",
        cyan:
          "text-[#050507] bg-[#00d9ff] font-semibold hover:bg-[#38bdf8] shadow-[0_0_25px_rgba(0,217,255,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(0,217,255,0.7)] border border-[#00d9ff]/50",
        outline:
          "text-[#f0f0f0] bg-white/[0.02] backdrop-blur-md border border-white/[0.16] hover:bg-white/[0.08] hover:border-white/[0.35] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]",
        ghost:
          "text-[#f0f0f0] hover:bg-white/[0.08] hover:text-[#00d9ff]",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm rounded-full",
        sm: "h-9 px-4 text-xs rounded-full",
        lg: "h-13 px-8 text-base rounded-full",
        icon: "h-11 w-11 rounded-full p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  href?: string;
  target?: string;
  rel?: string;
  asChild?: boolean;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, href, target, rel, children, ...props }, ref) => {
    const filterId = React.useId().replace(/:/g, "");

    const innerContent = (
      <>
        {/* Hidden SVG Filter for authentic liquid refraction */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <defs>
            <filter id={`liquid-filter-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.04 0.08"
                numOctaves="2"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="4"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        {/* Liquid dynamic refraction layer */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent"
          style={{ filter: `url(#liquid-filter-${filterId})` }}
          aria-hidden="true"
        />

        {/* Liquid highlight specular reflection sweep */}
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.22] to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient liquid glow perimeter */}
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.18)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={cn(liquidButtonVariants({ variant, size, className }))}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(liquidButtonVariants({ variant, size, className }))}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

LiquidButton.displayName = "LiquidButton";
