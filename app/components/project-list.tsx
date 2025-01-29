import { formatDate, getProjects } from "lib/server-utils";
import Image from "next/image";
import Link from "next/link";

export function ProjectList({ isRecent }: { isRecent: boolean }) {
    let allProjects = getProjects();

    const sortedProjects = allProjects.sort((a, b) => {
        if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
        ) {
            return -1;
        }
        return 1;
    });

    const projectsToShow = isRecent
        ? sortedProjects.slice(0, 1)
        : sortedProjects;

    return (
        <div>
            {projectsToShow.map((proj) => (
                <Link key={proj.slug} href={`/project/${proj.slug}`}>
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                            {formatDate(proj.metadata.publishedAt, false)}
                        </p>
                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight hover:underline">
                            {proj.metadata.title}
                        </p>
                        {proj.metadata.image && (
                            <Image
                                src={proj.metadata.image}
                                alt={proj.metadata.title || "Project image"}
                                width={100}
                                height={100}
                            />
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}
