import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lxgwMonoScreen = localFont({
  src: "./fonts/LXGWWenKaiMonoGBScreen.ttf",
  variable: "--font-noto-sans",
});

const notoSansSC = localFont({
  src: "./fonts/NotoSansSC-Regular.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "凯阳的备忘录",
  description: "使用 Next.js 创建的个人开发备忘录",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={cn(
          lxgwMonoScreen.variable,
          notoSansSC.variable,
          "min-h-screen antialiased",
        )}
        style={{
          fontFamily:
            'var(--font-noto-sans), -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-4xl px-6 py-8">
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
