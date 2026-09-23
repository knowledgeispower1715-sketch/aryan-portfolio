"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface MetallicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "silver" | "dark" | "cyan";
  size?: "default" | "sm" | "lg";
}

export const MetallicButton = React.forwardRef<HTMLButtonElement, MetallicButtonProps>(
  (
    {
      className,
      variant = "dark",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const [isPressed, setIsPressed] = React.useState(false);
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);

    React.useEffect(() => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }, []);

    const sizeClasses = {
      sm: "h-9 px-4 text-xs rounded-xl",
      default: "h-11 px-6 text-sm rounded-xl",
      lg: "h-13 px-8 text-base rounded-2xl",
    };

    const variantStyles = {
      dark: {
        container:
          "bg-gradient-to-b from-[#2a2e39] to-[#0e1117] border border-white/[0.14] shadow-[0_4px_12px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.8)]",
        text: "text-[#f0f0f0]",
        shine: "via-white/[0.18]",
      },
      silver: {
        container:
          "bg-gradient-to-b from-[#e2e8f0] to-[#94a3b8] border border-white/[0.4] shadow-[0_4px_14px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.3)]",
        text: "text-[#050507] font-semibold",
        shine: "via-white/[0.4]",
      },
      cyan: {
        container:
          "bg-gradient-to-b from-[#00d9ff] to-[#0284c7] border border-[#38bdf8]/40 shadow-[0_4px_20px_rgba(0,217,255,0.4),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.4)]",
        text: "text-[#050507] font-bold",
        shine: "via-white/[0.35]",
      },
    };

    const currentVariant = variantStyles[variant];

    return (
      <Comp
        ref={ref}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        className={cn(
          "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 select-none overflow-hidden cursor-pointer",
          sizeClasses[size],
          currentVariant.container,
          currentVariant.text,
          isPressed
            ? "scale-[0.97] translate-y-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)]"
            : !isTouchDevice && "hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)]",
          className
        )}
        {...props}
      >
        {/* Metallic diagonal brushed light reflection */}
        <span
          className={cn(
            "absolute inset-0 bg-gradient-to-tr from-transparent to-transparent opacity-60 pointer-events-none transition-transform duration-700",
            currentVariant.shine,
            !isTouchDevice && "group-hover:translate-x-full"
          )}
          style={{
            background:
              "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Comp>
    );
  }
);

MetallicButton.displayName = "MetallicButton";
