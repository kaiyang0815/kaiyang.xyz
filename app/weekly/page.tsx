import { getWeekly } from "app/libs/server-utils";
import { formatDate } from "app/libs/utils";
import Link from "next/link";

export const metadata = {
  title: "Weekly",
};

export default function BlogPage() {
  const posts = getWeekly();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Weekly</h1>
      <div>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="mb-4 flex flex-col space-y-1"
              href={`/${post.metadata.isWeekly ? "weekly" : "blog"}/${post.slug}`}
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
    </section>
  );
}
