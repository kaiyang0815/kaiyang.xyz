declare module '*.mdx' {
  import { ReactNode } from 'react'
  
  export const frontmatter: {
    title: string
    date: string
    description: string
  }
  
  function MDXComponent(props: any): ReactNode
  export default MDXComponent
}
