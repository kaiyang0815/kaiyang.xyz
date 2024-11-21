import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Root, Element, Text, ElementContent, Properties } from "hast";

interface MdxJsxAttribute {
  type: "mdxJsxAttribute";
  name: string;
  value: string;
}

interface MdxJsxFlowElement {
  type: "mdxJsxFlowElement";
  name: string;
  tagName: string;
  properties: Properties;
  attributes: MdxJsxAttribute[];
  children: ElementContent[];
}

function extractTextContent(node: Element): string {
  let text = '';
  let isFirst = true;
  
  for (const child of node.children) {
    // 除了第一行外，每个子节点前添加换行符
    if (!isFirst) {
      text += '\n';
    }
    isFirst = false;

    if (child.type === 'text') {
      text += (child as Text).value;
    } else if (child.type === 'element') {
      text += extractTextContent(child as Element);
    }
  }
  
  return text;
}

export const rehypeCopyButton: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "pre") {
        const [codeEl] = node.children as Element[];

        if (codeEl.type !== "element" || codeEl.tagName !== "code") {
          return;
        }

        // 递归提取所有文本内容，保持换行
        const textContent = extractTextContent(codeEl);

        const copyButton: MdxJsxFlowElement = {
          type: "mdxJsxFlowElement",
          name: "CopyButton",
          tagName: "CopyButton",
          properties: {},
          attributes: [
            {
              type: "mdxJsxAttribute",
              name: "value",
              value: textContent,
            },
          ],
          children: [],
        };

        node.children.unshift(copyButton as unknown as ElementContent);
      }
    });
  };
};
