"use client";

import React from "react";
import { trustedBy } from "@/data/trustedBy";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function TrustedBy() {
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    numberRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { innerText: 0 },
          {
            innerText: trustedBy[index].number,
            duration: 2,
            snap: { innerText: 1 }, // Ensures whole numbers during animation
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%',         // When the top of the element is 80% down the viewport
              toggleActions: 'play none none none', // Play animation once
            },
            onUpdate: function () {
              ref.innerText = Math.floor(Number(ref.innerText)).toString(); // Round down to avoid decimals
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="container p-8 lg:p-20 my-20 ">
      <h6 className="text-center text-xl lg:text-2xl font-bold uppercase text-blue-500">TRUSTED BY THE BEST</h6>
      <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28 my-20">
        {trustedBy.map((detail, index) => (
          <div
            key={detail.key}
            className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs"
          >
            <h2 className="text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
              {detail.frontSymbol || ""}
              <span
                ref={(el) => {
                  numberRefs.current[index] = el;
                }}
              >
                0
              </span>
              {detail.backSymbol || ""}
            </h2>
            <p className="text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;
