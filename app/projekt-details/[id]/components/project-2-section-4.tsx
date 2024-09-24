// import ProjectSlider from "@/components/slider";
// import Image from "next/image";
// import React from "react";
// import { SwiperSlide } from "swiper/react";
// import Img1 from "@/public/assets/aktuelle-projekte/138/slider-2/1.png";
// import Img2 from "@/public/assets/aktuelle-projekte/138/slider-2/2.png";
// import Img3 from "@/public/assets/aktuelle-projekte/138/slider-2/3.png";
// import Img4 from "@/public/assets/aktuelle-projekte/138/slider-2/4.png";

// const Project2Sec4 = () => {
//   return (
//     <div className="h-[40rem] lg:h-[65.25rem]">
//       <ProjectSlider arrowColor="white">
//         <SwiperSlide>
//           <Image src={Img1} alt="img1" />
//         </SwiperSlide>
//         <SwiperSlide className="h-full bg-light-yellow">
//           <div className="mt-[7.875rem] flex flex-col items-center text-center">
//             <p className="mb-[4.125rem] font-proxima-semibold text-2xl text-brown lg:text-[2.5rem]">
//               DAS VORDERHAUS 138
//             </p>
//             <Image src={Img2} alt="img2" className="mb-[3.3813rem]" />
//             <p className="mb-[1.0313rem] font-ivy-presto text-lg text-dark-blue sm:text-[1.5625rem]">
//               Im ruhigen Teil des Winterhuder Wegs:
//             </p>
//             <div className="mb-[1.4688rem] h-[1px] w-[43.5625rem] max-w-[90%] bg-black" />
//             <p className="font-proxima text-dark-blue md:text-[1.3125rem]">
//               5 ETAGEN | 15 wohnungen | INKL. 1 PENTHaUS | ZWISCHEN 55 & 184 Qm
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={Img3} alt="img3" />
//         </SwiperSlide>
//         <SwiperSlide className="h-full bg-light-yellow">
//           <div className="mt-[10.375rem] flex flex-col items-center text-center">
//             <p className="mb-[4.8312rem] font-proxima-semibold text-2xl text-brown lg:text-[2.5rem]">
//               DAS GARTENHAUS. 138 A
//             </p>
//             <Image src={Img4} alt="img2" className="mb-[5.5125rem]" />
//             <p className="mb-[1.0313rem] font-ivy-presto text-lg text-dark-blue sm:text-[1.5625rem]">
//               Im ruhigen Teil des Winterhuder Wegs:
//             </p>
//             <div className="mb-[1.4688rem] h-[1px] w-[43.5625rem] max-w-[90%] bg-black" />
//             <p className="font-proxima text-dark-blue md:text-[1.3125rem]">
//               3 ETAGEN | 9 wohnungen | INKL 1 PENTHaUS | ZWISCHEN 50 & 182 Qm
//             </p>
//           </div>
//         </SwiperSlide>
//       </ProjectSlider>
//     </div>
//   );
// };

// export default Project2Sec4;

import ProjectSlider from "@/components/slider";
import React from "react";
import Img1 from "@/public/assets/aktuelle-projekte/138/slider-2/1.png";
import Img2 from "@/public/assets/aktuelle-projekte/138/slider-2/5.png";
import Img3 from "@/public/assets/aktuelle-projekte/138/slider-2/3.png";
import Img4 from "@/public/assets/aktuelle-projekte/138/slider-2/6.png";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const Project2Section4 = () => {
  return (
    <ProjectSlider arrowColor="white">
      <SwiperSlide className="relative h-full overflow-hidden bg-light-yellow">
        <Image src={Img1} alt="img1" />
      </SwiperSlide>
      <SwiperSlide className="relative h-full overflow-hidden bg-light-yellow">
        <Image src={Img2} alt="img1" className="scale-[1.2] md:scale-100" />
      </SwiperSlide>
      <SwiperSlide className="relative h-full overflow-hidden bg-light-yellow">
        <Image src={Img3} alt="img1" />
      </SwiperSlide>
      <SwiperSlide className="relative h-full overflow-hidden bg-light-yellow">
        <Image src={Img4} alt="img1" className="scale-[1.2] md:scale-100" />
      </SwiperSlide>
    </ProjectSlider>
  );
};

export default Project2Section4;
