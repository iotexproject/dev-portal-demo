import { Stack, StackDivider, Heading, Flex, Box } from "@chakra-ui/react";
import { LikeButton } from "../../../components/button/LikeButton";
import { SocialShareButtons } from "../../../components/button/SocialShareButtons";
import { EditOnGithubLink } from "../../../components/link/EditOnGithubLink";
import { Post } from "../../../types";

interface PropsType {
  post: Post;
  isTippingEnabled: boolean;
}

export const PostSidebar = ({ post, isTippingEnabled }: PropsType) => (
  <Stack
    pl={4}
    spacing={4}
    divider={<StackDivider />}
    maxH={"96vh"}
    overflowY={"scroll"}
    position={"sticky"}
    top={4}
    sx={{
      "&::-webkit-scrollbar": {
        width: 0,
      },
    }}
  >
    <Box>
      <LikeButton aria-label="like button" isliked={1}/>
    </Box>

    <Flex direction={"column"} justify={"space-between"} gap={2}>
      <Heading textTransform={"uppercase"} variant="h5-medium-muted">
        SHARE
      </Heading>

      <SocialShareButtons />
    </Flex>

    <EditOnGithubLink permalink={post?.permalink} />
  </Stack>
);
