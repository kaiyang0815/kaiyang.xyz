import BlogPageContent from "@/components/blog-page-content";
import { getAllCategories, getAllTags, getBlogPosts } from "@/lib/server-utils";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Posts</h1>
      <BlogPageContent
        posts={posts.filter((post) => !post.metadata.isWeekly)}
        categories={categories}
        tags={tags}
      />
    </section>
  );
}
