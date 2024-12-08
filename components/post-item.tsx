import { formatDate } from "@/lib/format-date";
import { Post } from "@/types/post";
import Link from "next/link";

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="py-2">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col font-semibold text-neutral-500 hover:text-neutral-600 md:flex-row md:gap-2"
      >
        <time
          dateTime={post.frontmatter.publishDate}
          className="mb-1 text-sm md:mb-0 md:mr-1 md:w-[120px] md:text-base"
        >
          {formatDate(post.frontmatter.publishDate)}
        </time>
        <div>{post.frontmatter.title}</div>
      </Link>
    </div>
  );
}
