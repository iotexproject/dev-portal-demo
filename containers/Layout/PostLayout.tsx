import { Box, Container, Divider, Flex } from "@chakra-ui/react";
import { Post } from "../../types";
import { PostBody } from "../Post/PostBody";
import { PostSidebar } from "../Post/PostSidebar/PostSidebar";

interface PropsType {
    children: React.ReactNode;
    post: Post;
    isTippingEnabled?: boolean;
}

export const PostLayout = ({ post, children, isTippingEnabled }: PropsType) => (
  <Container maxWidth={"full"} pt="32">
    <>{children}</>

    <Divider mt={22} mb={30} />

    <Flex gap={6} flexDirection={["column", "column", "row"]}>
      <Box flex={1} minWidth="306px">
        <PostSidebar post={post} isTippingEnabled={!!isTippingEnabled} />
      </Box>
      <Box flex={3} maxWidth={["100%", "100%", "calc(100% - 330px)"]}>
        <PostBody post={post} />
      </Box>
    </Flex>
    <Divider my={8} />
  </Container>
);
