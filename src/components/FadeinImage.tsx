import type { ImageProps } from "next/image";
import Image from "next/image";

const FadeinImage = (props: ImageProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      fill
      priority
      sizes="100vw"
      className="transition-opacity opacity-0 duration-[1s]"
      onLoad={(e) => {
        const target = e.target as HTMLImageElement;
        target.classList.remove("opacity-0");
      }}
      {...props}
    />
  );
};

export default FadeinImage;
