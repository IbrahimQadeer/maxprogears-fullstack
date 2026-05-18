import type { Metadata } from "next";
import {
  Barlow,
  Barlow_Condensed,
  Cormorant_Garamond,
} from "next/font/google";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Custom BJJ & MMA Gear Supplier`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/branding/wings.png",
    shortcut: "/branding/wings.png",
    apple: "/branding/wings.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${barlow.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full font-body">
        {children}
      </body>
    </html>
  );
}
