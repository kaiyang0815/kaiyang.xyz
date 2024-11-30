import BlogPageContent from "app/components/blogPageContent";
import { getPostsByTag } from "app/libs/server-utils";
import { formatDate } from "app/libs/utils";
import Link from "next/link";

export default function Tag({ params }) {
  const posts = getPostsByTag(params.slug);
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        {"#" + params.slug}
      </h1>
      {posts
        .sort((a, b) =>
          a.metadata.publishedAt > b.metadata.publishedAt ? -1 : 1,
        )
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
    </section>
  );
}
