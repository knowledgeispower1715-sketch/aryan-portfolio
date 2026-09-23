"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[Aryan Portfolio Critical Layout Error]:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-[#FAFAFA] min-h-screen flex items-center justify-center p-6 antialiased font-sans">
        <main className="max-w-md w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-red-400">
              FATAL_CONSENSUS_FAILURE
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white mb-3">
            Core Protocol Halt
          </h1>

          <p className="text-sm text-[#888888] leading-relaxed mb-6">
            The root layout crashed before initialization could complete. You can attempt to reset the application state.
          </p>

          {error.digest && (
            <div className="w-full p-3 mb-6 rounded bg-black/60 border border-white/10 text-left font-mono text-xs text-[#F5C518] break-all">
              Digest: {error.digest}
            </div>
          )}

          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-lg bg-[#F5C518] text-[#0A0A0A] font-semibold text-sm transition-all hover:bg-[#ffe066] active:scale-95 cursor-pointer"
          >
            Hard Reset Session
          </button>
        </main>
      </body>
    </html>
  );
}
