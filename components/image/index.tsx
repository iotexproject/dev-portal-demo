import Image from "next/image";
import { rgbDataURL } from "../../lib/rgbDataURL";

// Images that are stored externally (e.g. on Imgix)
export const DynamicImage = ({ src, alt }: { src: string; alt: string }) => (
  <ImageWithoutLoader src={src} alt={alt} />
);

const ImageWithoutLoader = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    layout={"fill"}
    objectFit={"cover"}
    priority={false}
    placeholder={"blur"}
    blurDataURL={rgbDataURL(235, 249, 248)}
  />
);
