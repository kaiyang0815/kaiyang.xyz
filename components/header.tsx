"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header className="flex flex-col items-start gap-4 pb-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-black">凯阳的备忘录</h1>
      </motion.div>

      <div className="text-neutral-5 text-sm">{/* <RandomSentence /> */}</div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
      >
        <nav className="flex gap-6 text-lg">
          <Link
            href="/"
            className={cn(
              path == "/"
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 dark:text-neutral-400",
              "transition-colors hover:text-neutral-900 hover:dark:text-neutral-100",
            )}
          >
            首页
          </Link>
          {/* <Link
            href="/projects"
            className={cn(
              path == "/projects" ? "text-neutral-900" : "text-neutral-500",
              "transition-colors hover:text-neutral-900",
            )}
          >
            项目
          </Link> */}
          <Link
            href="/about"
            className={cn(
              path == "/about"
                ? "text-neutral-900 dark:text-neutral-100"
                : "text-neutral-500 dark:text-neutral-400",
              "transition-colors hover:text-neutral-900 hover:dark:text-neutral-100",
            )}
          >
            关于
          </Link>
        </nav>
      </motion.div>
      {/* <Separator /> */}
    </header>
  );
}
