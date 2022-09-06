import { Box, Text, Heading, Container, Stack } from "@chakra-ui/react";
import { Post } from "../../../types";
import { DifficultyBadge } from "../../../components/badge/DifficultyBadge";
import { TopicStack } from "../../Topic/TopicStack";
import { PostHeaderMedia } from "./PostHeaderMedia";
import { PostInfo } from "./PostInfo";

interface PropsType {
  post: Post;
}
export const PostHeader = ({ post }: PropsType) => (
  <Box>
    <Container maxWidth={["100%", "90%", "80%"]} margin={{}}>
      {post.topics && <TopicStack topics={post.topics} />}
      <Stack
        mt={post.type === "academy" ? 4 : 0}
        alignItems="flex-start"
        direction={["column", "column", "row"]}
      >
        {post.type === "academy" && post.difficulty && (
          <DifficultyBadge
            difficulty={post.difficulty}
            style={{ position: "relative", top: "0.4rem" }}
          />
        )}
        <PostTitle post={post} />
      </Stack>
      <PostDescription post={post} />
    </Container>

    <Box my={5}>
      <PostHeaderMedia post={post} poster_quality={"maxresdefault"} />
    </Box>

    <PostInfo post={post} withBookmark={false} />
  </Box>
);

const PostTitle = ({ post }: PropsType) => (
  <Heading variant={"h2-bold"}>{post?.title}</Heading>
);

const PostDescription = ({ post }: PropsType) => (
  <Text variant="body1-medium-muted" py={2}>
    {post.description}
  </Text>
);
