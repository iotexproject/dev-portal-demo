import { Button, ButtonProps, Link, LinkProps } from "@chakra-ui/react";

interface PropsType {
  linkProps?: LinkProps;
  buttonProps?: ButtonProps;
  label: string;
}

export const LinkButton = (props: PropsType) => (
  <Link isExternal _hover={{ "textDecoration": "none" }} {...props.linkProps}>
    <Button w={"full"} {...props.buttonProps}>
      {props.label}
    </Button>
  </Link>
);
