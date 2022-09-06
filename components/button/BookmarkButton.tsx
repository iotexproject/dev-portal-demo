import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import * as React from "react";
import { BsBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";

interface PropsType {
  isbookmarked: number;
}

export const BookmarkButton = (props: IconButtonProps & PropsType) => (
  <IconButton
    boxShadow="none"
    variant={"unstyled"}
    sx={{ ":hover > svg": { transform: "scale(1.5)" } }}
    transition="all 0.15s ease"
    icon={
      <Icon
        as={props.isbookmarked ? BsBookmarkCheckFill : BsBookmarkPlus}
        transition="all 0.15s ease"
        textColor={props.isbookmarked ? "brand.400" : "gray.400"}
        fontSize={"1.5rem"}
      />
    }
    {...props}
  />
);
