import ProjectSlider from "@/components/slider";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Img1 from "@/public/assets/aktuelle-projekte/138/slider-4/1.png";
import Img2 from "@/public/assets/aktuelle-projekte/138/slider-4/2.png";
import Img3 from "@/public/assets/aktuelle-projekte/138/slider-4/3.png";
import Img4 from "@/public/assets/aktuelle-projekte/138/slider-4/4.png";
import TextWithLineBreaks from "@/components/line-break";

const Project2Sec9 = () => {
  return (
    <div>
      <ProjectSlider arrowColor="white">
        <SwiperSlide>
          <Image src={Img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide className="h-full relative overflow-hidden">
          {/* <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mx-auto max-w-[74.375rem]">
              <p className="mb-[2.3125rem] font-proxima-semibold text-[1.25rem] leading-[1.5rem] text-brown">
                <TextWithLineBreaks text="Wer braucht noch ein Ferienhaus,  | wenn er in so einem Gartenhaus wohnt?" />
              </p>
              <p className="font-ivy-presto text-[2.1875rem] leading-[2.625rem]">
                <TextWithLineBreaks text="Das liebevoll angelegte Grün um das Gartenhaus der No. 138 | ist nicht nur schön anzusehen. Es wirkt auch beruhigend und erfrischend,  | wie wir aus der Farbenlehre wissen. Also genau richtig für einen | kurzen Urlaub für die Seele. " />
              </p>
            </div>
          </div> */}
          <Image src={Img4} alt="img1" className="scale-150 md:scale-100" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img2} alt="img3" />
        </SwiperSlide>
        <SwiperSlide className="h-full bg-light-yellow">
          <Image src={Img3} alt="img4" />
        </SwiperSlide>
      </ProjectSlider>
    </div>
  );
};

export default Project2Sec9;
