import { Card } from "@/components/ui/card";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { MotionDiv } from "@/components/motion-wrapper";
import { format } from "date-fns";
import { Tag } from "@/components/tag";

export default async function BlogPage() {
  const posts = await getAllPosts(); // Get all posts, sorted by date

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Articles</h1>
          <span className="text-muted-foreground">{posts.length} posts</span>
        </div>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <MotionDiv
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:bg-muted/50 transition-all hover:scale-[1.02] duration-300">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-2">
                        {post.description}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {post.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </div>
                      )}
                    </div>
                    <time className="text-sm text-muted-foreground whitespace-nowrap">
                      {format(new Date(post.date), "MMM d, yyyy")}
                    </time>
                  </div>
                </Card>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
