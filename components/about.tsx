import Logo from "@/assets/largelogo.svg";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative w-[60vw] my-28 mx-auto">
      <p className="text-4xl font-medium font-Outreque text-center leading-[3.5rem] py-12">
        At Bunkbed, we're a passionate team of web design specialists obsessed
        with creating stunning and functional websites that drive results. We
        believe your website is more than just an online brochure; it's a
        powerful conversion tool that reflects your brand and connects with your
        audience.
      </p>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full -z-10 opacity-50 w-full">
        <Image src={Logo} alt={"logo"} className="h-full w-full" />
      </div>
    </section>
  );
}
