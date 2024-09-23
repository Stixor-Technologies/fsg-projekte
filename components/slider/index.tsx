"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";
import Image from "next/image";
import Arrow from "@/public/assets/arrow-black.svg";
import { StaticImageData } from "next/image";

interface ProjectSliderProps {
  children: React.ReactNode;
}

const ProjectSlider: FC<ProjectSliderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current && swiperRef.current;

    const updateActiveIndex = () => {
      setActiveIndex(swiperInstance?.activeIndex || 0);
    };

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateActiveIndex);
    }

    // Cleanup function to remove event listener when component unmounts
    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateActiveIndex);
      }
    };
  }, []);

  return (
    <div className="relative mx-auto mb-[2.813rem] flex max-w-[120rem] items-center gap-10 lg:mb-[6.875rem]">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={false}
        modules={[]}
        className="mySwiper !flex aspect-video h-full max-h-[65.25rem] w-full flex-col !items-center lg:flex-row"
      >
        {children}
      </Swiper>

      <div className="absolute z-20 flex h-6 w-full items-center justify-between">
        <button
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          className="rotate-180"
        >
          <Image width={23} src={Arrow} alt="next-image" />
        </button>
        <button
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <Image src={Arrow} width={23} alt="next-image" />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
