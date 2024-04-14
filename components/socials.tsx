import Magnets from "./magnets";
import Image from "next/image";
import Twitter from "@/assets/x.svg";
import Instagram from "@/assets/instagram.svg";
import Dribbble from "@/assets/dribbble.svg";
import Linkedin from "@/assets/linkedin.svg";

const reseaux: {
  src: any;
  href: string;
}[] = [
  { src: Twitter, href: "/" },
  { src: Instagram, href: "/" },
  { src: Dribbble, href: "/" },
  { src: Linkedin, href: "/" },
  { src: Twitter, href: "/" },
  { src: Instagram, href: "/" },
];

export default function Socials() {
  return (
    <ul className="flex gap-5 justify-center items-center flex-wrap max-w-96">
      {reseaux.map((reseau, i) => (
        <Magnets direction={reseau.href} key={i}>
          <Image src={reseau.src} alt={"hello"} />
        </Magnets>
      ))}
    </ul>
  );
}
