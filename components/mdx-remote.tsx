import { MDXRemote } from "next-mdx-remote/rsc";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default function CustomMDX(props: any) {
  return <MDXRemote {...props} options={props.options} />;
}
