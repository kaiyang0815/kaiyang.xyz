import { Post } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Suspense } from "react";
import PostItem from "./post-item";

export async function getPosts(): Promise<Post[]> {
  const contentDir = path.join(process.cwd(), "public", "posts");
  const files = fs.readdirSync(contentDir);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, "utf8");
      const { data: frontmatter } = matter(content);
      return {
        slug: file.replace(".mdx", ""),
        frontmatter: frontmatter as Post["frontmatter"],
      };
    })
    .filter((post) => !post.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishDate).getTime() -
        new Date(a.frontmatter.publishDate).getTime(),
    );

  return posts;
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Suspense fallback={<>Loading...</>}>
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
