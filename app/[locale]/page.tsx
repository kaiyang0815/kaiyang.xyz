"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
// 模拟数据，实际使用时可以从 API 或 CMS 获取
const recentPosts = [
  {
    title: "Building a Modern Next.js Blog System",
    date: "2024-03-20",
    description:
      "Exploring how to build a modern blog system using Next.js 13 and TypeScript...",
    slug: "building-modern-nextjs-blog",
  },
  // ... 更多博客文章
];

const projects = [
  {
    title: "AI Writing Assistant",
    description: "An intelligent writing assistant based on GPT-4",
    tech: ["React", "OpenAI API", "Node.js"],
    link: "#",
  },
  // ... 更多项目
];

export default function Home() {
  return (
    <div className="min-h-screen p-6 pb-20 space-y-24 sm:p-16 md:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* 个人信息部分 */}
      <motion.main className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Kaiyang"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <h1 className="text-6xl font-black">Kaiyang WANG</h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer / Lifelong Learner
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Hi! I&apos;m Kaiyang, a software engineer passionate about
            technology and innovation. This is my personal space where I share
            technical insights, learning experiences, and personal projects.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/yourusername"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Twitter
          </a>
          <a
            href="mailto:your@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </motion.main>

      {/* 最新博客文章 */}
      <motion.section className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-base text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
          >
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="space-y-5">
          {recentPosts.map((post) => (
            <motion.div key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{post.title}</h3>
                      <p className="text-base text-muted-foreground mt-2">
                        {post.description}
                      </p>
                    </div>
                    <time className="text-sm text-muted-foreground whitespace-nowrap">
                      {post.date}
                    </time>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 项目展示 */}
      <motion.section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div key={project.title}>
              <Link href={project.link}>
                <Card className="p-6 h-full hover:bg-muted/50 transition-colors">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-base text-muted-foreground mt-2">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
