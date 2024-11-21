import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { getAllWeeklyPosts } from "@/lib/mdx";
import { MotionDiv } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Weekly | Kaiyang's Notebook",
  description: "Weekly updates and learning notes",
};

export default async function WeeklyPage() {
  const posts = await getAllWeeklyPosts();

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-3xl font-bold">Weekly Updates</h1>
        <p className="text-lg text-muted-foreground">
          A weekly journal of my learning journey and thoughts.
        </p>
        <div className="space-y-4">
          {posts.map((post) => (
            <MotionDiv
              key={post.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Link href={`/weekly/${post.slug}`}>
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
