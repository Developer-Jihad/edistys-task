"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { slides } from '@/data/slides';

function Technology() {
  const swiperRef = useRef<any>(null); // Reference for Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  return (
    <section className="container px-8 lg:px-20 ">

    <h6 className="lg:text-2xl font-bold text-center uppercase text-blue-500 my-7">TECHNOLOGY BUILT FOR YOU</h6>
    <h2 className="text-4xl lg:text-6xl font-bold text-center text-gray-700 pb-8">The future of finance</h2>
      
        {/* Buttons to control slides */}
      <div className="flex-wrap space-x-4 justify-center  items-center lg:flex hidden pb-8">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => {
              swiperRef.current?.slideTo(index);
              setActiveIndex(index); // Update active index when button clicked
            }}
            className={`lg:text-body-p0 text-res-body-p0 font-semibold xl:px-12 md:px-10 px-7 py-1.5 xl:py-2 rounded-full transition-colors duration-300 ${
              activeIndex === index ? 'bg-blue-100 text-blue-700' : 'text-blue-500 hover:bg-[#F5FAFF]'
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Initialize swiper reference
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
          className="shadow-lg rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <article className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:p-16 p-6 rounded-2xl bg-white">
              <figure className="h-full lg:h-96">
                  <img src={slide.image} alt={slide.title} className="h-full w-full object-cover rounded-xl" />
                </figure>
                <section className="space-y-6">
                  <header className="space-y-6">
                    <h6 className="lg:text-2xl font-bold uppercase text-blue-500">{slide.title}</h6>
                    <h3 className="text-2xl lg:text-4xl font-bold  text-gray-700">{slide.subtitle}</h3>
                  </header>
                  <p>{slide.description}</p>
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
