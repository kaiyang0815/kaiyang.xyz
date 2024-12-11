import Header from "@/components/header";
import PaginationNav from "@/components/pagination-nav";
import PostList, { getPosts } from "@/components/post-list";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const posts = await getPosts();
  const postsPerPage = 7;
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Ensure current page is within valid range
  const validatedPage = Math.max(1, Math.min(currentPage, totalPages));

  const startIndex = (validatedPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <main className="flex flex-col justify-start space-y-4">
      <Header />
      <div>
        <PostList posts={currentPosts} />
        {totalPages > 1 && (
          <div className="mt-10">
            <PaginationNav
              totalPages={totalPages}
              currentPage={validatedPage}
            />
          </div>
        )}
      </div>
    </main>
  );
}
