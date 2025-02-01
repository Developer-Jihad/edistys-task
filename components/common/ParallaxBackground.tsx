"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import Background1 from "@/assets/backgrounds/WaveLinesMobile1.svg"; // Update with actual paths
import Background2 from "@/assets/backgrounds/WaveLinesDesktop2.svg";
import Background3 from "@/assets/backgrounds/WaveLinesMobile2.svg";
import Foreground from "@/assets/backgrounds/WaveLinesMobile2.svg";

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLImageElement>(null);
  const bg2Ref = useRef<HTMLImageElement>(null);
  const bg3Ref = useRef<HTMLImageElement>(null);
  const fgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Calculate movement percentage (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      gsap.to(bg1Ref.current, {
        x: -x * 10, // Adjust movement intensity
        y: -y * 10,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.to(bg2Ref.current, {
        x: x * 10,
        y: y * 10,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.to(bg3Ref.current, {
        x: -x * 10,
        y: -y * 10,
        duration: 0.7,
        ease: "power2.out",
      });

      // Foreground moves in the opposite direction
      gsap.to(fgRef.current, {
        x: -x * 10, // Opposite direction
        y: -y * 10, // Opposite direction
        duration: 0.7,
        ease: "power2.out",
      });
    };

    // Initial animation for background layers
    gsap.fromTo(bg1Ref.current, { x: '-10%', y: '-10%' }, { x: '0%', y: '0%', duration: 1.5, ease: "power2.out" });
    gsap.fromTo(bg2Ref.current, { x: '-10%', y: '-10%' }, { x: '0%', y: '0%', duration: 1.5, ease: "power2.out" });
    gsap.fromTo(bg3Ref.current, { x: '-10%', y: '-10%' }, { x: '0%', y: '0%', duration: 1.5, ease: "power2.out" });
    gsap.fromTo(fgRef.current, { x: '100%', y: '-100%' }, { x: '0%', y: '0%', duration: 1.5, delay: 0.2, ease: "power2.out" });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Layers */}
      <Image
        ref={bg1Ref}
        src={Background1}
        alt="Background Layer 1"
        className="absolute top-[-100px] left-[50px] w-[50%] h-full "
      />
      <Image
        ref={bg2Ref}
        src={Background2}
        alt="Background Layer 2"
        className="absolute top-[-250px] left-[-150px] w-[70%] h-full "
      />
      <Image
        ref={bg3Ref}
        src={Background3}
        alt="Background Layer 3"
        className="absolute top-0 left-[-100px] w-[50%] h-full"
      />

      {/* Foreground */}
      <Image
        ref={fgRef}
        src={Foreground}
        alt="Foreground"
        className="absolute top-[-400px] right-[-200px] w-[60%] h-[70%] "
      />
    </div>
  );
};

export default ParallaxBackground;
