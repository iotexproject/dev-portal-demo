import { AspectRatio, AspectRatioProps } from "@chakra-ui/react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface PropsType {
  videosrc: string;
  title: string;
  poster_quality?:
    | "default"
    | "mqdefault"
    | "hqdefault"
    | "sddefault"
    | "maxresdefault";
}

export const PostHeaderVideo = (props: PropsType & AspectRatioProps) => {
  return (
    <AspectRatio
      ratio={21 / 9}
      borderRadius={"0px"}
      overflow={"hidden"}
      {...props}
    >
      <LiteYouTubeEmbed
        id={props.videosrc}
        adNetwork={false}
        title={props.title}
        poster={props.poster_quality ?? "hqdefault"}
        webp={true}
      />
    </AspectRatio>
  );
};
