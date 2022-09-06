import { Box, BoxProps, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../../types";

interface PropsType {
  posts: Post[];
}

export const RelatedContentList = (props: BoxProps & PropsType) => (
  <Box>
    {props.posts.map((post) => (
      <Box key={post.id}>
        <Link href={`/posts/${post.slug}`} passHref>
          <Text
            variant={"tocH2"}
            _hover={{ cursor: "pointer", "textDecoration": "underline" }}
          >
            {post.title}
          </Text>
        </Link>
      </Box>
    ))}
  </Box>
);
