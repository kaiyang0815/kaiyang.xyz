import Link from "next/link";
import Comments from "@/components/comments";
import { formatDate } from "@/lib/utils";
import { baseUrl } from "@/app/sitemap";
import notFound from "@/app/not-found";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts, getWeekly } from "@/lib/server-utils";

export async function generateStaticParams() {
  const posts = getWeekly();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  let post = getWeekly().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/weekl/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog(props: { params: Params }) {
  const params = await props.params;

  const post = getBlogPosts().find((post) => post.slug === params.slug)!;

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            image: post.metadata.image
              ? post.metadata.image
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title text-2xl font-semibold tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex items-center justify-start space-x-2 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Writen by kaiyang at {formatDate(post.metadata.publishedAt)}
        </p>
        <span className="text-neutral-400 dark:text-neutral-500">|</span>
        <Link
          href={`/blog/category/${post.metadata.category}`}
          className="text-neutral-600 hover:text-red-900"
        >
          {post.metadata.category}
        </Link>
        <span className="text-neutral-400 dark:text-neutral-500">|</span>
        {post.metadata.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog/tag/${tag}`}
            className="text-neutral-600 hover:text-red-900"
          >
            #{tag}
          </Link>
        ))}
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-medium tracking-tighter">Comments</h2>
        <div className="giscus-container">
          <Comments />
        </div>
      </div>
    </section>
  );
}
