"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../common/Header";
import { philosophiesData } from "@/data/philosophy";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 100 },
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

    imagesRef.current.forEach((image) => {
      if (image) {
        gsap.fromTo(
          image,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: image,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="philosophy" className="container mb-[128px] p-8 lg:p-20" ref={sectionRef}>
      {/* Header */}
      <div className="text-center">
        <Header
          title={"OUR PHILOSOPHY "}
          subtitle={"Human-centred innovation "}
        />
      </div>

      {/* Image for Large Devices */}
      <figure
        className="pt-7"
        ref={(el) => {
          imagesRef.current[0] = el as HTMLDivElement;
        }}
      >
        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"
          alt="Our Philosophy"
          width={2206}
          height={727}
          className="hidden md:block w-full h-full"
          loading="lazy"
        />
      </figure>
      {/* Image for Small Devices */}
      <figure
        className="pb-7"
        ref={(el) => {
          imagesRef.current[1] = el as HTMLDivElement;
        }}
      >
        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png"
          alt="Our Philosophy"
          width={1000}
          height={1000}
          className="md:hidden w-full h-full"
          loading="lazy"
        />
      </figure>

      {/* Philosophy Cards with Swiper */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
        }}
        grabCursor={true}
        className="philosophy-swiper"
      >
        {philosophiesData.map((philosophy, index) => (
          <SwiperSlide key={index}>
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-[#F8FCFF] p-4 md:p-6 rounded-xl h-full "
            >
              <figure className="w-fit rounded-full pb-2">
                <Image
                  src={philosophy.icon}
                  alt={philosophy.title}
                  width={50}
                  height={50}
                  className="lg:w-[50px] lg:h-[50px] w-[32px] h-[32px]"
                  loading="lazy"
                />
              </figure>
              <h4 className=" text-xl lg:text-2xl font-bold py-3">
                {philosophy.title}
              </h4>
              <p className="text-body-1">{philosophy.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Philosophy;
