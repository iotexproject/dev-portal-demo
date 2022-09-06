import { Badge, HStack } from "@chakra-ui/react";
import { Topic } from "../../types";

interface PropsType {
  topics: Array<Topic>;
}

export const TopicStack = ({ topics }: PropsType) => (
  <HStack>
    {topics?.map((topic) => (
      <Badge variant={"outline"} key={topic.key}>
        {topic.name}
      </Badge>
    ))}
  </HStack>
);
