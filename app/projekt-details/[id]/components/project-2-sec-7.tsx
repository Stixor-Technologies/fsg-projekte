import ProjectSlider from "@/components/slider";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Img1 from "@/public/assets/aktuelle-projekte/138/slider-3/1.png";
import Img2 from "@/public/assets/aktuelle-projekte/138/slider-3/5.png";
import Img3 from "@/public/assets/aktuelle-projekte/138/slider-3/3.png";
import Img4 from "@/public/assets/aktuelle-projekte/138/slider-3/4.png";

const Project2Sec7 = () => {
  return (
    <div>
      <ProjectSlider arrowColor="white">
        <SwiperSlide>
          <Image src={Img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide className="relative h-full overflow-hidden">
          <Image src={Img2} alt="img1" className="scale-125 md:scale-100" />
          {/* <div className="flex h-full flex-col items-center justify-center gap-10 px-10 md:flex-row xl:gap-0 2xl:px-0 4xl:items-start 4xl:justify-start">
            <div className="flex-1 text-center 4xl:ml-[16.8125rem] 4xl:mt-[23.125rem]">
              <div className="mx-auto max-w-[33.9375rem] 4xl:mx-0">
                <p className="mb-[2.625rem] font-proxima-semibold text-[1.25rem] leading-[1.5rem] text-brown">
                  <TextWithLineBreaks text="Was gibt es Wertvolleres,  | als etwas Seltenes zu finden? " />
                </p>
                <p className="font-ivy-presto text-[2.1875rem] leading-[2.625rem]">
                  <TextWithLineBreaks text="Einen Ort, der seinen Besitzern das Gefühl gibt, bei sich und ihren Träumen angekommen zu sein. | Selbst, wenn sie sich gerade am anderen Ende der Welt befinden." />
                </p>
              </div>
            </div>
            <div className="flex-1 4xl:mr-[17.75rem] 4xl:mt-[5.5625rem]">
              <Image src={Img2} alt="img2" />
            </div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img3} alt="img3" />
        </SwiperSlide>
        <SwiperSlide className="h-full bg-light-yellow">
          <Image src={Img4} alt="img4" />
        </SwiperSlide>
      </ProjectSlider>
    </div>
  );
};

export default Project2Sec7;
