import fs from "fs";
import path from "path";
import { cache } from "react";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: string;
  isWeekly?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  //  Front Matter  ,  key: value  ,  key  ,  value
  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    //  value  , ""  ,   value
    value = value.replace(/^['"](.*)['"]$/, "$1");

    if (key.trim() === "tags") {
      metadata[key.trim() as "tags"] = value
        .split(",")
        .map((tag) => tag.trim());
    } else {
      metadata[key.trim() as Exclude<keyof Metadata, "tags">] = value;
    }
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export const getBlogPosts = cache(() => {
  return getMDXData(path.join(process.cwd(), "app", "content", "posts"));
});

export const getProjects = cache(() => {
  return getMDXData(path.join(process.cwd(), "app", "content", "projects"));
});

export const getWeekly = cache(() => {
  return getMDXData(path.join(process.cwd(), "app", "content", "posts")).filter(
    (post) => post.metadata.isWeekly === "true",
  );
});

export const getAllCategories = cache(() => {
  const allBlogs = getBlogPosts();
  return Array.from(
    new Set(allBlogs.map((post) => post.metadata.category)),
  ).sort();
});

export const getAllTags = cache(() => {
  const allBlogs = getBlogPosts();
  return Array.from(
    new Set(allBlogs.flatMap((post) => post.metadata.tags)),
  ).sort();
});

export const getPostsByTag = cache((tag: string) => {
  const allBlogs = getBlogPosts();
  return allBlogs.filter((post) => post.metadata.tags?.includes(tag));
});

export const getPostsByCategory = cache((category: string) => {
  const allBlogs = getBlogPosts();
  return allBlogs.filter((post) => post.metadata.category === category);
});

export const getFeaturedPosts = cache(() => {
  const allBlogs = getBlogPosts();
  return allBlogs.filter((post) => post.metadata.featured === "true");
});
