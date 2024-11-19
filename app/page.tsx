"use client"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
// 模拟数据，实际使用时可以从 API 或 CMS 获取
const recentPosts = [
  {
    title: "构建现代化的 Next.js 博客系统",
    date: "2024-03-20",
    description: "探讨如何使用 Next.js 13 和 TypeScript 构建一个现代化的博客系统...",
    slug: "building-modern-nextjs-blog"
  },
  // ... 更多博客文章
];

const skills = [
  "React", "TypeScript", "Next.js", "Node.js", "Python", 
  "Docker", "AWS", "GraphQL", "TailwindCSS"
];

const projects = [
  {
    title: "AI 写作助手",
    description: "基于 GPT-4 的智能写作辅助工具",
    tech: ["React", "OpenAI API", "Node.js"],
    link: "#"
  },
  // ... 更多项目
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 space-y-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* 个人信息部分 */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-12 text-center"
      >
        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Kaiyang"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold">Kaiyang</h1>
          <p className="text-lg text-muted-foreground">
            软件工程师 / 终身学习者
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            你好！我是 Kaiyang，一名热爱技术和创新的软件工程师。
            这里是我的个人空间，我会分享技术见解、学习心得和个人项目。
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" className="text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://twitter.com/yourusername" className="text-muted-foreground hover:text-primary transition-colors">
            Twitter
          </a>
          <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </motion.main>

      {/* 技能标签 */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">技能 & 工具</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge variant="secondary" className="text-sm">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 最新博客文章 */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{post.description}</p>
                    </div>
                    <time className="text-sm text-muted-foreground">{post.date}</time>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 项目展示 */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-6">精选项目</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={project.link}>
                <Card className="p-4 h-full hover:bg-muted/50 transition-colors">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  <div className="flex gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
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
