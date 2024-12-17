import { formatDate } from "@/lib/format-date";
import { writeFileSync } from "fs";
import { join } from "path";

function syncWriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */

  writeFileSync(join(__dirname, filename), data, {
    flag: "w",
  });

  //   const contents = readFileSync(join(__dirname, filename), "utf-8");
  //   console.log(contents); // 👉️ "One Two Three Four"

  //   return contents;
}

const fillName = process.argv.slice(2, 3);
const title = process.argv.slice(3);
const desc = "";
const draft = "true";
const date = new Date().toLocaleDateString();

const metadata = `---
title: "${title}"
description: "${desc}"
draft: ${draft}
publishDate: ${formatDate(date)}
---
`;
console.log(metadata);
syncWriteFile("../public/posts/" + fillName + ".mdx", metadata);
