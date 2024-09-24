import ProjectSlider from "@/components/slider";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Img1 from "@/public/assets/aktuelle-projekte/petit/slider-3/1.png";
import Img2 from "@/public/assets/aktuelle-projekte/petit/slider-3/2.png";
import Img3 from "@/public/assets/aktuelle-projekte/petit/slider-3/3.png";
import Img4 from "@/public/assets/aktuelle-projekte/petit/slider-3/4.png";
import Img5 from "@/public/assets/aktuelle-projekte/petit/slider-3/5.png";

const Project1Sec9 = () => {
  return (
    <div>
      <ProjectSlider arrowColor="white">
        <SwiperSlide>
          {/* <div
            className={`h-full w-full bg-contain bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${Img1.src})` }}
          /> */}
          <Image src={Img1} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img2} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img3} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img4} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img5} alt="img1" />
          {/* <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="font-proxima-semibold text-lg text-brown lg:text-xl">
              <TextWithLineBreaks text="Drei Zimmer und ein wunderschöner | Blick Richtung Hofwegkanal" />
            </p>
            <p className="mt-9 max-w-[74.375rem] font-ivy-presto text-black sm:text-xl lg:text-[2.1875rem] lg:leading-[2.625rem]">
              <TextWithLineBreaks text="Wie großzügig können drei Zimmer sein? Diese Wohnung sagt: Außerordentlich. | Mit zwei ausladenden Balkonen mit Natursteinbelag, einer davon | sogar | zum Hofwegkanal, großen Fensterfronten mit Schiebeelementen, zwei Schlafzimmern sowie einem offenen Wohn- und Essbereich, der dem | Leben | alle Möglichkeiten gibt." />
              <br />
              <TextWithLineBreaks text="Großzügig sind hier auch die 2,70 m bzw. 2,23 m hohen Decken | und die Türen, die zusammen mit dem noblen Fischgrät-Parkett und | den | polierten Beschlägen – selbstverständlich im Stil des Bauhauses – | allzeit für ein wahrhaft mondänes Lebensgefühl sorgen." />
              <br />
              <TextWithLineBreaks text="Dem stehen auch die beiden Bäder in nichts nach: Mit edlem Marmor, | bodentiefen Walk-In-Duschen, verchromten Handtuchheizkörpern, | Armaturen von | Dornbracht und dezent eingelassenen Deckenstrahlern. Kurz, hier verschmelzen Lage, Luxus und Blick zu einer Symbiose, die selbst anspruchsvollste Geschmäcker besonders finden werden." />
            </p>
          </div> */}
        </SwiperSlide>
      </ProjectSlider>
    </div>
  );
};

export default Project1Sec9;
