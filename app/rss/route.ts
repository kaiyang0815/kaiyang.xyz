import { getPosts } from "@/components/post-list";
import { Configuration } from "@/configuration";

export async function GET() {
  const allBlogs = await getPosts();

  const itemsXml = allBlogs
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishDate).getTime() -
        new Date(a.frontmatter.publishDate).getTime(),
    )
    .map(
      (post) =>
        `<item>
            <title>${post.frontmatter.title}</title>
            <link>${Configuration.siteUrl}/blog/${post.slug}</link>
            <description>${post.frontmatter.description || ""}</description>
            <pubDate>${new Date(post.frontmatter.publishDate).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
          <title>My Portfolio</title>
          <link>${Configuration.siteUrl}</link>
          <description>This is my portfolio RSS feed</description>
          ${itemsXml}
      </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
