import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Block Not Found | Aryan Tiwari",
  description: "The requested ledger entry could not be located on this protocol.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] text-[#FAFAFA] px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #F5C518 0%, transparent 70%)" }}
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
        {/* Protocol Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F5C518]/30 bg-[#F5C518]/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
          <span
            className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#F5C518]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            ERR_404 // NULL_BLOCK_EXCEPTION
          </span>
        </div>

        {/* Serif Headline */}
        <h1
          className="text-6xl sm:text-7xl font-bold tracking-tight text-white mb-4 leading-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          404
        </h1>

        <p
          className="text-2xl sm:text-3xl font-semibold text-white/90 mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ledger Entry Missing
        </p>

        <p
          className="text-sm sm:text-base text-[#888888] leading-relaxed mb-8 max-w-md"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          The requested route does not exist on this ledger or has been reorganized in a hard fork. Verify the URI sequence or navigate back to the genesis block.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F5C518] text-[#0A0A0A] font-medium text-sm transition-all duration-200 hover:bg-[#ffe066] hover:shadow-[0_0_24px_rgba(245,197,24,0.35)] active:scale-[0.98]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>Return to Genesis</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-white/80 font-medium text-sm hover:border-[#F5C518]/40 hover:text-white transition-all duration-200 hover:bg-white/[0.06]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>Explore Projects</span>
          </Link>
        </div>

        {/* Technical Footer Telemetry */}
        <div
          className="mt-12 text-[11px] font-mono text-[#555555] tracking-wider uppercase flex items-center gap-3"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <span>CHAIN_ID: 1</span>
          <span>·</span>
          <span>STATUS: REVERTED</span>
          <span>·</span>
          <span>NODE: ARYAN-TIWARI</span>
        </div>
      </div>
    </main>
  );
}
