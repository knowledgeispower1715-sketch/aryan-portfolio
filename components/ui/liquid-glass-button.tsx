"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const liquidButtonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d9ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507] disabled:pointer-events-none disabled:opacity-50 overflow-hidden cursor-pointer select-none group active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "text-[#f0f0f0] bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] hover:border-[#00d9ff]/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_8px_32px_0_rgba(0,217,255,0.2)]",
        cyan:
          "text-[#050507] bg-[#00d9ff] font-semibold hover:bg-[#38bdf8] shadow-[0_0_25px_rgba(0,217,255,0.35)] hover:shadow-[0_0_35px_rgba(0,217,255,0.6)] border border-[#00d9ff]/30",
        outline:
          "text-[#f0f0f0] bg-transparent border border-white/[0.16] hover:bg-white/[0.05] hover:border-white/[0.3]",
        ghost:
          "text-[#f0f0f0] hover:bg-white/[0.06] hover:text-[#00d9ff]",
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
  asChild?: boolean;
}

export const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(liquidButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Liquid highlight reflection */}
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Ambient liquid glow edge */}
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.12)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Comp>
    );
  }
);

LiquidButton.displayName = "LiquidButton";
