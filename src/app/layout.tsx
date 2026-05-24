import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SwiftKitchen AI — WhatsApp Automation for Cloud Kitchens",
  description:
    "AI-powered WhatsApp automation for cloud kitchens, sweet shops, bakeries and restaurants. Instant orders, 0% missed leads, 24/7 support.",
  authors: [{ name: "SwiftKitchen AI" }],
  openGraph: {
    title: "SwiftKitchen AI — WhatsApp Automation",
    description:
      "Automate WhatsApp orders with AI. Built for cloud kitchens, bakeries, sweet shops and restaurants.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
