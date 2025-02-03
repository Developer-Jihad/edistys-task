"use client";

import { useEffect, useState } from "react";
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
  const isLargeScreen = useIsLargeScreen();

  return (
    <section
      className={`bg-primary h-[500px] overflow-hidden ${
        isLargeScreen ? "cta-clip-lg" : "cta-clip-sm"
      }`}
    >
      <div className="container relative">
        <div className="relative lg:absolute flex flex-col w-full h-[500px] items-center justify-center text-center text-white z-20 p-8 mt-4 md:mt-14 ">
          <h2 className="text-2xl md:text-4xl font-bold mb-[24px]">
            Let Us Connect
          </h2>
          <p className=" md:text-2xl mb-[30px]">
            Talk to us to find out how we can transform your organisation for
            the future.
          </p>
          <Button />
        </div>
      </div>
        <div className="hidden lg:block relative z-10">
          <ParallaxBackground />
        </div>
    </section>
  );
};

export default CTASection;
