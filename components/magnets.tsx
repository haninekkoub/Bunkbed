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
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const h = rect.width / 2;

        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - h;

        const r1 = Math.sqrt(x * x + y * y);
        const r2 = (1 - r1 / h) * r1;

        const angle = Math.atan2(y, x);
        const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
        const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

        const op = r2 / r1 + 0.25;

        ref.current.style.setProperty("--tx", `${tx}px`);
        ref.current.style.setProperty("--ty", `${ty}px`);
        ref.current.style.setProperty("--opacity", `${op}`);
      }
    };

    if (ref.current) {
      ref.current.addEventListener("mousemove", onMouseEnter);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", onMouseEnter);
      }
    };
  }, []);

  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.setProperty("--tx", "0px");
        ref.current.style.setProperty("--ty", "0px");
        ref.current.style.setProperty("--opacity", `${0.25}`);
      }
    };

    if (ref.current) {
      ref.current.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <Link href={direction}>
      <div
        ref={ref}
        className=" bg-[#1A1A1A] rounded-full h-20 w-20 grid place-items-center"
      >
        <h5
          style={{
            transform: `translate(var(--tx, 0), var(--ty, 0))`,
            boxShadow: `var(--tx, 0) var(--ty, 0) 20px rgba(0, 0, 0, 0.5)`,
          }}
          className="h-12 w-12 rounded-full grid place-items-center"
        >
          {children}
        </h5>
      </div>
    </Link>
  );
}
