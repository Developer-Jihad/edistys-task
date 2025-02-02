"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ParallaxBackground from "../common/ParallaxBackground";
import Button from "../common/Button";

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLarge;
};

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isLargeScreen = useIsLargeScreen();

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll("h2, p, a"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      className={`relative bg-primary h-[350] md:h-[500px] overflow-hidden ${
        isLargeScreen ? "cta-clip-lg" : "cta-clip-sm"
      }`}
      ref={sectionRef}
    >
      <div className=" flex flex-col w-full h-full items-center justify-center text-center absolute text-white z-20 p-8 mt-4 md:mt-14 ">
        <h2 className="text-2xl md:text-4xl font-bold mb-[24px]">
          Let&apos;s Connect
        </h2>
        <p className=" md:text-2xl mb-[30px]">
          Talk to us to find out how we can transform your organisation for the
          future.
        </p>
        <Button />
      </div>

      <div className="absolute hidden md:block relative z-10">
        <ParallaxBackground />
      </div>
    </section>
  );
};

export default CTASection;
