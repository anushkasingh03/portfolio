import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Libre_Franklin, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const serif = Source_Serif_4({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Libre_Franklin({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-mono", display: "swap" });

const title = `${profile.name} | ${profile.role}`;
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title, description: profile.description,
  keywords: ["Applied AI", "LLM inference", "KV cache", "quantization", "CUDA", "PyTorch", "vLLM", "SGLang", "ML systems"],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: { title, description: profile.description, url: "/", siteName: profile.name, type: "profile", locale: "en_US" },
  twitter: { card: "summary", title, description: profile.description },
};
export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = Object.entries(profile.links).filter(([k, v]) => v && k !== "resume").map(([, v]) => v);
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, email: profile.email, url: profile.siteUrl, sameAs };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
