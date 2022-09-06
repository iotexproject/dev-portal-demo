import {
  Heading,
  Text,
  Image,
  OrderedList,
  UnorderedList,
  ListItem,
  Link,
  chakra,
  Code,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const hasColorModeConflict = (colorMode?: string, theme?: string) => {
  return (
    !colorMode ||
    (colorMode === "light" && theme === "dark") ||
    (colorMode === "dark" && theme === "light")
  );
};

const h1 = ({ children, id }: { children?: React.ReactNode; id?: string }) => (
  <Heading id={id} variant={"h3-bold"}>
    {children}
  </Heading>
);

const h2 = ({ children, id }: { children?: React.ReactNode; id?: string }) => (
  <Heading id={id} variant={"h4-bold"}>
    {children}
  </Heading>
);

const h3 = ({ children, id }: { children?: React.ReactNode; id?: string }) => (
  <Heading id={id} variant={"h5-medium"}>
    {children}
  </Heading>
);
const h4 = ({ children }: { children?: React.ReactNode }) => (
  <Text variant="body2" py={"1rem"}>
    {children}
  </Text>
);
const h5 = ({ children }: { children?: React.ReactNode }) => (
  <Text variant="body3" py={"1rem"}>
    {children}
  </Text>
);
const h6 = ({ children }: { children?: React.ReactNode }) => (
  <Text variant="body4" py={"1rem"}>
    {children}
  </Text>
);

const p = ({ children }: { children?: React.ReactNode }) => (
  <Text variant="body2-medium" my={5}>
    {children}
  </Text>
);

const img = ({ src, alt }: { src?: string; alt?: string }) => (
  <PhotoProvider>
    <PhotoView src={src}>
      <Image
        src={src}
        alt={alt}
        objectFit={"cover"}
        placeholder={"blur"}
        _hover={{ cursor: "pointer" }}
      />
    </PhotoView>
  </PhotoProvider>
);

const ol = ({ children }: { children?: React.ReactNode }) => (
  <OrderedList marginBottom={5} pl={{ base: 0, lg: 4 }}>
    {children}
  </OrderedList>
);

const ul = ({ children }: { children?: React.ReactNode }) => (
  <UnorderedList marginBottom={5} pl={{ base: 0, lg: 4 }}>
    {children}
  </UnorderedList>
);

const li = ({ children }: { children?: React.ReactNode }) => (
  <ListItem>{children}</ListItem>
);

const a = ({
  children,
  href,
}: {
  children?: React.ReactNode;
  href?: string;
}) => (
  <Link
    href={href || ""}
    textDecoration={"underline"}
    _hover={{ color: "brand.500" }}
  >
    {children}
  </Link>
);

export const postContentPre = (
  preProps: {
    "data-language"?: string;
    "data-theme"?: string;
    children?: React.ReactNode;
  },
  colorMode?: string
) => {
  if (hasColorModeConflict(colorMode, preProps["data-theme"])) {
    return null;
  }
  return (
    <chakra.pre
      style={{
        backgroundColor:
          colorMode === "dark"
            ? "rgba(17, 15, 28, 0.5)"
            : "rgba(17, 15, 28, 0.1)",
        borderRadius: "0.25rem",
        padding: "1rem",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
      overflowX={"auto"}
    >
      {preProps.children}
    </chakra.pre>
  );
};

const code = (codeProps: {
  "data-language"?: string;
  "data-theme"?: string;
  children?: React.ReactNode;
}) => {
  // inline code
  if (!codeProps["data-theme"]) {
    return <Code variant={"outline"}>{codeProps.children}</Code>;
  }
  // code block
  return <chakra.code display={"grid"}>{codeProps.children}</chakra.code>;
};

const nav = (navProps: any) => {
  return (
    <Accordion allowToggle>
      <AccordionItem borderTop={0}>
        <AccordionButton p={0}>
          <Box flex="1" textAlign="left">
            <Heading variant={"h4-medium-muted"}>Table of Contents</Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel color={"muted"} pb={4}>
          {navProps.children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img,
  ol,
  ul,
  li,
  a,
  code,
  nav,
};

export default components;
