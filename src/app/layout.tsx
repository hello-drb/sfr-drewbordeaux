import type { Metadata } from "next";
import { Anton, Inter, EB_Garamond } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Drew Bordeaux \u2014 Creative Director & Signal Architect",
    template: "%s | Drew Bordeaux",
  },
  description:
    "Creative direction across AI film, photography, music, and signal architecture. The unified creative identity of Drew Bordeaux.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://drewbordeaux.com"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${ebGaramond.variable}`}
    >
      <body className="font-sans antialiased">
        <div className="film-grain" aria-hidden="true" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
