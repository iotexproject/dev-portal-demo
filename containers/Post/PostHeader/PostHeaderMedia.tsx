import { AspectRatioProps } from "@chakra-ui/react";
import { constructImgSrc } from "../../../lib/academy";
import { Post } from "../../../types";
import { PostHeaderImg } from "./PostHeaderImg";
import { PostHeaderVideo } from "./PostHeaderVideo";

interface PropsType {
  post: Post;
  poster_quality?:
    | "default"
    | "mqdefault"
    | "hqdefault"
    | "sddefault"
    | "maxresdefault";
}

export const PostHeaderMedia = (props: PropsType & AspectRatioProps) => {
  const { post } = props;

  if (post.videoUrl) {
    return (
      <PostHeaderVideo
        videosrc={post.videoUrl}
        title={post.title ?? ""}
        {...props}
      />
    );
  }

  if (post.headerImg?.id) {
    return (
      <PostHeaderImg
        imgsrc={constructImgSrc(post.headerImg.id, post.headerImg.extension)}
        {...props}
      />
    );
  }

  return <></>;
};
