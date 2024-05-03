"use client";
import { ProjectList } from "@/lib/types";
import EmblaCarousel from "./carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function Projects({ projects }: ProjectList) {
  return (
    <section className="w-full h-[500px] md:h-[650px] relative my-20">
      <div className=" h-full w-[100vw]  max-w-[1440px] flex z-20  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <EmblaCarousel options={OPTIONS} projects={projects} />
        <div className="w-[8%] md:w-[10%] h-full gradienopacity absolute top-0 left-0"></div>
        <div className="w-[8%] md:w-[10%] h-full gradienopacity absolute top-0 right-0 rotate-180"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full gradien rounded-2xl p-[2px] z-10">
        <div className="rounded-[14px] bg-white h-full  flex w-full"></div>
      </div>
    </section>
  );
}
