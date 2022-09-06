import { StyleFunctionProps } from "@chakra-ui/react";

const baseStyle = {
  ":focus:not(:focus-visible)": {
    boxShadow: "none",
  },
  fontWeight: "semibold",
};

const primaryBase = {
  bg: "primary-linear",
  color: "black",
  fontSize: "1rem",
  borderRadius: "6px",
  _hover: { bg: "primary-linear", opacity: ".8" },
  _active: { bg: "btn-gray-gradient" },
};

const variants = {
  solid: () => ({
    fontWeight: "semibold",
    color: "black",
  }),
  primary: () => ({
    ...primaryBase,
  }),
  "primary-bold": () => ({
    ...primaryBase,
    fontWeight: "bold",
    padding: 6,
  }),
  secondary: () => ({
    color: "brand.200",
    fontSize: "0.875rem",
    textShadow: "0px 0px 20px  #48ebbd",
    _hover: { textShadow: "0px 0px 60px 0px #48ebbd", color: "brand.100" },
    _active: {
      color: `gray.100`,
    },
  }),
  "primary-grey": () => ({
    bg: "brand-dark-gradient-20",
    color: "primary",
    fontWeight: "bold",
    fontSize: "1.125rem",
    _hover: { bg: "primary-linear", opacity: ".8", color: "black" },
    _active: { bg: "btn-gray-gradient" },
  }),
  outline: () => ({
    borderWidth: "1px",
    bg: "",
    color: "gray",
    borderRadius: "6px",
  }),

  ghost: (props: StyleFunctionProps) => ({
    color: "subtle",
    bg: "bg-surface",
    borderRadius: "6px",
    boxShadow: "base",
  }),
  link: (props: StyleFunctionProps) => ({
    color: "brand.200",
    _hover: {
      color: `brand.100`,
      "textDecoration": "none",
    },
    _active: {
      color: `gray.100`,
    },
  }),
  navlink: () => ({
    padding: 0,
    fontSize: "1rem",
    fontWeight: "semibold",
    _hover: {
      color: "primary",
    },
    _active: {
      color: "primary",
    },
  }),
};

const button = {
  baseStyle,
  variants,
};

export default button;
