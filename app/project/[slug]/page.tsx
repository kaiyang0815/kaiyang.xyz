import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getProjects } from "lib/server-utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
    let projects = getProjects();

    return projects.map((proj) => ({
        slug: proj.slug,
    }));
}

export function generateMetadata({ params }) {
    let proj = getProjects().find((proj) => proj.slug === params.slug);
    if (!proj) {
        return;
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = proj.metadata;
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
            url: `${baseUrl}/project/${proj.slug}`,
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

export default function Page({ params }) {
    let proj = getProjects().find((proj) => proj.slug === params.slug);

    if (!proj) {
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
                        headline: proj.metadata.title,
                        datePublished: proj.metadata.publishedAt,
                        dateModified: proj.metadata.publishedAt,
                        description: proj.metadata.summary,
                        image: proj.metadata.image
                            ? `${baseUrl}${proj.metadata.image}`
                            : `/og?title=${encodeURIComponent(
                                  proj.metadata.title
                              )}`,
                        url: `${baseUrl}/project/${proj.slug}`,
                        author: {
                            "@type": "Person",
                            name: "Kaiyang 的iOS开发记事本",
                        },
                    }),
                }}
            />
            <h1 className="title font-semibold text-2xl tracking-tighter">
                {proj.metadata.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDate(proj.metadata.publishedAt)}
                </p>
            </div>
            <article className="prose">
                <CustomMDX source={proj.content} />
            </article>
        </section>
    );
}
