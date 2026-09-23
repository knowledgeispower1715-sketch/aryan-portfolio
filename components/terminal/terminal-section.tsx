"use client";

import React from "react";
import { Terminal as TerminalIcon, ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/motion-wrapper";
import { InteractiveTerminal } from "./interactive-terminal";

export function TerminalSection() {
  return (
    <section
      id="terminal-section"
      className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#050507] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] font-mono text-xs text-[#00d9ff] uppercase tracking-wider mb-4">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>LIVE OFFENSIVE EXPLOIT & AUDIT ENGINE</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight mb-4">
              Execute Real-Time Protocol Diagnostics
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-xl mx-auto text-sm sm:text-base font-mono text-[#9ca3af]">
              {"// Interact with the live security terminal below. Click quick-run actions or input commands to verify EVM gas proofs, pentest vectors, and cryptographic background."}
            </p>
          </Reveal>
        </div>

        {/* Live Interactive Terminal */}
        <div className="w-full">
          <InteractiveTerminal />
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-[#8b949e]">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Kali Linux Reconnaissance Ready</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <Zap className="w-4 h-4 text-[#00d9ff]" />
            <span>EVM Reentrancy Guard Verification</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <TerminalIcon className="w-4 h-4 text-[#8b5cf6]" />
            <span>Interactive Web Audio Feedback</span>
          </div>
        </div>
      </div>
    </section>
  );
}
