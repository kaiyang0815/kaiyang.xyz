"use client"
import { motion } from "motion/react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

// 模拟博客数据
const posts = [
  {
    title: "构建现代化的 Next.js 博客系统",
    date: "2024-03-20",
    description: "探讨如何使用 Next.js 13 和 TypeScript 构建一个现代化的博客系统...",
    slug: "building-modern-nextjs-blog"
  },
  // ... 更多文章
]

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-3xl font-bold">博客文章</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold">{post.title}</h2>
                      <p className="text-muted-foreground mt-2">{post.description}</p>
                    </div>
                    <time className="text-sm text-muted-foreground">{post.date}</time>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 