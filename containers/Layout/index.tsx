import { Box, Container, Flex } from "@chakra-ui/react";
import { Footer } from "../Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      p={0}
      maxW={"container.xl"}
      bg={"bg-body"}
      position={"relative"}
      boxShadow="base"
    >
      <Flex direction={"column"} minH={"92vh"}>
        <Box flex={1}>
          <main>{children}</main>
        </Box>
        <Footer />
      </Flex>
    </Container>
  );
};
