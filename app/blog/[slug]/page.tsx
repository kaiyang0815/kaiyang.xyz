import GiscusComments from "@/components/giscus-comments";
import CustomMDX from "@/components/mdx-remote";
import "@/styles/github-dark.css";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Suspense } from "react";
import rehypeHighlight from "rehype-highlight";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
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
      <h1 className="mb-2">{frontmatter.title}</h1>
      <time
        dateTime={frontmatter.publishDate}
        className="text-sm text-neutral-500"
      >
        {new Date(frontmatter.publishDate).toLocaleDateString("zh-CN")}
      </time>
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
