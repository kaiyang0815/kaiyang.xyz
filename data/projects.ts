export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Personal Blog",
    description:
      "A modern blog built with Next.js 14, MDX, and TailwindCSS. Features dark mode, responsive design, and smooth animations.",
    image: "/images/blog/article1.avif",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "MDX"],
    github: "https://github.com/kaiyang-code/blog",
    demo: "https://kaiyang.xyz",
  },
  // Add your other projects here
];
