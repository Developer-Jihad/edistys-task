"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../common/Button";
import gsap from "gsap";

import heroImage from "@/assets/heroImg.jpg";
import heroSVG from "@/assets/backgrounds/WaveLinesMobile2.svg";

import ParallaxBackground from "../common/ParallaxBackground";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: "5%", opacity: 1 },
        { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="bg-clip-hero-container lg:h-[90vh] pb-[150px] lg:pb-0">
        {/* Content Container */}
        <div className=" flex justify-center ">
          <div className=" w-7xl mx-auto h-full lg:absolute z-20 p-8 lg:p-20">
            <div className="lg:w-3/5 pt-14">
              <header className="space-y-6 mb-8 ">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.2] lg:leading-[1.2]">
                  Embrace the future of finance
                </h1>
                <h6 className="font-bold text-white leading-[2] lg:pr-10">
                  Reimagine financial services with AnyTech's open platform,
                  distributed banking solution that powers transformation
                </h6>
              </header>
              <Button />
            </div>
            <div className="lg:w-2/5"></div>
          </div>
        </div>

        {/* Hero Background for Small Devices */}
        <div className="lg:hidden absolute w-full h-[500px] top-[-10px] animate-slide-in ">
          <Image
            src={heroSVG}
            alt="Hero SVG"
            fill
            className="object-cover scale-125"
          />
        </div>

        {/* Hero Background for Large Devices */}
        <div className="relative overflow-hidden hidden lg:block ">
          <div
            ref={imageRef}
            className="absolute w-full h-full bottom-0 right-0 md:w-[65%] md:h-[100%] bg-clip-hero-image  "
          >
            <Image
              src={heroImage}
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Hide Parallax Background on small devices */}
          <div className="hidden md:block relative z-10">
            <ParallaxBackground />
          </div>
        </div>
      </div>

      {/* Hero Image for Small Devices */}
      <div className="relative hero-image-polygon relaive h-[300px] md:h-[500px] w-full lg:hidden top-[-150px]">
        <Image
          src={heroImage} // Ensure this path is correct
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
