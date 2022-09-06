import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React from "react";
import { theme } from "./lib/theme";

interface ChakraProps {
  cookies: string | undefined;
}

export const Chakra = ({
  cookies,
  children,
}: ChakraProps & { children: React.ReactNode }) => {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
};
