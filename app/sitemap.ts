import { getPosts } from "@/components/post-list";
import { Post } from "@/types/post";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = [
    {
      url: "https://kaiyang.xyz", // Replace with your homepage
      lastModified: new Date(),
    },
  ];

  const posts = await getPosts();

  posts.forEach((post: Post) => {
    links.push({
      url: `https://kaiyang.xyz/blog/${post.slug}`,
      lastModified: new Date(post.frontmatter.publishDate),
    });
  });

  return links;
}
