"use client";
import React, { FC, useEffect, useRef, useState } from "react";
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

  const [childrenLength, setChildrenLength] = useState(0);
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        if (swiperRef.current) {
          setActiveSlide(swiperRef.current.realIndex + 1);
        }
      });
    }
  }, [swiperRef.current]);

  useEffect(() => {
    if (children) {
      setChildrenLength(React.Children.count(children));
    }
  }, [children]);

  return (
    <div className="relative mx-auto flex h-full max-w-[120rem] items-center justify-center gap-10">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={false}
        modules={[]}
        className="mySwiper !flex h-full w-full flex-col !items-center lg:flex-row"
        slidesPerView={slidesPerView}
      >
        {children}
      </Swiper>
      {childrenLength > 1 && (
        <>
          <div className="absolute top-[47.1%] z-20 hidden h-6 w-full items-center justify-between px-10 md:flex lg:px-[7.9375rem]">
            <button
              onClick={() => {
                swiperRef.current?.slidePrev();
              }}
              className={`rotate-180 ${
                activeSlide === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={activeSlide === 1}
            >
              <Image
                width={22.7}
                src={arrowColor === "white" ? ArrowWhite : Arrow}
                alt="next-image"
              />
            </button>
            <button
              onClick={() => {
                swiperRef.current?.slideNext();
              }}
              disabled={activeSlide === childrenLength}
              className={`${
                activeSlide === childrenLength
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >
              <Image
                src={arrowColor === "white" ? ArrowWhite : Arrow}
                width={22.7}
                alt="next-image"
              />
            </button>
          </div>
          <div className="absolute bottom-2 z-30 block sm:bottom-10 md:hidden">
            <div className="flex items-center justify-center gap-3">
              {Array.from({ length: childrenLength }).map((_, index) => (
                <div
                  key={index}
                  role="button"
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(index);
                    }
                  }}
                  className={
                    activeSlide === index + 1
                      ? "h-2 w-2 rounded-full bg-black xs:h-3 xs:w-3"
                      : "h-2 w-2 rounded-full bg-gray xs:h-3 xs:w-3"
                  }
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectSlider;
