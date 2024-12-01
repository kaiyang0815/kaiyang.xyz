import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { baseUrl } from "./sitemap";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kaiyang's Portfolio",
    template: "%s | Kaiyang's Portfolio",
  },
  description: "This is kaiyang's portfolio.",
  openGraph: {
    title: "Kaiyang's Portfolio",
    description: "This is kaiyang's portfolio.",
    url: baseUrl,
    siteName: "Kaiyang's Portfolio",
    locale: "en_US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-black dark:bg-black dark:text-white mx-4 mt-8 flex min-h-screen max-w-4xl flex-col antialiased lg:mx-auto`}
      >
        <main className="mt-6 flex min-w-0 flex-1 flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
        <div className="mt-auto py-4 text-center text-sm text-gray-500">
          <Analytics />
          <SpeedInsights />
          <Footer />
        </div>
      </body>
    </html>
  );
}
