import Image from "next/image";
import type { TwitterComponents } from "react-tweet";
import { Tweet } from "react-tweet";

const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
};

export default function X({ id }: { id: string }) {
  return (
    <div className="flex w-full justify-center">
      <Tweet id={id} components={components} />
    </div>
  );
}