import ProjectSlider from "@/components/slider";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Img1 from "@/public/assets/aktuelle-projekte/petit/slider-2/1.png";
import Img3 from "@/public/assets/aktuelle-projekte/petit/slider-2/3.png";
import Img4 from "@/public/assets/aktuelle-projekte/petit/slider-2/4.png";
import TextWithLineBreaks from "@/components/line-break";

const Project1Sec9 = () => {
  return (
    <ProjectSlider arrowColor="white">
      <SwiperSlide>
        <Image src={Img1} alt="img1" />
      </SwiperSlide>
      <SwiperSlide className="bg-light-yellow">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <p className="font-proxima-semibold text-xl text-brown">
            <TextWithLineBreaks text="Hier ist selbst das kleinste Detail groß: | Und darf es auf 233 m2 auch sein" />
          </p>
          <p className="mt-9 max-w-[74.375rem] font-ivy-presto text-[2.1875rem] leading-[2.625rem] text-black">
            <TextWithLineBreaks
              text="Hoch oben im sechsten Stock, selten hat eine Wohnung den Blick auf
            Hamburg | so gefeiert wie diese. Mit einer hellen, ruhigen ca. 27 m2
            großzügigen Terrasse nach Westen – mit einer atemberaubenden
            Aussicht auf die Skyline – sowie | einem großen Ost-Balkon, der sich
            nicht nur von einem der drei Schlafzimmer | betreten lässt, sondern
            von allen."
            />
            <br />
            <TextWithLineBreaks
              text="Außen wie innen regiert das Wort „sehr“: Mit sehr
            großen Fensterfronten mit | Schiebeelementen, dem sehr großzügig und
            repräsentativ gestaltetem Wohn- und Essbereich bis hin zum liebevoll
            im Fischgrät-Muster verlegten Parkett. | Alles dient dem hohen
            Anspruch: Die hohen Decken, die hohen Türen, die hochglänzenden
            Bauhausbeschläge."
            />
            <br />
            <TextWithLineBreaks
              text="Kurz, hier ist das Niveau 6 Stockwerke hoch. Mit
            Allem, was das gute Leben | nicht nur besser, sondern ganz besonders
            macht."
            />
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Img3} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full flex-col items-center  justify-center bg-light-yellow md:flex-row 4xl:pl-[12.6875rem]">
          <div className="flex-1">
            <Image src={Img4} alt="" className="mx-auto" />
          </div>

          <div className="ml-[4.9375rem] flex-1">
            <div className="w-full text-center text-medium-blue lg:max-w-[33.938rem]  ">
              <p className="font-proxima text-[.938rem] lg:mt-5 lg:leading-[1.563rem]">
                <TextWithLineBreaks
                  text={
                    "Die Bäder beeindrucken mit echtem Marmor, ausgewählten Objekten, | Armaturen von Dornbracht und: Bodengleichen Walk-In-Duschen, völlig kantenlos | und auf den Millimeter präzise gefertigt. Begleitet von einem verchromten Handtuchwärmer als optischen Blickfang und schönes Beispiel für | vollendetes Design."
                  }
                />
              </p>
              <p className="mt-3 font-proxima text-[.938rem]">
                <span className="block">
                  <TextWithLineBreaks
                    text={
                      "Wie besonders der Anspruch ist, zeigt sich bis in die Hauswirtschaftsräume. | Weil sie nicht einfach gefliest daherkommen, sondern in feinem Parkett. | Kurz, jedes Detail wurde immer und immer wieder überlegt, verworfen und neu gedacht. Bis hin zum Kugelahorn im Vorgarten. Ein Baum wie ein Solitär. | Ganz, wie es sich für ein Petit Palais gehört."
                    }
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </ProjectSlider>
  );
};

export default Project1Sec9;
