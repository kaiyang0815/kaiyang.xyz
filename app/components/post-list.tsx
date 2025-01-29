import Link from "next/link";
import { formatDate, getBlogPosts } from "lib/server-utils";

export function PostList({ isRecent }: { isRecent: boolean }) {
    let allBlogs = getBlogPosts();

    // 先按日期排序
    const sortedBlogs = allBlogs.sort((a, b) => {
        if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ) {
            return -1;
        }
        return 1;
    });

    // 根据 isRecent 决定显示数量
    const blogsToShow = isRecent ? sortedBlogs.slice(0, 1) : sortedBlogs;

    return (
        <div>
            {blogsToShow.map((post) => (
                <Link
                    key={post.slug}
                    className="flex flex-col space-y-1 mb-4"
                    href={`/blog/${post.slug}`}
                >
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                            {formatDate(post.metadata.publishedAt, false)}
                        </p>
                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight hover:underline">
                            {post.metadata.title}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
