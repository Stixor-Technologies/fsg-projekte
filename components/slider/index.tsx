"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperClass from "swiper";
import Image from "next/image";
import Arrow from "@/public/assets/arrow-white.svg";
import { StaticImageData } from "next/image";

interface ProjectSliderProps {
  sliderImages: StaticImageData[];
}

const ProjectSlider: FC<ProjectSliderProps> = ({ sliderImages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleBulletClick = (index: number) => {
    console.log(swiperRef);
    if (swiperRef.current && swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

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
        breakpoints={{
          0: {
            direction: "horizontal",
          },
          768: {
            direction: "vertical",
          },
        }}
        className="mySwiper !flex aspect-video h-full max-h-[65.25rem] w-full flex-col !items-center lg:flex-row"
      >
        {sliderImages?.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative z-0 mx-auto size-full overflow-hidden ${
                index === sliderImages.length - 1 && "bg-light-purple"
              }`}
            >
              <Image
                className={`absolute left-0 top-0 z-10 h-full w-full rounded-none`}
                src={imageSrc}
                width={1920}
                height={1044}
                alt=""
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 items-center md:bottom-auto md:left-auto md:right-[2vw] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:flex-col 4xl:right-[4.481rem] ">
        <button
          className={`${activeIndex === 0 && "opacity-50"} -rotate-90 md:rotate-0`}
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <Image width={23} src={Arrow} alt="next-image" />
        </button>
        <div className="flex items-center gap-3 md:flex-col">
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={`size-[0.563rem] cursor-pointer rounded-full  ${index === activeIndex ? "bg-white" : "bg-[#A6ABB7] bg-opacity-80"}`}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </div>

        <button
          className={`${activeIndex === sliderImages?.length - 1 && "opacity-50"}`}
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <Image
            src={Arrow}
            width={23}
            alt="next-image"
            className="mt-0.5 rotate-90 md:rotate-180"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
