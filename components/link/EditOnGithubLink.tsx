import { publicConfig } from "../../config/publicConfig";
import { Link } from "@chakra-ui/react";

export const EditOnGithubLink = ({
  permalink,
}: {
  permalink: string | undefined;
}) => (
  <Link
    href={`${publicConfig.GITHUB_CONTENT}/edit/main/${permalink}`}
    target={"_blank"}
  >
    Edit on Github
  </Link>
);
