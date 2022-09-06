import { publicConfig } from "../../config/publicConfig";
import { PageMetaType } from "../../types";

const buildPageBaseMeta = (
  title: string,
  description: string,
  url: string
): PageMetaType[] => [
  {
    property: "description",
    content: description,
    key: "description",
  },
  {
    property: "og:url",
    content: url,
    key: "ogurl",
  },
  {
    property: "og:title",
    content: title,
    key: "ogtitle",
  },
  {
    property: "og:description",
    content: description,
    key: "ogdescription",
  },
  {
    property: "twitter:url",
    content: url,
    key: "twitterurl",
  },
  {
    property: "twitter:title",
    content: title,
    key: "twittertitle",
  },
  {
    property: "twitter:description",
    content: description,
    key: "twitterdescription",
  },
];

const pageMeta: { [key: string]: { title: string; description: string } } = {
  home: {
    title: "IoTeX Developer Portal",
    description:
      "Get started building MachineFi applications on the IoTeX blockchain. Power the Machine Economy.",
  },
  academy: {
    title: "IoTeX Academy",
    description:
      "Learn how to build on IoTeX, contribute with your original content, or support the content of other members of the community.",
  },
  blog: {
    title: "IoTeX Blog",
    description:
      "Browse through articles on the latest releases, news and updates from IoTeX, or contribute relevant content in your area of expertise.",
  },
};

const globalPageMeta: PageMetaType[] = [
  {
    property: "twitter:card",
    content: "summary_large_image",
    key: "twittercard",
  },
  {
    property: "twitter:domain",
    content: publicConfig.DEV_PORTAL_BASE_PATH,
    key: "twitterdomain",
  },
  {
    property: "og:image:width",
    content: "1200",
    key: "ogimagewidth",
  },
  {
    property: "og:image:height",
    content: "630",
    key: "ogimageheight",
  },
];

const ogWebsiteTypeMeta: PageMetaType[] = [
  {
    property: "og:type",
    content: "website",
    key: "ogtype",
  },
  {
    property: "twitter:image",
    content: publicConfig.BACKEND_URL + "/images/logo-beta.png",
    key: "twitterimage",
  },
  {
    property: "twitter:image:alt",
    content: "IoTeX Dev Portal Logo",
    key: "twitterimagealt",
  },
  {
    property: "og:image",
    content: publicConfig.BACKEND_URL + "/images/logo-beta.png",
    key: "ogimage",
  },
];

const pageMetaTags: { [key: string]: PageMetaType[] } = {
  home: [
    ...globalPageMeta,
    ...ogWebsiteTypeMeta,
    ...buildPageBaseMeta(
      pageMeta.home.title,
      pageMeta.home.description,
      publicConfig.DEV_PORTAL_BASE_PATH
    ),
  ],
  academyTopic: [...globalPageMeta, ...ogWebsiteTypeMeta],
  blogCategory: [...globalPageMeta, ...ogWebsiteTypeMeta],
  post: [
    ...globalPageMeta,
    {
      property: "og:type",
      content: "article",
      key: "ogtype",
    },
  ],
};

export { pageMeta, pageMetaTags, buildPageBaseMeta };
