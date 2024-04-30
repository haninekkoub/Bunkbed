import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import DefaultImage from "@/public/defaultImage.png";
import { cn } from "@/lib/utils";

interface Props {
  image: "image";
  alt: string;
  className?: string;
}
export default function Images({ image, alt, className }: Props) {
  const getUrl = (currentimage: "image") =>
    currentimage ? urlFor(currentimage).url() : DefaultImage;

  const imageUrl = getUrl(image);
  return (
    <Image
      src={imageUrl}
      height={500}
      width={500}
      alt={alt}
      className={cn(
        "object-cover object-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
    />
  );
}
