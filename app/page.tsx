import { PostList } from "app/components/post-list";
import { ProjectList } from "./components/project-list";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold">kaiyang.xyz</h1>
            <p className="mb-4">👋，我是 Kaiyang，一位iOS独立开发者。</p>
            <div className="my-8">
                <h2 className="text-lg font-medium mb-2">近期文章</h2>
                <PostList isRecent={true} />

                <h2 className="text-lg font-medium mb-2">近期项目</h2>
                <ProjectList isRecent={true} />
            </div>
        </section>
    );
}
