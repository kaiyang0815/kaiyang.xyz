import { ProjectList } from "app/components/project-list";

export const metadata = {
  title: "Projects",
  description: "Experience my ios projects.",
};

export default function Page() {
  return (
    <section>
      <ProjectList />
    </section>
  );
}