"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, RotateCcw, ShieldAlert, Cpu, Sparkles } from "lucide-react";
import { soundFX } from "@/lib/sound-fx";
import { personalInfo } from "@/data/portfolio-data";

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "info";
  text: string;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "info", text: "ARYAN TIWARI // SECURITY & PROTOCOL KERNEL v2.4.0 (x86_64-solidity-linux)" },
    { type: "info", text: "Type 'help' or click quick commands below to execute audits & diagnostics." },
    { type: "success", text: "SYSTEM STATUS: ALL SECURITY SUITES LOADED [OK]" },
  ]);
  const [isExecuting, setIsExecuting] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    soundFX.playTerminalBeep();
    setLines((prev) => [...prev, { type: "input", text: `$ ${cmd}` }]);
    setIsExecuting(true);

    if (trimmed === "clear") {
      setLines([]);
      setIsExecuting(false);
      return;
    }

    if (trimmed === "help") {
      setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { type: "output", text: "Available commands:" },
          { type: "output", text: "  audit       - Run automated EVM smart contract vulnerability inspection" },
          { type: "output", text: "  pentest     - Execute simulated Kali Linux offensive penetration reconnaissance" },
          { type: "output", text: "  whoami      - Print verified engineering identity & background" },
          { type: "output", text: "  stack       - Print compiler & protocol capability list" },
          { type: "output", text: "  contact     - Reveal verified cryptographic transmission endpoints" },
          { type: "output", text: "  clear       - Clear screen buffer" },
        ]);
        setIsExecuting(false);
      }, 100);
      return;
    }

    if (trimmed === "whoami") {
      setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { type: "output", text: `NAME: ${personalInfo.name}` },
          { type: "output", text: `TITLE: ${personalInfo.title}` },
          { type: "output", text: `AGE: ${personalInfo.age} (Entered crypto in 2018 at age 12)` },
          { type: "output", text: `EXPERIENCE: 8+ Years in Cryptocurrency & EVM Architecture` },
          { type: "output", text: `ORIGIN: ${personalInfo.location}` },
          { type: "success", text: "INTEGRITY: 100% Truthful / Zero Fabricated Data" },
        ]);
        setIsExecuting(false);
      }, 120);
      return;
    }

    if (trimmed === "stack") {
      setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { type: "output", text: "COMPILERS: Solidity, Python, C++, Java, C, TypeScript, JavaScript" },
          { type: "output", text: "EVM TARGETS: Ethereum, Polygon, BNB Chain, Hardhat, Truffle, Ethers.js" },
          { type: "output", text: "OFFENSIVE SEC: Kali Linux, Penetration Testing, Reentrancy Detection, Cryptography" },
          { type: "output", text: "ANALYTICS: On-Chain Mempool Scraping, Trading Algorithms, Mining Optimization" },
        ]);
        setIsExecuting(false);
      }, 150);
      return;
    }

    if (trimmed === "audit") {
      setLines((prev) => [...prev, { type: "info", text: "[*] Initializing EVM static bytecode analysis on protocol vault..." }]);
      setTimeout(() => {
        soundFX.playTerminalBeep();
        setLines((prev) => [...prev, { type: "info", text: "[+] Verifying state variable storage layouts (EIP-1967 slots)..." }]);
      }, 300);

      setTimeout(() => {
        soundFX.playTerminalBeep();
        setLines((prev) => [
          ...prev,
          { type: "success", text: "[✓] Reentrancy Guard: CEI (Checks-Effects-Interactions) strictly enforced." },
          { type: "success", text: "[✓] Access Control: Role-based admin guards validated on withdrawal hooks." },
          { type: "success", text: "[✓] Arithmetic Checks: Solidity 0.8.24 checked math preventing overflow." },
          { type: "success", text: "[✓] Gas Benchmark: 28,450 GWEI median execution cost (Yul assembly optimized)." },
          { type: "success", text: "[AUDIT COMPLETE] 0 CRITICAL / 0 HIGH VULNERABILITIES IDENTIFIED." },
        ]);
        setIsExecuting(false);
      }, 700);
      return;
    }

    if (trimmed === "pentest") {
      setLines((prev) => [...prev, { type: "info", text: "[*] Launching Kali Linux network security test vectors..." }]);
      setTimeout(() => {
        soundFX.playTerminalBeep();
        setLines((prev) => [
          ...prev,
          { type: "output", text: "[+] Scanning RPC endpoint latency and DDoS mitigation shields..." },
          { type: "output", text: "[+] Testing oracle price feed manipulation vulnerabilities (TWAP vs Spot)..." },
          { type: "success", text: "[✓] Flash loan vulnerability vectors: Neutralized via multi-block TWAP." },
          { type: "success", text: "[✓] Front-running / MEV mitigation: Private mempool relays integrated." },
          { type: "success", text: "[PENTEST FINISHED] Target environment confirmed hardened." },
        ]);
        setIsExecuting(false);
      }, 600);
      return;
    }

    if (trimmed === "contact") {
      setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { type: "output", text: `DISPATCH EMAIL: ${personalInfo.email}` },
          { type: "output", text: `LINKEDIN: ${personalInfo.linkedin}` },
          { type: "output", text: `GITHUB: ${personalInfo.github}` },
        ]);
        setIsExecuting(false);
      }, 100);
      return;
    }

    setTimeout(() => {
      setLines((prev) => [
        ...prev,
        { type: "error", text: `zsh: command not found: ${cmd}. Type 'help' for options.` },
      ]);
      setIsExecuting(false);
    }, 80);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isExecuting) return;
    executeCommand(input);
    setInput("");
  };

  return (
    <div className="w-full rounded-2xl border border-white/[0.12] bg-[#07090e]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden font-mono text-xs">
      {/* Top Chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0c0f17] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-bold text-white text-[11px] flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#00d9ff]" />
            kali-evm-terminal // aryan@sec-node
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-bold">READY</span>
        </div>
      </div>

      {/* Quick Interactive Command Buttons */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white/[0.02] border-b border-white/[0.06]">
        <span className="text-[10px] text-[#6b7280] uppercase tracking-wider mr-1">QUICK RUN:</span>
        <button
          onClick={() => executeCommand("audit")}
          className="px-2.5 py-1 rounded-md bg-[#00d9ff]/10 hover:bg-[#00d9ff]/20 text-[#00d9ff] border border-[#00d9ff]/30 text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Play className="w-2.5 h-2.5" />
          <span>audit</span>
        </button>
        <button
          onClick={() => executeCommand("pentest")}
          className="px-2.5 py-1 rounded-md bg-[#8b5cf6]/10 hover:bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30 text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
        >
          <ShieldAlert className="w-2.5 h-2.5" />
          <span>pentest</span>
        </button>
        <button
          onClick={() => executeCommand("whoami")}
          className="px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Cpu className="w-2.5 h-2.5" />
          <span>whoami</span>
        </button>
        <button
          onClick={() => executeCommand("stack")}
          className="px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Sparkles className="w-2.5 h-2.5" />
          <span>stack</span>
        </button>
        <button
          onClick={() => executeCommand("clear")}
          className="ml-auto px-2 py-1 rounded-md bg-white/[0.03] hover:bg-white/[0.06] text-[#6b7280] hover:text-white border border-white/[0.08] text-[10px] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-2.5 h-2.5" />
          <span>clear</span>
        </button>
      </div>

      {/* Terminal Output Display */}
      <div className="p-4 sm:p-5 h-72 overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-white/10">
        {lines.map((l, idx) => (
          <div
            key={idx}
            className={`leading-relaxed ${
              l.type === "input"
                ? "text-white font-bold"
                : l.type === "success"
                ? "text-emerald-400"
                : l.type === "error"
                ? "text-rose-400"
                : l.type === "info"
                ? "text-[#00d9ff]"
                : "text-[#9ca3af]"
            }`}
          >
            {l.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Terminal Input Row */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 bg-[#05070a] border-t border-white/[0.08]">
        <span className="text-[#00d9ff] font-bold pl-1">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help', 'audit', 'pentest', 'whoami'..."
          disabled={isExecuting}
          className="w-full bg-transparent text-white placeholder-[#4b5563] focus:outline-none text-xs font-mono"
        />
        <button
          type="submit"
          disabled={isExecuting || !input.trim()}
          className="px-3 py-1 rounded bg-[#00d9ff] text-black font-bold text-[10px] hover:bg-[#38bdf8] transition-colors disabled:opacity-30 cursor-pointer"
        >
          ENTER
        </button>
      </form>
    </div>
  );
}
