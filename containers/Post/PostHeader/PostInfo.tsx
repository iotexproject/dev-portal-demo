import { Container, HStack, Stack } from "@chakra-ui/react";
import { BookmarkButton } from "../../../components/button/BookmarkButton";
import { Post } from "../../../types";
import { PostTime } from "../PostTime";
import { WrittenBy } from "../WrittenBy";

interface PropsType {
  post: Post;
  withBookmark?: boolean;
}

export const PostInfo = ({ post, withBookmark }: PropsType) => (
  <Container maxWidth={"95%"}>
    <Stack
      justify={"space-between"}
      spacing={{ base: 2, lg: 8 }}
      direction={["column", "row"]}
      align={{ base: "left", lg: "center" }}
    >
      {post.author && <WrittenBy user={post.author} />}

      <HStack justifyContent={["space-between", "unset"]}>
        <Stack
          spacing={{ base: 2, lg: 4 }}
          direction={{ base: "column", lg: "row" }}
          align={{ base: "left", lg: "center" }}
        >
          <PostTime.Published timestamp={post.createdAt} />
          <PostTime.Updated timestamp={post.updatedAt} />
        </Stack>
        {withBookmark && (
          <BookmarkButton aria-label="bookmark button" isbookmarked={1} />
        )}
      </HStack>
    </Stack>
  </Container>
);
