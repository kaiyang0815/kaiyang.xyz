import Link from "next/link";
import { formatDate } from "app/libs/utils";

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
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col space-x-0 md:flex-row md:items-center md:space-x-2">
              <p className="w-[100px] text-sm text-neutral-600 tabular-nums dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-base font-medium tracking-tight text-neutral-900 hover:text-orange-900 dark:text-neutral-100">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}