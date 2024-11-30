import BlogPageContent from "app/components/blogPageContent";
import {
  getBlogPosts,
  getAllCategories,
  getAllTags,
} from "app/libs/server-utils";

export const metadata = {
  title: "Tag",
  description: "Read posts by tag.",
};

enum TabItem {
  All = "All",
  Category = "Category",
  Tag = "Tag",
}

export default function Page() {
  const posts = getBlogPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Tags</h1>
      <BlogPageContent
        posts={posts}
        categories={categories}
        tags={tags}
        tag={TabItem.Tag}
      />
    </section>
  );
}
