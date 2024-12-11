"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function GiscusComments() {
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="kaiyang0815/kaiyang.xyz"
      repoId="R_kgDOM7z0sw"
      category="Announcements"
      categoryId="DIC_kwDOM7z0s84CkxT1"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
}
