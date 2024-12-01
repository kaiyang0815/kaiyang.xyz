import { formatDate } from "@/lib/utils";
import Link from "next/link";

interface Project {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    category: string;
    image?: string;
  };
  content: string;
}

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div>
      {projects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/project/${project.slug}`}
          >
            <div className="flex w-full flex-col space-x-0 md:flex-row md:items-center md:space-x-2">
              <p className="w-[100px] text-sm text-neutral-600 tabular-nums dark:text-neutral-400">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <p className="text-base font-medium tracking-tight text-neutral-900 hover:text-orange-900 dark:text-neutral-100">
                {project.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
