"use client";

import GiscusComments from "@/components/giscus-comments";
import Header from "@/components/header";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col justify-start space-y-8">
      <Header />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-neutral max-w-none space-y-4"
      >
        <h1 className="mb-8">关于我</h1>

        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={150}
          height={150}
          style={imageStyle}
          className="mx-auto"
        />

        <p>
          👋 你好！我是凯阳，一名专注于 iOS
          开发的软件工程师。在移动应用开发领域，我热衷于创造流畅、直观的用户体验。
        </p>

        <h2>技术栈</h2>
        <ul>
          <li>
            <strong>移动开发</strong>：精通 Swift、UIKit 和
            SwiftUI，构建过多个开源 iOS 应用
          </li>
          <li>
            <strong>前端开发</strong>：熟悉 React、TypeScript
            和现代前端工具链，能够独立开发 Web 应用
          </li>
          <li>
            <strong>其他技能</strong>：掌握 Git
            工作流、CI/CD、敏捷开发等软件工程实践
          </li>
        </ul>

        <h2>兴趣爱好</h2>
        <p>
          除了编程，我也热衷于探索新技术和最佳实践。我相信技术不仅是工具，更是实现创意和解决问题的媒介。
          在这个博客上，我会分享我的技术心得、开发经验和一些有趣的想法。
        </p>

        <h2>联系方式</h2>
        <p>
          如果你对我的
          <span>
            <Link href="/projects">项目</Link>
          </span>
          感兴趣，或者想要交流技术，可以通过以下方式联系我：
        </p>
        <ul>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/kaiyang0815"
              target="_blank"
              rel="noopener noreferrer"
            >
              @kaiyang0815
            </a>
          </li>
          <li>
            Twitter:{" "}
            <a
              href="https://twitter.com/KaiyW24184"
              target="_blank"
              rel="noopener noreferrer"
            >
              @KaiyW24184
            </a>
          </li>
        </ul>
        <h2>其他</h2>
        <div>欢迎在下方评论区留言打卡！</div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GiscusComments />
      </motion.div>
    </main>
  );
}
