"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected runtime errors for telemetry
    console.error("[Aryan Portfolio Runtime Exception]:", error);
  }, [error]);

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] text-[#FAFAFA] px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #EF4444 0%, #F5C518 50%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(245,197,24,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center flex flex-col items-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          <span
            className="text-[11px] font-mono tracking-[0.2em] uppercase text-red-400"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            ERR_500 // EXECUTION_REVERTED
          </span>
        </div>

        {/* Serif Headline */}
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Computation Interrupted
        </h1>

        <p
          className="text-sm sm:text-base text-[#888888] leading-relaxed mb-6 max-w-md"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          An unexpected exception occurred during client hydration or runtime execution. The state has been captured safely.
        </p>

        {/* Error Digest or Message Box */}
        {error.digest && (
          <div className="w-full max-w-md p-3 mb-8 rounded-lg bg-black/50 border border-white/10 text-left">
            <span className="text-[10px] uppercase tracking-wider text-white/40 block mb-1 font-mono">
              Error Digest
            </span>
            <code
              className="text-xs text-[#F5C518] font-mono break-all"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              {error.digest}
            </code>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F5C518] text-[#0A0A0A] font-medium text-sm transition-all duration-200 hover:bg-[#ffe066] hover:shadow-[0_0_24px_rgba(245,197,24,0.35)] active:scale-[0.98] cursor-pointer"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Re-execute Block</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white/80 font-medium text-sm hover:border-[#F5C518]/40 hover:text-white transition-all duration-200 hover:bg-white/[0.06]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>Return to Genesis</span>
          </Link>
        </div>

        {/* Technical Footer Telemetry */}
        <div
          className="mt-12 text-[11px] font-mono text-[#555555] tracking-wider uppercase flex items-center gap-3"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span>GAS: REFUNDED</span>
          <span>·</span>
          <span>REVERT_CODE: EVM_EXCEPTION</span>
        </div>
      </div>
    </main>
  );
}
