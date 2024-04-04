"use client";
import EmblaCarousel from "./carousel";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./test";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Projects() {
  return (
    <section className="w-full h-[650px] relative">
      <div className=" h-full w-[100vw] flex z-20  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <EmblaCarousel options={OPTIONS} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full gradien rounded-2xl p-[2px] z-10">
        <div className="rounded-[14px] bg-white h-full  flex w-full"></div>
      </div>
    </section>
  );
}
