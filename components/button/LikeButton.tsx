import { Button, IconButtonProps } from "@chakra-ui/react";
import * as React from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";

interface PropsType {
  isliked: number;
  likescount?: number;
}

export const LikeButton = (props: IconButtonProps & PropsType) => (
  <Button
    size={"sm"}
    variant="outline"
    leftIcon={props.isliked ? <BsHeartFill color="red" /> : <BsHeart />}
    {...props}
  >
    {props.likescount ?? 0}
  </Button>
);
