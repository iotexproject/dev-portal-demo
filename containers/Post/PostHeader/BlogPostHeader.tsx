import { Box, Text, Heading } from "@chakra-ui/react";
import { Post } from "../../../types";
import { PostHeaderMedia } from "./PostHeaderMedia";
import { PostInfo } from "./PostInfo";

interface PropsType {
  post: Post;
}
export const BlogPostHeader = ({ post }: PropsType) => (
  <Box>
    <PostTitle post={post} />

    <Box my={6}>
      <PostHeaderMedia post={post} />
    </Box>

    <Box marginInline="auto" maxWidth="95%" paddingInline="1rem">
      <PostDescription post={post} />
    </Box>

    <PostInfo post={post} />
  </Box>
);

const PostTitle = ({ post }: PropsType) => (
  <Heading fontWeight="bold" maxWidth={"80%"} marginInline="auto">
    {post?.title}
  </Heading>
);

const PostDescription = ({ post }: PropsType) => (
  <Text fontSize="lg" fontWeight="medium" my={8}>
    {post.description}
  </Text>
);
