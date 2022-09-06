import {
  Box,
  Container,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import { SocialIcons } from "../../components/icon/SocialIcons";
import { publicConfig } from "../../config/publicConfig";

import footerLinks from "./footerLinks";

export const Footer = () => (
  <Box>
    <Container
      as="footer"
      role="contentinfo"
      maxW={"full"}
      px={{ base: 3, lg: 6 }}
    >
      <ColumnsWithLinks />
      <Divider />
      <LogoAndSocial />
    </Container>
  </Box>
);

const ColumnsWithLinks = () => (
  <SimpleGrid
    py={{ base: "12", md: "16" }}
    columns={{ base: 2, md: 4 }}
    gap="8"
    width={{ base: "full", lg: "auto" }}
  >
    {footerLinks.map((group, idx) => (
      <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
        <Text variant="body3-subtle" textTransform={"uppercase"}>
          {group.title}
        </Text>
        <Stack spacing="3" shouldWrapChildren>
          {group.links.map((link, idx) => (
            <FooterLink key={idx} href={link.href} label={link.label} />
          ))}
        </Stack>
      </Stack>
    ))}
  </SimpleGrid>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} isExternal aria-label={`link-to-${label}`}>
    <Text variant="body4-medium" _hover={{ cursor: "pointer" }}>
      {label}
    </Text>
  </Link>
);

const LogoAndSocial = () => (
  <Stack
    pb="12"
    pt="8"
    justify="space-between"
    direction={{ base: "column", md: "row" }}
    align={{ base: "start", md: "center" }}
  >
    <Stack
      align={{ base: "center", md: "center" }}
      justify={["start", "space-between"]}
      width={"full"}
      spacing="8px"
      direction={["column", "row"]}
    >
      <SocialIcons />
      <EmailLink />
    </Stack>
    <HStack w="full" justify={["center", "end"]}>
      <Text variant="body4-medium">
        &copy; {new Date().getFullYear()} IoTeX
      </Text>
      <FooterLink
        href={publicConfig.TERMS_OF_USE}
        label="Terms of Use & Privacy Policy"
      />
    </HStack>
  </Stack>
);

const EmailLink = () => (
  <Text variant="body4-medium">
    <Link
      href={`mailto:${publicConfig.DEVS_EMAIL}`}
      _hover={{ color: "brand.500" }}
    >
      {publicConfig.DEVS_EMAIL}
    </Link>
  </Text>
);
