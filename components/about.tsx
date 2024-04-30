"use client";

import { AboutBlock } from "@/lib/types";
import { InlineSvgPreviewComponent } from "@focus-reactive/sanity-plugin-inline-svg-input";

export default function About({ aboutDescription, icon }: AboutBlock) {
  return (
    <section className="relative sm:w-2/3 my-24 mx-auto">
      <p className="text-base sm:text-2xl xl:text-4xl font-medium font-Outreque text-center sm:leading-[3rem] xl:leading-[3.5rem] sm:py-12 ">
        {aboutDescription}
      </p>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full -z-10 opacity-50 w-full">
        {/* <InlineSvgPreviewComponent value={icon} className="w-full h-full" /> */}
      </div>
    </section>
  );
}
