import { PostList } from "app/components/post-list";

export const metadata = {
    title: "文章",
    description: "我在学习iOS过程中的学习笔记。",
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                我的文章
            </h1>
            <PostList isRecent={false} />
        </section>
    );
}
