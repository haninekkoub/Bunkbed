"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function Magnets({
  children,
  direction,
}: {
  children: React.JSX.Element;
  direction: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseEnter = (e: MouseEvent) => {
      const currentRef = ref.current;
      if (currentRef) {
        const rect = currentRef.getBoundingClientRect();
        const h = rect.width / 2;

        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - h;

        const r1 = Math.sqrt(x * x + y * y);
        const r2 = (1 - r1 / h) * r1;

        const angle = Math.atan2(y, x);
        const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
        const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

        const op = r2 / r1 + 0.25;

        currentRef.style.setProperty("--tx", `${tx}px`);
        currentRef.style.setProperty("--ty", `${ty}px`);
        currentRef.style.setProperty("--opacity", `${op}`);
      }
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", onMouseEnter);
    }

    return () => {
      const currentRef = ref.current;
      if (currentRef) {
        currentRef.removeEventListener("mousemove", onMouseEnter);
      }
    };
  }, []);

  useEffect(() => {
    const onMouseLeave = () => {
      const currentRef = ref.current;

      if (currentRef) {
        ref.current.style.setProperty("--tx", "0px");
        ref.current.style.setProperty("--ty", "0px");
        ref.current.style.setProperty("--opacity", `${0.25}`);
      }
    };
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      const currentRef = ref.current;
      if (currentRef) {
        currentRef.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <Link href={direction}>
      <div
        ref={ref}
        className=" bg-[#1A1A1A] rounded-full h-16 w-16 xl:h-20 xl:w-20 2xl:h-32 2xl:w-32 grid place-items-center"
      >
        <h5
          style={{
            transform: `translate(var(--tx, 0), var(--ty, 0))`,
            boxShadow: `var(--tx, 0) var(--ty, 0) 20px rgba(0, 0, 0, 0.5)`,
          }}
          className="h-3/5 w-3/5 rounded-full grid place-items-center"
        >
          {children}
        </h5>
      </div>
    </Link>
  );
}
