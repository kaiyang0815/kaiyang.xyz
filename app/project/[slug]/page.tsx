import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate } from "app/libs/utils";
import { getProjects } from "app/libs/server-utils";
import { baseUrl } from "app/sitemap";
import Link from "next/link";

export async function generateStaticParams() {
  let projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata;

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
      url: `${baseUrl}/project/${project.slug}`,
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

export default function Project({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
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
            "@type": "Article",
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            image: project.metadata.image
              ? project.metadata.image
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/project/${project.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title text-2xl font-semibold tracking-tighter">
        {project.metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex items-center justify-start space-x-2 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(project.metadata.publishedAt)}
        </p>
        <span className="text-neutral-400 dark:text-neutral-500">|</span>
        <Link href={`/project/category/${project.metadata.category}`}>
          {project.metadata.category}
        </Link>
      </div>
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
  );
}
