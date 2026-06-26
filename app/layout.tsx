import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mileshub Windows — Made-to-measure windows, doors & living spaces",
  description:
    "Premium uPVC, aluminium and timber-style windows, doors and conservatories — surveyed, made to measure and installed across the UK. Free no-obligation quotes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollFx />
      </body>
    </html>
  );
}
