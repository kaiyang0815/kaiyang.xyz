import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

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

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="mx-4 mt-8 flex min-h-screen max-w-4xl flex-col antialiased lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-1 flex-auto flex-col px-2 md:px-0">
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
