import BlogPageContent from "app/components/blogPageContent";
import {
  getBlogPosts,
  getAllCategories,
  getAllTags,
} from "app/libs/server-utils";

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
