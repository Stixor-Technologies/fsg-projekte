// import ProjectSlider from "@/components/slider";
// import Image from "next/image";
// import React from "react";
// import { SwiperSlide } from "swiper/react";
// import Img1 from "@/public/assets/aktuelle-projekte/petit/slider-2/1.png";
// import Img3 from "@/public/assets/aktuelle-projekte/petit/slider-2/3.png";
// import Img4 from "@/public/assets/aktuelle-projekte/petit/slider-2/4.png";
// import TextWithLineBreaks from "@/components/line-break";

// const Project1Sec7 = () => {
//   return (
//     <div className="h-[50rem] lg:h-[65.25rem]">
//       <ProjectSlider arrowColor="white">
//         <SwiperSlide>
//           <Image src={Img1} alt="img1" />
//         </SwiperSlide>
//         <SwiperSlide className="h-full bg-light-yellow">
//           <div className="flex h-full flex-col items-center justify-center text-center">
//             <p className="font-proxima-semibold text-lg text-brown sm:text-xl">
//               <TextWithLineBreaks text="Hier ist selbst das kleinste Detail groß: | Und darf es auf 233 m2 auch sein" />
//             </p>
//             <p className="mt-9 max-w-[74.375rem] font-ivy-presto text-black sm:text-lg lg:text-[2.1875rem] lg:leading-[2.625rem]">
//               <TextWithLineBreaks
//                 text="Hoch oben im sechsten Stock, selten hat eine Wohnung den Blick auf
//             Hamburg | so gefeiert wie diese. Mit einer hellen, ruhigen ca. 27 m2
//             großzügigen Terrasse nach Westen – mit einer atemberaubenden
//             Aussicht auf die Skyline – sowie | einem großen Ost-Balkon, der sich
//             nicht nur von einem der drei Schlafzimmer | betreten lässt, sondern
//             von allen."
//               />
//               <br />
//               <TextWithLineBreaks
//                 text="Außen wie innen regiert das Wort „sehr“: Mit sehr
//             großen Fensterfronten mit | Schiebeelementen, dem sehr großzügig und
//             repräsentativ gestaltetem Wohn- und Essbereich bis hin zum liebevoll
//             im Fischgrät-Muster verlegten Parkett. | Alles dient dem hohen
//             Anspruch: Die hohen Decken, die hohen Türen, die hochglänzenden
//             Bauhausbeschläge."
//               />
//               <br />
//               <TextWithLineBreaks
//                 text="Kurz, hier ist das Niveau 6 Stockwerke hoch. Mit
//             Allem, was das gute Leben | nicht nur besser, sondern ganz besonders
//             macht."
//               />
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={Img3} alt="img3" />
//         </SwiperSlide>
//         <SwiperSlide className="h-full bg-light-yellow">
//           <div className="flex h-full flex-col items-center justify-center gap-10 bg-light-yellow  lg:flex-row lg:px-10 2xl:gap-0 2xl:px-0 4xl:justify-start 4xl:pl-[12.6875rem]">
//             <div className="mx-auto mt-5 w-[35rem] max-w-[90%] sm:flex-1 lg:mt-0 lg:max-w-none 4xl:flex-none">
//               <Image src={Img4} alt="" className="mx-auto 4xl:mx-0" />
//             </div>
//             <div className="flex-[0.8] 4xl:ml-[4.9375rem]">
//               <div className="w-full max-w-[50rem] text-center text-medium-blue  lg:max-w-[33.938rem]">
//                 <p className="font-proxima text-[.938rem] lg:mt-5 lg:leading-[1.563rem]">
//                   <TextWithLineBreaks
//                     text={
//                       "Die Bäder beeindrucken mit echtem Marmor, ausgewählten Objekten, | Armaturen von Dornbracht und: Bodengleichen Walk-In-Duschen, völlig kantenlos | und auf den Millimeter präzise gefertigt. Begleitet von einem verchromten Handtuchwärmer als optischen Blickfang und schönes Beispiel für | vollendetes Design."
//                     }
//                   />
//                 </p>
//                 <p className="mt-[1.4375rem] font-proxima text-[.938rem]">
//                   <span className="block">
//                     <TextWithLineBreaks
//                       text={
//                         "Wie besonders der Anspruch ist, zeigt sich bis in die Hauswirtschaftsräume. | Weil sie nicht einfach gefliest daherkommen, sondern in feinem Parkett. | Kurz, jedes Detail wurde immer und immer wieder überlegt, verworfen und neu gedacht. Bis hin zum Kugelahorn im Vorgarten. Ein Baum wie ein Solitär. | Ganz, wie es sich für ein Petit Palais gehört."
//                       }
//                     />
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </ProjectSlider>
//     </div>
//   );
// };

// export default Project1Sec7;

import ProjectSlider from "@/components/slider";
import Img1 from "@/public/assets/aktuelle-projekte/petit/slider-2/1.png";
import Img2 from "@/public/assets/aktuelle-projekte/petit/slider-2/2.png";
import Img3 from "@/public/assets/aktuelle-projekte/petit/slider-2/3.png";
import Img4 from "@/public/assets/aktuelle-projekte/petit/slider-2/5.png";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

const Project1Sec7 = () => {
  return (
    <ProjectSlider arrowColor="white">
      <SwiperSlide>
        <div className={`relative overflow-hidden`}>
          <Image src={Img1} alt="" className={`w-full`} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`relative overflow-hidden`}>
          <Image src={Img2} alt="" className={`w-full`} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`relative overflow-hidden`}>
          <Image src={Img3} alt="" className={`w-full`} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`relative overflow-hidden`}>
          <Image
            src={Img4}
            alt=""
            className={`w-full scale-125 md:scale-100`}
          />
        </div>
      </SwiperSlide>
    </ProjectSlider>
  );
};

export default Project1Sec7;
