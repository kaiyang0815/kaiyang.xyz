import X from "@/components/mdx/X";
import YouTube from "@/components/mdx/YouTube";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  YouTube,
  X,
  h2: ({ children }: { children: React.ReactNode }) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, "-");
    return (
      <h2 id={id}>
        <a href={`#${id}`} className="no-underline">
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ children }: { children: React.ReactNode }) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, "-");
    return (
      <h3 id={id}>
        <a href={`#${id}`} className="no-underline">
          {children}
        </a>
      </h3>
    );
  },
  h4: ({ children }: { children: React.ReactNode }) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, "-");
    return (
      <h4 id={id}>
        <a href={`#${id}`} className="no-underline">
          {children}
        </a>
      </h4>
    );
  },
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components }}
      options={props.options}
    />
  );
}
