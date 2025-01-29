import { ProjectList } from "app/components/project-list";

export const metadata = {
    title: "项目",
    description: "在学习iOS开发过程中做的一些小项目。",
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                我的项目
            </h1>
            <ProjectList isRecent={false} />
        </section>
    );
}
