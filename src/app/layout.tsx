import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Drops - Humanity is Our Religion",
  description: "Empowering communities through humanitarian aid, education, and sustainable development. Join us in creating lasting positive change.",
  keywords: ["NGO", "charity", "donation", "volunteer", "community development", "education", "healthcare", "humanitarian aid", "Little Drops", "Jharkhand"],
  authors: [{ name: "Little Drops" }],
  creator: "Little Drops",
  publisher: "Little Drops",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://littledrops.org"),
  openGraph: {
    title: "Little Drops - Humanity is Our Religion",
    description: "Empowering communities through humanitarian aid, education, and sustainable development.",
    url: "https://littledrops.org",
    siteName: "Little Drops",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Little Drops - Humanity is Our Religion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Drops - Humanity is Our Religion",
    description: "Empowering communities through humanitarian aid, education, and sustainable development.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: { google: "your-google-verification-code" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
