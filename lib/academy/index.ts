import { publicConfig } from "../../config/publicConfig";

export const getPostRawContent = async (
  permalink: string
): Promise<string | null> => {
  if (!permalink) {
    return null;
  }

  return getContentFromGithub(permalink);
};

const getContentFromGithub = async (
  permalink: string
): Promise<string | null> => {
  const contentRequestUrl = `${publicConfig.GITHUB_CONTENT_REQUEST_URL}${permalink}`;

  try {
    const fetchFileResponse = await fetch(contentRequestUrl, {
      headers: {
        Accept: "application/vnd.github.v3.raw",
        Authorization: `token ${publicConfig.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });

    if (fetchFileResponse.status !== 200) {
      return null;
    }

    return await fetchFileResponse.text();
  } catch (e) {
    console.log(e);
  }

  return null;
};

export const constructImgSrc = (imgId?: string, imgExtension?: string) => {
  if (!imgId || !imgExtension) {
    return "";
  }
  const imgSrc = addImgBasePath(`/images/${imgId}.${imgExtension}`);

  return imgSrc;
};

const addImgBasePath = (src: string): string => {
  return notProduction() ? publicConfig.IMG_BASE_PATH + src : src;
};

const notProduction = (): boolean => process.env.NODE_ENV !== "production";
