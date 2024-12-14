"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TocItem {
  level: number;
  text: string;
  id: string;
}

export default function TableOfContents({ content }: { content: string }) {
  const [toc, setToc] = useState<TocItem[]>([]);

  useEffect(() => {
    // 标记是否在代码块内
    let isInCodeBlock = false;
    const headings = content
      .split("\n")
      .filter((line) => {
        // 检测代码块的开始和结束
        if (line.startsWith("```")) {
          isInCodeBlock = !isInCodeBlock;
          return false;
        }
        // 只在非代码块内处理标题
        return !isInCodeBlock && line.startsWith("#");
      })
      .map((line) => {
        const level = line.match(/^#+/)?.[0]?.length ?? 0;
        const text = line.replace(/^#+\s+/, "");
        const id = text.toLowerCase().replace(/\s+/g, "-");
        return { level, text, id };
      });

    setToc(headings);
  }, [content]);

  return (
    <nav className="table-of-contents">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
      >
        <h2 className="mb-2 text-lg font-bold">目录</h2>
        <div>
          {toc.map((item, index) => (
            <div
              key={index}
              style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
            >
              <Link
                href={`#${item.id}`}
                className="font-semibold text-neutral-500 hover:text-neutral-600 hover:underline dark:text-neutral-400 hover:dark:text-neutral-100"
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
