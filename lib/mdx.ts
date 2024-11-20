"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import React from "react";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: React.ReactElement;
  toc?: TableOfContents[];
};

export type TableOfContents = {
  title: string;
  url: string;
  depth: number;
};

type MDXContent = {
  frontmatter: {
    title: string;
    date: string;
    description?: string;
    [key: string]: any;
  };
};

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const post = await getPostBySlug(slug);
        return post;
      })
    );

    return allPostsData
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Process the MDX content with enhanced features
    const { content: processedContent } = await compileMDX<MDXContent>({
      source: content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug, // Add IDs to headings
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
                properties: {
                  className: ["anchor"],
                },
              },
            ],
            [
              rehypeHighlight,
              {
                detect: true,
                ignoreMissing: true,
                subset: false,
              },
            ],
          ],
        },
      },
    });

    // Extract headings for table of contents
    const headingLines = content
      .split("\n")
      .filter((line) => line.match(/^#{1,3} /));
    const toc = headingLines
      .map((line) => {
        const match = line.match(/^(#{1,3}) (.+)$/);
        if (!match) return null;
        const [, hashes, title] = match;
        return {
          title: title.trim(),
          url: `#${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          depth: hashes.length,
        };
      })
      .filter((item): item is TableOfContents => item !== null);

    return {
      slug,
      content: processedContent,
      title: data.title,
      date: data.date,
      description: data.description,
      toc,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}
