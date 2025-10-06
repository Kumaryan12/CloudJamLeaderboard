import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // --- Core ---
  title: "Google Cloud Study Jams 2025–26 | GDGC NIT Goa",
  description:
    "Live leaderboard for Google Cloud Study Jams 2025–26 at NIT Goa. Track skill badges, arcade games, and participant progress.",
  keywords: [
    "Google Cloud",
    "Study Jams",
    "GCCP",
    "GDGC NIT Goa",
    "NIT Goa",
    "Leaderboard",
    "Cloud Skills",
  ],
  authors: [{ name: "GDGC NIT Goa" }],
  creator: "GDGC NIT Goa",
  publisher: "GDGC NIT Goa",
  robots: "index,follow",
  metadataBase: new URL("https://cloud-jam-leaderboard-1114088229.asia-south1.run.app"),

  // --- Icons (handled by Next metadata) ---
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png", // (optional) add if you have one
  },

  // --- Open Graph ---
  openGraph: {
    title: "Google Cloud Study Jams 2025–26 | GDGC NIT Goa",
    description:
      "Live leaderboard for Google Cloud Study Jams 2025–26 at NIT Goa. Track skill badges, arcade games, and participant progress.",
    url: "/",
    siteName: "NIT Goa Cloud Jam Leaderboard",
    images: [
      {
        // Put your banner at: public/assets/nitgoa-og.png (1200×630 recommended)
        url: "/assets/nitgoa-og.png",
        width: 1200,
        height: 630,
        alt: "NIT Goa Cloud Jam Leaderboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "Google Cloud Study Jams 2025–26 | GDGC NIT Goa",
    description:
      "Live leaderboard for Google Cloud Study Jams 2025–26 at NIT Goa. Track skill badges, arcade games, and participant progress.",
    images: ["/assets/nitgoa-og.png"],
    // creator: "@your_handle_here", // optional—set if you have a Twitter/X handle
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
