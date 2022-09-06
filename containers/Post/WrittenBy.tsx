import {
  Avatar,
  Box,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { User } from "../../types";

interface PropsType {
  user: User;
}

export const WrittenBy = ({ user }: PropsType) => (
  <LinkBox>
    <Link href={`/user/${user.githubHandle}`} passHref>
      <LinkOverlay />
    </Link>
    <HStack align={"center"}>
      <Box>
        <Avatar
          size={"lg"}
          sx={{ width: 12, height: 12 }}
          name={user.name}
          src={user.githubAvatar}
        />
      </Box>
      <Text variant="body2-medium">
        Written by <b>{user.name}</b>
      </Text>
    </HStack>
  </LinkBox>
);
