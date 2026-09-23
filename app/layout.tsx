import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Tiwari | Blockchain Developer & Security Engineer",
  description:
    "Aryan Tiwari — Blockchain developer and security engineer with 8+ years in the cryptocurrency ecosystem. Specializing in smart contracts, DeFi, penetration testing, and Web3 solutions. Based in Jabalpur, India.",
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
    "Full-Stack Developer",
  ],
  authors: [{ name: "Aryan Tiwari" }],
  creator: "Aryan Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aryan Tiwari | Blockchain Developer & Security Engineer",
    description:
      "Blockchain developer and security engineer with 8+ years in the cryptocurrency ecosystem. Building secure, scalable Web3 solutions.",
    siteName: "Aryan Tiwari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Tiwari | Blockchain Developer & Security Engineer",
    description:
      "Blockchain developer and security engineer with 8+ years in crypto. Smart contracts, DeFi, penetration testing, and Web3.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Tiwari",
  jobTitle: "Blockchain Developer & Security Engineer",
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
    "Blockchain",
    "Smart Contracts",
    "Solidity",
    "Ethereum",
    "Penetration Testing",
    "Kali Linux",
    "Cryptocurrency",
    "Cybersecurity",
    "Python",
    "Full-Stack Development",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
