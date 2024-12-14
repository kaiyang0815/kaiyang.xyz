import GiscusComments from "@/components/giscus-comments";
import CustomMDX from "@/components/mdx-remote";
import ProgressBar from "@/components/progress-bar";
import TableOfContents from "@/components/table-of-content";
import "@/styles/github-dark.css";
import fs from "fs";
import matter from "gray-matter";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import path from "path";
import { Suspense } from "react";
import rehypeHighlight from "rehype-highlight";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeMathjax],
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const contentDir = path.join(process.cwd(), "public", "posts");
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <div>Post not found</div>;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content: mdxContent } = matter(content);

  return (
    <article className="prose prose-neutral max-w-none">
      <ProgressBar />
      <div className="mb-4 flex flex-row items-center gap-1">
        <ChevronLeft size={18} />
        <Link href="/" className="no-underline hover:underline">
          返回首页
        </Link>
      </div>
      <h1 className="my-2">{frontmatter.title}</h1>
      {/* <div className="flex flex-row items-center justify-between">
        <ModeToggle />
      </div> */}
      <time
        dateTime={frontmatter.publishDate}
        className="text-sm text-neutral-500 dark:text-neutral-400"
      >
        {new Date(frontmatter.publishDate).toLocaleDateString("zh-CN")}
      </time>
      <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
        {frontmatter.description && <p>{frontmatter.description}</p>}
      </div>
      <div className="my-8">
        <TableOfContents content={mdxContent} />
      </div>
      <div className="mt-8">
        <Suspense fallback={<>Loading...</>}>
          {/* <MDXRemote source={mdxContent} /> */}
          <CustomMDX source={mdxContent} options={options} />
        </Suspense>
      </div>
      <div>
        <GiscusComments />
      </div>
    </article>
  );
}
