import { Box, ButtonGroup, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { publicConfig } from "../../config/publicConfig";
import Image from "next/image";

export const SocialIcons = () => (
  <ButtonGroup>
    {icons.map((icon) => (
      <SocialIcon key={icon.label} icon={icon} />
    ))}
  </ButtonGroup>
);

const SocialIcon = ({
  icon,
}: {
  icon: { href: string; path: string; label: string };
}) => (
  <LinkBox>
    <LinkOverlay
      href={icon.href}
      aria-label={`${icon.label}-social-link`}
      isExternal
    />
    <Box _hover={{ cursor: "pointer" }}>
      <Image alt={icon.label} src={icon.path} width={24} height={24} />
    </Box>
  </LinkBox>
);

const icons: Array<{ label: string; href: string; path: string }> = [
  {
    label: "twitter",
    href: publicConfig.TWITTER_LINK,
    path: "/social/icon_twitter-1.svg",
  },
  {
    label: "discord",
    href: publicConfig.DISCORD_LINK,
    path: "/social/icon_discord-1.svg",
  },
  {
    label: "github",
    href: publicConfig.GITHUB_LINK,
    path: "/social/icon_gitHub-2.svg",
  },
  {
    label: "youtube",
    href: publicConfig.YOUTUBE_LINK,
    path: "/social/icon_youtube.svg",
  },
];
