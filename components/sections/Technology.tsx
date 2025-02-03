"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import { slides } from "@/data/slides";
import Image from "next/image";
import Header from "../common/Header";

function Technology() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="technology" className="container px-8 lg:px-20 ">
      <div className="text-center">
        <Header
          title={"TECHNOLOGY BUILT FOR YOU"}
          subtitle={"The future of finance"}
        />
      </div>

      {/* Buttons to control slides */}
      <div className="flex-wrap space-x-4 justify-center  items-center lg:flex hidden py-5">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => {
              swiperRef.current?.slideTo(index);
              setActiveIndex(index);
            }}
            className={`lg:text-body-p0 text-res-body-p0 font-semibold xl:px-12 md:px-10 px-7 py-1.5 xl:py-2 rounded-full transition-colors duration-300 ${
              activeIndex === index
                ? "bg-blue-100 text-blue-700"
                : "text-blue-500 hover:bg-[#F5FAFF]"
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="shadow-lg rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <article className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:p-16 p-6 rounded-2xl bg-white">
                <figure className="h-full lg:h-96">
                  <Image
                    src={slide.image}
                    width={1000}
                    height={1000}
                    alt={slide.title}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </figure>
                <section className="space-y-6">
                  <header className="space-y-6">
                    <h6 className="text-xl uppercase text-blue-main">
                      {slide.title}
                    </h6>
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-700 py-1">
                      {slide.subtitle}
                    </h3>
                  </header>
                  <p>{slide.description1}</p>
                  <p className="text-gray-600">{slide.description2}</p>
                </section>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Technology;
