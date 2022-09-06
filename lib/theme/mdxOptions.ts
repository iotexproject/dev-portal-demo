import rehypeVideo from "rehype-video";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import toc from "@jsdevtools/rehype-toc";

const codeHighlightOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  onVisitLine(node: any) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

const setMdxOptions = (options: any) => {
  options.remarkPlugins = [...(options.remarkPlugins ?? []), [remarkGfm]];
  options.rehypePlugins = [
    ...(options.rehypePlugins ?? []),
    [rehypeSlug],
    [toc, { headings: ["h1", "h2", "h3"] }],
    [rehypeVideo],
    [rehypePrettyCode, codeHighlightOptions],
  ];

  return options;
};

export default setMdxOptions;
