"use client";

import { formatDate } from "@/lib/format-date";
import { Post } from "@/types/post";
import { motion } from "motion/react";
import Link from "next/link";

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
    >
      <div className="py-2">
        <Link
          href={`/blog/${post.slug}`}
          className="flex flex-col font-semibold text-neutral-500 hover:text-neutral-600 md:flex-row md:gap-2"
        >
          <time
            dateTime={post.frontmatter.publishDate}
            className="mb-1 text-sm md:mb-0 md:mr-2 md:text-base"
          >
            {formatDate(post.frontmatter.publishDate)}
          </time>
          <div>{post.frontmatter.title}</div>
        </Link>
      </div>
    </motion.div>
  );
}
