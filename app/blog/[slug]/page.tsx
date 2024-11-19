"use client"
import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogPost({ params }: { params: { slug: string } }) {
  // 这里可以根据 slug 获取具体的博客内容
  // 示例数据
  const post = {
    title: "构建现代化的 Next.js 博客系统",
    date: "2024-03-20",
    content: "这里是博客正文内容..."
  }

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <Link 
          href="/blog" 
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回文章列表
        </Link>
        
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <time className="text-muted-foreground">{post.date}</time>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content}
        </div>
      </motion.article>
    </div>
  )
} 