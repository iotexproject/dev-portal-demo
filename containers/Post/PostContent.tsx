import { Post } from "../../types";
import { useColorMode } from "@chakra-ui/react";
import "react-photo-view/dist/react-photo-view.css";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import mdxComponents, { postContentPre } from "./mdxComponents";

interface PropsType {
  post: Post;
}

export const PostContent = ({ post }: PropsType) => {
  const { colorMode } = useColorMode();
  const { content } = post;

  const Content = useMemo(() => getMDXComponent(content.code), [content.code]);
  return (
    <Content
      components={{
        ...mdxComponents,
        pre: (props) => {
          return postContentPre(props, colorMode);
        },
      }}
    />
  );
};
