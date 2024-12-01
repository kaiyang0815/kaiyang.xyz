import { getAllTags, getBlogPosts } from "@/lib/server-utils";

export const baseUrl = "https://kaiyang.xyz";

export default function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt)
      .toISOString()
      .split("T")[0],
  }));

  const routes = ["", "/blog", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const tagRoutes = getAllTags().map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...tagRoutes];
}
