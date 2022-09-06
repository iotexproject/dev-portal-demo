import { GetStaticProps } from "next";
import { PageMetaType, Post } from "../../types";
import { PostHeader } from "../../containers/Post/PostHeader/AcademyPostHeader";
import { getPostRawContent } from "../../lib/academy/index";
import { buildPaths } from "../../lib/pages/helpers";
import { PostLayout } from "../../containers/Layout/PostLayout";
import { bundleMDX } from "mdx-bundler";
import setMdxOptions from "../../lib/theme/mdxOptions";
import { publicConfig } from "../../config/publicConfig";
import { buildPageBaseMeta, pageMetaTags } from "../../lib/pages/pageMeta";
import { posts, slugs } from "../../lib/_postList";

interface PropsType {
  post: Post;
}

const PostPage = ({ post }: PropsType) => (
  <>
    <PostLayout post={post} isTippingEnabled={true}>
      <PostHeader post={post} />
    </PostLayout>
  </>
);

export default PostPage;

export const getStaticPaths = async () => {
  const paths = buildPaths(slugs);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postRaw = posts[0];

  if (!postRaw) {
    throw new Error(`Failed to fetch post with slug:`);
  }

  const source = await getPostRawContent(postRaw?.permalink || "");

  if (!source) {
    throw new Error(
      `Failed to fetch content to post with slug: ${postRaw?.slug} and permalink: ${postRaw?.permalink}`
    );
  }

  const content = await getParsedContent(source);
  const post = { ...postRaw, content };
  const { title, meta } = buildPostMeta(post);

  return {
    props: {
      post,
      pageTitle: title,
      pageMeta: meta,
    },
    revalidate: 60 * 60 * 24,
  };
};

const buildPostMeta = (post: Post): { title: string; meta: PageMetaType[] } => {
  const title = post?.title ?? "";
  const description = post?.description ?? "";
  const url = publicConfig.DEV_PORTAL_BASE_PATH + "/posts/" + post?.slug;
  const imageSrc = `${publicConfig.BACKEND_URL}/images/${post?.headerImg?.id}.${post?.headerImg?.extension}`;

  const baseMeta = buildPageBaseMeta(title, description, url);

  const articleMeta = [
    {
      property: "og:article:published_time",
      content: post?.publishedAt ?? "",
      key: "ogarticlepublishedtime",
    },
    {
      property: "og:article:modified_time",
      content: post?.updatedAt ?? "",
      key: "ogarticlemodifiedtime",
    },
    {
      property: "og:article:author",
      content: post?.author?.name ?? "",
      key: "ogarticleauthor",
    },
    {
      property: "og:image",
      content: imageSrc,
      key: "ogimage",
    },

    {
      property: "twitter:image",
      content: imageSrc,
      key: "twitterimage",
    },
    {
      property: "twitter:image:alt",
      content: post?.title + "header image",
      key: "twitterimagealt",
    },
  ];

  return {
    title,
    meta: [...baseMeta, ...articleMeta, ...pageMetaTags.post],
  };
};

const getParsedContent = async (source: string): Promise<any> => {
  const content = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      options = setMdxOptions(options);
      return options;
    },
  });
  return content;
};
