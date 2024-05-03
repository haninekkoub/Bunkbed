"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Service, ServiceList } from "@/lib/types";
import { urlFor } from "@/lib/sanity";
import DefaultImage from "@/public/defaultImage.png";

const getImageUrl = (service: Service) => {
  const current = service.image;
  return current ? urlFor(current).url() : DefaultImage;
};

export default function ServiceComponent({ services }: ServiceList) {
  const [hoveredItemId, setHoveredItemId] = useState(services?.[0].id);
  const [hovered, setHovered] = useState(false);
  const [lastHoveredItemImage, setLastHoveredItemImage] = useState(
    getImageUrl(services[0])
  );
  const [currentImage, setCurrentImage] = useState(getImageUrl(services[0]));
  const circleRef = useRef<SVGCircleElement>(null);

  const handleMouseEnter = (id: React.SetStateAction<number>) => {
    setLastHoveredItemImage(currentImage);

    setTimeout(() => {
      setHoveredItemId(id);
      setHovered(true);

      const service = services?.find((service) => service.id === id);
      if (service) {
        const imageUrl = getImageUrl(service);
        setCurrentImage(imageUrl);
      }

      if (circleRef.current) {
        let currentRadius = circleRef.current.getAttribute("r");
        let targetRadius = 800;
        let increment = 10;
        if (currentRadius !== null) {
          // Null check
          let radiusNumber = parseInt(currentRadius);

          let interval = setInterval(() => {
            if (radiusNumber < targetRadius) {
              radiusNumber += increment;
              circleRef.current?.setAttribute("r", radiusNumber.toString());
            } else {
              clearInterval(interval);
            }
          }, 10);
        }
      }
    }, 100);
  };

  const resetRadius = (id: number) => {
    if (id === hoveredItemId) {
      return;
    }
    setTimeout(() => {
      if (circleRef.current) {
        circleRef.current.setAttribute("r", "0");
      }
    }, 100);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-0  justify-between items-center w-full my-20 ">
      <div className="w-full md:w-1/2 cursor-pointer flex flex-col gap-8 items-start">
        {services?.map((service: Service) => {
          return (
            <div
              className={`w-full flex flex-col gap-4 md:gap-6 transition-all duration-300 ease-in-out
              ${
                (hovered && hoveredItemId === service.id) ||
                (hoveredItemId === services?.[0].id &&
                  service.id === services?.[0].id)
                  ? "opacity-100"
                  : "opacity-50"
              }
              `}
              key={service.id}
              onMouseEnter={() => {
                resetRadius(service.id); // Reset radius before changing item
                handleMouseEnter(service.id);
              }}
            >
              <h4 className=" font-Outreque text-xl md:text-2xl font-medium">
                {service.name}
              </h4>
              <div
                className={`font-SfPro font-normal grid -mt-4  ${
                  (hovered && hoveredItemId === service.id) ||
                  (hoveredItemId === services?.[0].id &&
                    service.id === services?.[0].id)
                    ? "height -mt-2"
                    : "small "
                }
                `}
              >
                <p
                  className={`font-SfPro text-sm md:text-base font-normal overflow-hidden
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <div className="!w-full h-2 bg-gray-300 rounded-2xl overflow-hidden">
                <div
                  className={`h-full gradien transition-all duration-500 delay-150 ease-in-out ${
                    (hovered && hoveredItemId === service.id) ||
                    (hoveredItemId === services?.[0].id &&
                      service.id === services?.[0].id)
                      ? "w-full"
                      : "w-0"
                  }
                `}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:h-[650px] h-[350px] w-full  md:w-[38%] relative">
        <svg
          fill="none"
          height="100%"
          width="100%"
          viewBox="0 0 100% 100%"
          preserveAspectRatio="xMidYMin slice"
          className="z-20 relative rounded-xl md:rounded-2xl"
        >
          <defs>
            <filter id="displacementFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.03"
                numOctaves="1"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="50"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
            <mask id="circleMask">
              <circle
                ref={circleRef}
                cx="520"
                cy="500"
                r="800"
                fill="white"
                style={{ filter: "url(#displacementFilter)" }}
              />
            </mask>
          </defs>
          <image
            xlinkHref={
              typeof currentImage === "string" ? currentImage : currentImage.src
            }
            mask="url(#circleMask)"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
        <div className="h-full w-full z-10 opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Image
            src={lastHoveredItemImage}
            alt={"service Images"}
            fill={true}
            sizes="(max-width: 768px) 100%, 38%"
            className="h-full w-full rounded-xl md:rounded-2xl object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
