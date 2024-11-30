import { getBlogPosts, getAllTags } from "app/libs/server-utils";

export const baseUrl = "https://kaiyang.xyz";

export default function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt)
      .toISOString()
      .split("T")[0],
  }));

  let routes = ["", "/blog", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let tagRoutes = getAllTags().map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...tagRoutes];
}
