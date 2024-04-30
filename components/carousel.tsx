import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import image1 from "./assets/img-1.jpg";
import image2 from "./assets/img-2.jpg";
import image3 from "./assets/img-3.jpg";

const images = [
  { src: image1, id: 1, name: "image1" },
  { src: image2, id: 2, name: "image2" },
  { src: image3, id: 3, name: "image3" },
];

type PropType = {
  options?: EmblaOptionsType;
};
const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);
export default function EmblaCarousel(props: PropType) {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".slide") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const tweengrayValue =
            1 - Math.abs(diffToTarget * (tweenFactor.current + 3));
          const scale = numberWithinRange(tweenValue, 0.85, 1).toString();
          const grayscale = numberWithinRange(tweengrayValue, 0, 1);
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
          // emblaApi.slideNodes()[
          //   slideIndex
          // ].style.filter = `grayscale(calc(1 - ${grayscale} ))`;
          tweenNode.style.filter = `grayscale(calc(1 - ${grayscale} ))`;
        });
      });
    },
    []
  );
  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale);
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor]);
  return (
    <section className="embla mx-auto min-w-full flex items-center">
      <div className="overflow-hidden h-[80%] w-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y ">
          {images.map(({ id, src }) => (
            <div
              key={id}
              className="flex-grow-0 flex-shrink-0 w-[70%] md:w-[60%] min-w-0 relative hover:cursor-pointer"
            >
              <Image
                src={src}
                alt={"project"}
                height={500}
                width={500}
                className="slide  w-full h-full object-cover rounded-2xl "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
