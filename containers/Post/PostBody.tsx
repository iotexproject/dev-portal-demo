import { Box, Heading } from "@chakra-ui/react";
import { Post } from "../../types";
import * as React from "react";
import { PostContent } from "./PostContent";

interface PropsType {
  post: Post;
}

export const PostBody = ({ post }: PropsType) => (
  <Box bg="brand-dark-gradient" p={"1.5rem"} wordBreak="break-word">
    {!!post.content?.code ? (
      <PostContent post={post} />
    ) : (
      <Heading>Error fetching content</Heading>
    )}
  </Box>
);
