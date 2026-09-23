import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis-provider";

/* ─── Google Fonts ──────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* ─── SEO Metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://aryan-portfolio.vercel.app"),
  title: "Aryan Tiwari — Blockchain Developer & Security Engineer",
  description:
    "Aryan Tiwari — 20-year-old blockchain developer and security engineer from Jabalpur, India. 8+ years in crypto since age 12. Solidity, smart contracts, DeFi, Kali Linux penetration testing, and full-stack Web3.",
  keywords: [
    "Aryan Tiwari",
    "Blockchain Developer",
    "Security Engineer",
    "Smart Contracts",
    "Web3",
    "DeFi",
    "Solidity",
    "Ethereum",
    "Kali Linux",
    "Penetration Testing",
    "Cryptocurrency",
    "Jabalpur India",
  ],
  authors: [{ name: "Aryan Tiwari", url: "https://www.linkedin.com/in/aryan-t-199014224" }],
  creator: "Aryan Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aryan Tiwari — Blockchain Developer & Security Engineer",
    description:
      "Blockchain developer and security engineer with 8+ years in crypto. Solidity smart contracts, DeFi protocols, penetration testing, and full-stack Web3 solutions.",
    siteName: "Aryan Tiwari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Tiwari — Blockchain Developer & Security Engineer",
    description:
      "20-year-old blockchain developer and security engineer. 8+ years in crypto since age 12.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

/* ─── JSON-LD Schema ────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Tiwari",
  jobTitle: "Blockchain Developer & Security Engineer",
  age: 20,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jabalpur",
    addressRegion: "Madhya Pradesh",
    addressCountry: "India",
  },
  email: "mailto:tiwariji0028@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/aryan-t-199014224",
    "https://github.com/knowledgeispower1715-sketch",
  ],
  knowsAbout: [
    "Blockchain", "Smart Contracts", "Solidity", "Ethereum", "Polygon",
    "Penetration Testing", "Kali Linux", "Cybersecurity", "Python", "C++",
    "DeFi", "Web3", "JavaScript", "TypeScript",
  ],
};

/* ─── Layout ────────────────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#FAFAFA] antialiased overflow-x-hidden">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
