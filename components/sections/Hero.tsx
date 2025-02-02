"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import gsap from "gsap";

import heroImage from "@/assets/heroImg.png";
import heroSVG from "@/assets/backgrounds/WaveLinesMobile2.svg";

import ParallaxBackground from "../common/ParallaxBackground";

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

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const isLargeScreen = useIsLargeScreen();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: "10%", opacity: 1 },
        { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div
        className={`${
          isLargeScreen ? "hero-clip-lg" : "hero-clip-sm"
        } bg-primary lg:h-[90vh] pb-[150px] lg:pb-0`}
      >
        {/* Content Container */}
        <div className="container">
          <div className="relative lg:absolute flex items-center z-30 p-8 lg:px-20 h-full">
            <div className="lg:w-3/5 pt-10 lg:p-0">
              <header className="space-y-6 mb-8 ">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.2] lg:leading-[1.2]">
                  Embrace the future of finance
                </h1>
                <h6 className="font-bold text-white leading-[2] lg:pr-10">
                  Reimagine financial services with AnyTechs open platform,
                  distributed banking solution that powers transformation
                </h6>
              </header>
              <Button />
            </div>
            <div className="lg:w-2/5"></div>
          </div>
        </div>

        {/* Hero Background for Small Devices */}
        <div className="lg:hidden absolute bg-primary w-full h-[500px] sm:right-0 sm:top-0 top-[-15px] animate-slide-in">
          <Image
            src={heroSVG}
            alt="Hero SVG"
            fill
            className="object-cover"
          />
        </div>

        {/* Hero Background for Large Devices */}
        <div className="relative  overflow-hidden hidden lg:block ">
          <div className="absolute bottom-0 right-0  md:w-[70%] md:h-[100%] hero-image-clip-lg ">
            <div ref={imageRef} className="w-full h-full ">
              <Image
                src={heroImage}
                alt="Hero Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Hide Parallax Background on small devices */}
          <div className="relative z-10">
            <ParallaxBackground />
          </div>
        </div>
      </div>

      {/* Hero Image for Small Devices */}
      <div className="relative hero-image-clip-sm relaive h-[300px] md:h-[500px] w-full lg:hidden top-[-120px]">
        <Image src={heroImage} alt="Hero Image" fill className="object-cover" />
      </div>
    </section>
  );
}
