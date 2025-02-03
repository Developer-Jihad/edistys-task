"use client";

import React from "react";
import { trustedBy } from "@/data/trustedBy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Header from './../common/Header';

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
            snap: { innerText: 1 },
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onUpdate: function () {
              ref.innerText = Math.floor(Number(ref.innerText)).toString();
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="trusts" className="container p-8 lg:p-20 my-20 ">
      <div className="text-center">
        <Header
          title={"TRUSTED BY THE BEST"}
          subtitle={"We Gained Lots of Trust"}
        />
      </div>
      <hr className="my-7" />
      <div className="flex flex-col md:flex-row justify-between">
        {trustedBy.map((item, index) => (
          <div key={item.key} className="text-center rounded-xl p-10">
            <h2 className="text-5xl lg:text-7xl font-bold text-blue-main my-3">
              {item.frontSymbol || ""}
              <span
                ref={(el) => {
                  numberRefs.current[index] = el;
                }}
              >
                0
              </span>
              {item.backSymbol || ""}
            </h2>
            <p className="mb-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;
