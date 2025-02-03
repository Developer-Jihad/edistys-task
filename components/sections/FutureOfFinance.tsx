"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import backgroundSVG from "@/assets/frames/carousel-image-frame-1.svg";
import foregroundSVG from "@/assets/frames/founder/2.svg";

gsap.registerPlugin(ScrollTrigger);

const FutureOfFinance = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const fgRef = useRef<HTMLDivElement | null>(null);
  const floatingIconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      // Fade-in Animation for Content
      gsap.fromTo(
        section.querySelectorAll(".animate-fade"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // Floating Icons Animation (Smooth Up and Down)
      floatingIconsRef.current.forEach((icon) => {
        if (icon) {
          gsap.to(icon, {
            y: 10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 3,
          });
        }
      });

      // Parallax + Swing Effect for Background Image
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: -5,
          rotation: 1, 
          transformOrigin: "center center", 
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Continuous Swing Animation (Independent of Scroll)
        gsap.to(bgRef.current, {
          rotation: -1, 
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 2,
        });
      }

      // Parallax + Swing Effect for Foreground Image
      if (fgRef.current) {
        gsap.to(fgRef.current, {
          yPercent: 15,
          rotation: -1, 
          transformOrigin: "center center",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Continuous Swing Animation for Foreground
        gsap.to(fgRef.current, {
          rotation: -1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <section id="finance" className="mb-20" ref={sectionRef}>
      <section className="container grid lg:grid-cols-2 grid-cols-1 items-center md:gap-4 relative lg:mt-20 px-8 lg:p-20">
        {/* Text Content */}
        <div className="space-y-4 animate-fade">
          <h6 className="uppercase text-blue-main font-bold text-lg ">
            POWERING THE FUTURE OF FINANCE
          </h6>
          <h2 className="whitespace-pre-line leading-[1.2] lg:leading-[1.2] font-bold text-3xl lg:text-5xl">
            Uncovering new ways to delight customers
          </h2>

          {/* Description Text */}
          <div className="lg:pt-2 space-y-4 hidden lg:block">
            <p className="text-body-1 font-medium">
              <strong>
                AnyTech is revolutionising financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </strong>
            </p>
            <p className="text-body-1">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-fit animate-fade py-10 lg:py-14 my-7 lg:m-0">
          <figure className="w-[76%] mx-auto">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg"
              width={1000}
              height={1000}
              alt="POWERING THE FUTURE OF FINANCE"
              className="object-cover w-full h-full rounded-2xl shadow-2xl"
            />
          </figure>

          {/* Floating Icons */}
          <div>
            {[
              "https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format",
              "https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format",
              "https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format",
            ].map((src, index) => (
              <figure
                key={index}
                ref={(el) => {
                  floatingIconsRef.current[index] = el as HTMLDivElement;
                }}
                className={`absolute rounded-full drop-shadow-2xl ${
                  index === 0
                    ? "top-[10%] right-[12%] translate-x-1/2 w-[70px] lg:w-[115px]"
                    : index === 1
                    ? "top-[40%] left-[20%] w-[57px] lg:w-[87px]"
                    : "top-[20%] left-[12%] -translate-x-1/2 w-[53px] lg:w-[73px]"
                }`}
              >
                <Image
                  src={src}
                  width={200}
                  height={200}
                  alt={`floating-icon-${index}`}
                  className="object-contain w-full h-full"
                />
              </figure>
            ))}
          </div>

          {/* Background Image with Parallax and Swing */}
          <figure
            ref={bgRef}
            className="absolute h-full w-full top-0 right-0 -z-10 animate-fade"
          >
            <Image
              src={backgroundSVG}
              fill
              alt="background frame"
              className="object-cover"
            />
          </figure>

          {/* Foreground Image with Parallax and Swing */}
          <figure
            ref={fgRef}
            className="absolute h-[50%] w-[50%] -bottom-[0%] -left-[5%] z-10 animate-fade"
          >
            <Image
              src={foregroundSVG}
              width={500}
              height={500}
              alt="foreground frame"
              className="object-cover w-full h-full"
            />
          </figure>
        </div>

        {/* Description for Mobile View */}
        <div className="lg:pt-2 space-y-4 lg:hidden mb-20">
          <p className="text-body-1 font-medium animate-fade">
            <strong>
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </strong>
          </p>
          <p className="text-body-1 animate-fade">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </section>

      {/* Decorative SVG at the Bottom */}
      <svg
        className="max-h-[240px] w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.7"
          d="M-240 0L1680 0L-240 280L-240 0Z"
          fill="url(#paint0_linear_6055_471)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_6055_471"
            x1="458.5"
            y1="1561.14"
            x2="392.705"
            y2="52.1879"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default FutureOfFinance;
