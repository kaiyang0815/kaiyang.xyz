export interface Post {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    draft: boolean;
    publishDate: string;
  };
}
