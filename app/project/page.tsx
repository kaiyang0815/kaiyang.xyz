import { ProjectList } from "app/components/project-list";
import { getProjects } from "app/libs/server-utils";

export const metadata = {
  title: "Projects",
  description: "Experience my ios projects.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Projects</h1>
      <ProjectList projects={projects} />
    </section>
  );
}
