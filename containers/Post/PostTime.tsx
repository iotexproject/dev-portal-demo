import { Box, Text } from "@chakra-ui/react";
import { timeCalendar } from "../../lib/time";

interface PropsType {
  timestamp: string;
  variant?: string;
}

const PostTimePublished = ({ timestamp, variant }: PropsType) => (
  <Box>
    <Text variant={variant || "body2-medium-muted"}>
      <b>{timeCalendar(timestamp)}</b>
    </Text>
  </Box>
);

const PostTimeUpdated = ({ timestamp, variant }: PropsType) => (
  <Box>
    <Text variant={variant || "body2-medium-muted"}>
      Updated: <b>{timeCalendar(timestamp)}</b>
    </Text>
  </Box>
);

export const PostTime = {
  Published: PostTimePublished,
  Updated: PostTimeUpdated,
};
