import { getBlogPosts } from "@/lib/server-utils";
import RSS from "rss";
import { baseUrl } from "../sitemap";

export async function GET() {
  const allBlogs = getBlogPosts();

  const feed = new RSS({
    title: "Kaiyang's Blog",
    description: "Personal blog about software development and design",
    site_url: baseUrl,
    feed_url: `${baseUrl}/feed.xml`,
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.metadata.title,
      url: `${baseUrl}/blog/${post.slug}`,
      date: post.metadata.publishedAt,
      description: post.metadata.summary,
      author: "Kaiyang",
      categories: [post.metadata.category],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
