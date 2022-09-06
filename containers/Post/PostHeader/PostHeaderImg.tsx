import { AspectRatio, AspectRatioProps } from "@chakra-ui/react";
import { DynamicImage } from "../../../components/image";

interface PropsType {
  imgsrc?: string;
}

export const PostHeaderImg = (props: PropsType & AspectRatioProps) => (
  <AspectRatio
    ratio={21 / 9}
    borderRadius={"0px"}
    overflow={"hidden"}
    {...props}
  >
    <DynamicImage src={props.imgsrc ?? ""} alt={"Post Header Image"} />
  </AspectRatio>
);
