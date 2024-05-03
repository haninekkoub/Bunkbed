import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";
import DefaultImage from "@/public/defaultImage.png";
import Image from "next/image";

interface Props {
  image: "image" | string;
  alt: string;
  className?: string;
}
export default function Images({ image, alt, className }: Props) {
  const getUrl = (currentimage: "image") =>
    currentimage ? urlFor(currentimage).url() : DefaultImage;
  const imageUrl = typeof image === "string" ? image : getUrl(image);
  return (
    <Image
      src={imageUrl}
      fill={true}
      alt={alt}
      priority={true}
      sizes="(max-width: 768px) 60%, 70%"
      className={cn("object-cover object-center", className)}
    />
  );
}
