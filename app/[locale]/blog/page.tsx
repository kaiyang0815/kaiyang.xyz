import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/skeleton";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { MotionDiv } from "@/components/motion-wrapper";
import { format } from "date-fns";
import { Tag } from "@/components/tag";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";

function BlogSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((index) => (
        <Card key={index} className="p-6">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-2 flex-1">
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <div className="flex gap-1.5 pt-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-16" />
              </div>
            </div>
            <Skeleton className="h-4 w-24" />
          </div>
        </Card>
      ))}
    </div>
  );
}

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
        <Suspense fallback={<BlogSkeleton />}>
          <div className="space-y-4">
            {posts.map((post, index) => (
              <MotionDiv
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group overflow-hidden border-border/50 hover:border-border/80 hover:shadow-lg transition-all duration-300">
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <time className="text-sm text-muted-foreground whitespace-nowrap">
                          {format(new Date(post.date), "MMM d, yyyy")}
                        </time>
                      </div>
                      
                      <div className="space-y-2">
                        <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-2">
                          {post.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                        <Button variant="ghost" className="h-8 pl-0 hover:pl-2 transition-all">
                          Read more <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                        
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 items-center">
                            {post.tags.map((tag) => (
                              <Tag key={tag}>#{tag}</Tag>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              </MotionDiv>
            ))}
          </div>
        </Suspense>
      </MotionDiv>
    </div>
  );
}
