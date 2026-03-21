import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kaporta Group | Construction & Logistics Experts Since 2008",
    template: "%s | Kaporta Group",
  },
  description:
    "Kaporta Investment Sierra Leone Limited provides construction, haulage, quarrying, power, and equipment rental services across Sierra Leone and West Africa.",
  keywords: [
    "Sierra Leone construction company",
    "logistics services Sierra Leone",
    "quarry supply Sierra Leone",
    "civil engineering Sierra Leone",
    "equipment rental Freetown",
    "construction materials West Africa",
  ],
  authors: [{ name: "Kaporta Investment Sierra Leone Limited" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kaporta Group",
    title: "Kaporta Group | Construction & Logistics Experts Since 2008",
    description:
      "Trusted since 2008. Sierra Leone's leading provider of construction materials, logistics, and civil engineering services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
