import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lxgwMono = localFont({
  src: "./fonts/LXGWWenKaiMono-Regular.ttf",
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
          lxgwMono.variable,
          notoSansSC.variable,
          "min-h-screen antialiased",
        )}
        style={{
          fontFamily:
            'var(--font-noto-sans), -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-8">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
