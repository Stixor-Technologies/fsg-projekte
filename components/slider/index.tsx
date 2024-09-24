"use client";
import React, { FC, useRef } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";
import Image from "next/image";
import Arrow from "@/public/assets/arrow-black.svg";
import ArrowWhite from "@/public/assets/arrow-white.svg";

interface ProjectSliderProps {
  children: React.ReactNode;
  arrowColor?: "black" | "white";
  slidesPerView?: number;
}

const ProjectSlider: FC<ProjectSliderProps> = ({
  children,
  arrowColor = "black",
  slidesPerView = 1,
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="relative mx-auto flex max-w-[120rem] items-center justify-center gap-10">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={false}
        modules={[]}
        className="mySwiper !flex h-full max-h-[65.25rem] w-full flex-col !items-center lg:flex-row"
        slidesPerView={slidesPerView}
      >
        {children}
      </Swiper>

      <div className="absolute top-[47.1%] z-20 flex h-6 w-[90.3%] items-center justify-between">
        <button
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          className="rotate-180"
        >
          <Image
            width={24}
            src={arrowColor === "white" ? ArrowWhite : Arrow}
            alt="next-image"
          />
        </button>
        <button
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <Image
            src={arrowColor === "white" ? ArrowWhite : Arrow}
            width={24}
            alt="next-image"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
