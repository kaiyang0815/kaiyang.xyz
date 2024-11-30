import { BlogPosts } from "app/components/posts";
import {
  getAllCategories,
  getAllTags,
  getBlogPosts,
  getFeaturedPosts,
  getProjects,
} from "app/libs/server-utils";
import { ProjectList } from "./components/project-list";
import Link from "next/link";

export default function Page() {
  const posts = getBlogPosts();
  const featuredPosts = getFeaturedPosts();
  const projects = getProjects();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div>
      <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tighter">
          hey, I'm kaiyang 👋
        </h1>
        <p className="prose prose-neutral dark:prose-invert">
          {`I'm a software engineer and designer. I enjoy creating beautiful and reliable applications.`}
        </p>
      </section>
      <hr className="my-4 border-neutral-200 dark:border-neutral-800" />
      <section>
        <div className="mt-8 mb-4 flex flex-row items-end justify-between text-xl font-medium tracking-tighter">
          <h2>Featured posts</h2>
          <Link href={"/blog"} className="text-neutral-500 hover:text-red-900">
            <p className="text-sm">View all</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <BlogPosts posts={featuredPosts} />
        </div>
      </section>

      <section>
        <h2 className="mt-8 mb-4 text-xl font-medium tracking-tighter">
          Recent projects
        </h2>
        <ProjectList projects={projects} />
      </section>

      <section>
        <h2 className="mt-8 mb-4 text-xl font-medium tracking-tighter">
          Categories
        </h2>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category}`}
              className="mb-2 flex flex-col space-y-1"
            >
              <div className="flex w-full flex-row items-center space-x-1">
                <h3 className="font-medium hover:text-orange-900">
                  {category}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {"(" +
                    posts.filter((post) => post.metadata.category === category)
                      .length +
                    ")"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mt-8 mb-4 text-xl font-medium tracking-tighter">Tags</h2>
        <div className="flex flex-row items-center space-x-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/blog/tag/${tag}`}>
              <p className="text-base text-neutral-900 hover:text-red-900 dark:text-neutral-400 dark:hover:text-red-100">
                <span className="mr-0.5 text-neutral-400 dark:text-neutral-400">
                  #
                </span>
                {tag}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
