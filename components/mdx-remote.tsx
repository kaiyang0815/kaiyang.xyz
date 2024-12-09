import X from "@/components/mdx/X";
import YouTube from "@/components/mdx/YouTube";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  YouTube,
  X,
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
