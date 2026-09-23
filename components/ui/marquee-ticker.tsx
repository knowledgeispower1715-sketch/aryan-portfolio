"use client";

import { Marquee } from "@/components/ui/marquee";

const ROW1 = [
  "Blockchain", "Ethereum", "Solidity", "Smart Contracts", "Web3",
  "DeFi", "Kali Linux", "Penetration Testing", "EVM", "Polygon",
];

const ROW2 = [
  "Security Engineer", "Python", "C++ Developer", "TypeScript", "BNB Chain",
  "Hardhat", "On-Chain Analytics", "Java", "Tokenomics", "AMM Protocols",
];

export function MarqueeTicker() {
  return (
    <section className="relative py-0 overflow-hidden bg-[#0D0D0D] border-y" style={{ borderColor: "rgba(245,197,24,0.15)" }}>
      {/* Row 1 — scrolls left */}
      <div className="py-3.5 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <Marquee
          items={ROW1}
          direction="left"
          className="text-[#888888]"
        />
      </div>

      {/* Row 2 — scrolls right */}
      <div className="py-3.5" style={{ color: "#F5C518" }}>
        <Marquee
          items={ROW2}
          direction="right"
          className="text-[#F5C518]"
        />
      </div>
    </section>
  );
}
