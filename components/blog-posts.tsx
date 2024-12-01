import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface BlogPostsProps {
  posts: Array<{
    slug: string;
    metadata: {
      title: string;
      publishedAt: string;
      summary: string;
      category: string;
      image?: string;
    };
    content: string;
  }>;
}

export function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug} className="mb-4 flex flex-col space-y-1">
            <div className="my-4 flex w-full flex-col space-x-0 md:flex-row md:items-start md:space-x-2">
              <div className="space-y-2">
                <Link href={`/blog/${post.slug}`}>
                  <p className="text-base font-medium tracking-tight text-neutral-900 hover:text-red-900 dark:text-neutral-100 dark:hover:text-red-900">
                    {post.metadata.title}
                  </p>
                </Link>
                <p className="line-clamp-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {post.metadata.summary}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
