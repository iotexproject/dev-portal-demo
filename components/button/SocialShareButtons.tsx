import { HStack, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { publicConfig } from "../../config/publicConfig";

export const SocialShareButtons = () => {
  const router = useRouter();

  const shareText =
    "Check out this blog post on the IoTeX Developer Portal:\n\r";
  const shareUrl = publicConfig.DEV_PORTAL_BASE_PATH + router.asPath;
  const shareRelated = "@iotex_dev";

  const twitterShareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(shareUrl)}&related=${encodeURIComponent(
    shareRelated
  )}`;

  const facebookShareHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <HStack>
      <Link href={twitterShareHref} isExternal>
        <BsTwitter />
      </Link>

      <Link href={facebookShareHref} isExternal>
        <FaFacebook />
      </Link>
    </HStack>
  );
};
