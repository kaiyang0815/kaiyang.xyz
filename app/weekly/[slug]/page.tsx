import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getWeeklyPostBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MotionDiv } from "@/components/motion-wrapper";
import { Tag } from "@/components/tag";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

interface TableOfContentsProps {
  items: { title: string; url: string; depth: number }[];
  className?: string;
}

function TableOfContents({ items, className }: TableOfContentsProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h2 className="font-semibold mb-4">Table of Contents</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={cn(
              "block text-muted-foreground hover:text-foreground transition-colors",
              item.depth === 1 && "font-medium",
              item.depth === 2 && "pl-4",
              item.depth === 3 && "pl-8"
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default async function WeeklyPost({ params }: Props) {
  const { slug } = await params;
  const post = await getWeeklyPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-8">
          {post.headerImage && (
            <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden h-64">
              <Image
                src={post.headerImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
        <Link
          href="/weekly"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Weekly Updates
        </Link>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
          <article className="space-y-8">
            <header className="space-y-4">
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <time className="text-muted-foreground">{post.date}</time>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </header>

            <div className="prose prose-neutral dark:prose-invert max-w-none prose-pre:p-0 prose-pre:bg-transparent">
              {post.content}
            </div>
          </article>

          {post.toc && post.toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                <TableOfContents items={post.toc} />
              </div>
            </aside>
          )}
        </div>
      </MotionDiv>
    </div>
  );
}