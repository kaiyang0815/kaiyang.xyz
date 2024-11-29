import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl md:text-4xl font-semibold tracking-tighter">
        Hi, I'm Kaiyang
      </h1>
      <p className="mb-4">
        {`I'm an iOS developer passionate about crafting elegant and user-friendly mobile applications. 
        With a deep understanding of the iOS ecosystem and Swift programming language, 
        I focus on delivering high-quality apps that provide exceptional user experiences. 
        I enjoy staying up-to-date with the latest Apple technologies and best practices 
        in mobile development.`}
      </p>
      <h2 className="mt-8 text-xl font-semibold tracking-tighter">
        Featured Posts
      </h2>
      <div className="my-8">
        <BlogPosts />
      </div>
      <h2 className="mt-8 text-xl font-semibold tracking-tighter">
        Recent Projects
      </h2>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
