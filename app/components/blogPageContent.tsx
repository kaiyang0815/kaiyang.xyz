"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "app/libs/utils";
import { Tab } from "./tab";

enum TabItem {
  All = "All",
  Category = "Category",
  Tag = "Tag",
}

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    category: string;
    tags: string[];
    image?: string;
  };
  content: string;
}

interface BlogPageContentProps {
  posts: BlogPost[];
  categories: string[];
  tags: string[];
  tag?: TabItem;
}

export default function BlogPageContent({
  posts,
  categories,
  tags,
  tag,
}: BlogPageContentProps) {
  const [selectedTab, setSelectedTab] = useState<TabItem>(tag || TabItem.All);

  return (
    <section>
      <Tab
        items={Object.values(TabItem)}
        selectedItem={selectedTab}
        onChange={(item) => setSelectedTab(item as TabItem)}
      />

      {selectedTab === TabItem.All ? (
        <div>
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="mb-4 flex flex-col space-y-1"
                href={`/blog/${post.slug}`}
              >
                <div className="flex w-full flex-col space-x-0 md:flex-row md:items-center md:space-x-2">
                  <p className="w-[100px] text-sm text-neutral-600 tabular-nums dark:text-neutral-400">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  <p className="text-base font-medium tracking-tight text-neutral-900 hover:text-orange-900 dark:text-neutral-100">
                    {post.metadata.title}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      ) : selectedTab === TabItem.Category ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category}`}
              className="rounded-lg border border-neutral-200 p-4 transition-all hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
            >
              <h3 className="mb-2 font-medium">{category}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {
                  posts.filter((post) => post.metadata.category === category)
                    .length
                }{" "}
                posts
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-row space-x-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/blog/tag/${tag}`}>
              <p className="text-base text-neutral-600 hover:text-red-900 dark:text-neutral-400 dark:hover:text-red-100">
                {"#" + tag}
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
