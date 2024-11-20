import { Card } from "@/components/ui/card";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { MotionDiv } from "@/components/motion-wrapper";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-3xl font-bold">Articles</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <MotionDiv
              key={post.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold">{post.title}</h2>
                      <p className="text-muted-foreground mt-2">
                        {post.description}
                      </p>
                    </div>
                    <time className="text-sm text-muted-foreground">
                      {post.date}
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
