import { Badge, Box, BoxProps } from "@chakra-ui/react";

interface PropsType {
  difficulty: string;
  style?: BoxProps;
}

export const DifficultyBadge = ({ difficulty, style }: PropsType) => (
  <Box {...style}>
    <Badge size={"sm"} colorScheme={getBadgeColor(difficulty)}>
      {difficulty}
    </Badge>
  </Box>
);

const getBadgeColor = (difficulty: string) => {
  switch (difficulty) {
    case "beginner":
      return "green-light";
    case "intermediate":
      return "orange";
    case "advanced":
      return "red";
    default:
      return "gray-light";
  }
};
