"use client";
import React, { useRef, useState } from "react";
import Image1 from "./assets/img-1.jpg";
import Image2 from "./assets/img-2.jpg";
import Image3 from "./assets/img-3.jpg";
import Image from "next/image";

const lists = [
  {
    name: "Grom Digital",
    description:
      "Stop wrestling with clunky content management systems! Our intuitive CMS empowers you to easily update your website anytime, anywhere. No technical knowledge needed, just drag, drop, and publish stunning content. ",
    id: 1,
    image: Image1,
  },
  {
    name: "A Seamless Web Journey",
    description:
      "Stop wrestling with clunky content management systems! Our intuitive CMS empowers you to easily update your website anytime, anywhere. No technical knowledge needed, just drag, drop, and publish stunning content. ",
    id: 2,
    image: Image2,
  },
  {
    name: "Websites that Drive Results",
    description:
      "Stop wrestling with clunky content management systems! Our intuitive CMS empowers you to easily update your website anytime, anywhere. No technical knowledge needed, just drag, drop, and publish stunning content.",
    id: 3,
    image: Image3,
  },
];

export default function Services() {
  const [hoveredItemId, setHoveredItemId] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [lastHoveredItemId, setLastHoveredItemId] = useState(1);
  const circleRef = useRef<SVGCircleElement>(null);

  const handleMouseEnter = (id: React.SetStateAction<number>) => {
    setLastHoveredItemId(hoveredItemId);

    setTimeout(() => {
      setHoveredItemId(id);
      setHovered(true);

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
    <div className="flex justify-between items-center w-full my-20 ">
      <div className=" w-1/2 cursor-pointer flex flex-col gap-8 items-start">
        {lists.map((list, i) => {
          return (
            <div
              className={`w-full flex flex-col gap-6 transition-all duration-300 ease-in-out
              ${
                (hovered && hoveredItemId === list.id) ||
                (hoveredItemId === 1 && list.id === 1)
                  ? "opacity-100"
                  : "opacity-50"
              }
              `}
              key={i}
              onMouseEnter={() => {
                resetRadius(list.id); // Reset radius before changing item
                handleMouseEnter(list.id);
              }}
            >
              <h4 className=" font-Outreque text-2xl font-medium">
                {list.name}
              </h4>
              <div
                className={`font-SfPro text-base font-normal grid -mt-4 ${
                  (hovered && hoveredItemId === list.id) ||
                  (hoveredItemId === 1 && list.id === 1)
                    ? "height"
                    : "small"
                }
                `}
              >
                <p
                  className={`font-SfPro text-base font-normal overflow-hidden
                  }`}
                >
                  {list.description}
                </p>
              </div>

              <div className="!w-full h-2 bg-gray-300 rounded-2xl overflow-hidden">
                <div
                  className={`h-full gradien transition-all duration-500 delay-150 ease-in-out ${
                    (hovered && hoveredItemId === list.id) ||
                    (hoveredItemId === 1 && list.id === 1)
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
      <div className="h-[650px] w-[38%] rounded-2xl relative ">
        <svg
          fill="none"
          height="100%"
          width="100%"
          viewBox="0 0 100% 100%"
          preserveAspectRatio="xMidYMin slice"
          className="z-20 relative"
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
              lists.find((item) => item.id === hoveredItemId)!.image.src
            }
            mask="url(#circleMask)"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
        <div className="h-full w-full z-10 opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={lists.find((item) => item.id === lastHoveredItemId)!.image}
            alt={"image"}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
