import Link from "next/link";
import React from "react";
import Socials from "./socials";
import Ctabutton from "./ctabutton";

export default function Footer() {
  return (
    <section className="h-[85vh] min-h-fit w-[100vw] sticky bottom-0 bg-black font-SfPro text-white pt-14 pb-10 px-[8vw] flex flex-col justify-between items-center">
      <h2 className="text-6xl w-[70vw] max-w-[1024px] text-center">
        Ready to Ditch Your Dated Website? Build a Conversion Machine.
        <span className="gradienText"> Let's Talk. </span>
      </h2>
      <Ctabutton />
      <Socials />
      <div className="font-SfPro flex justify-between items-center w-full">
        <span className="flex justify-start items-center gap-16 uppercase">
          <Link href={"/"}>Terms & Policy</Link>
          <Link href={"/"}>Cookies Policy</Link>
        </span>
        <p className="uppercase">
          Bunkbed <span className="gradienText">©</span> 2024
        </p>
      </div>
    </section>
  );
}
