"use client";
import React from "react";
import Kontakt from "@/components/Kontakt";
import Image from "next/image";
import Fabian from "@/public/assets/unternehmen-slider-image.png";
import { SwiperSlide } from "swiper/react";
import ProjectSlider from "@/components/slider";
import UnternehmenImg2 from "@/public/assets/unternehmen-slide-2.png";
import TextWithLineBreaks from "@/components/line-break";

const Unternehmen = () => {
  return (
    <section className=" bg-light-blue pb-[3.181rem] pt-[6.75rem] lg:pt-[12.0625rem]">
      <div>
        {/* section 1 */}
        <div className="container">
          <div className="mb-[2.813rem] flex items-center justify-center bg-light-yellow px-4 py-16 xs:px-7 sm:h-[56.75rem] lg:mb-[6.25rem]">
            <div className="mx-auto max-w-[71.563rem] text-center">
              <h4 className=" mb-3 font-proxima-semibold uppercase tracking-wide text-brown sm:text-xl lg:mb-10 4xl:h-5">
                UNSER UNTERNEHMEN
              </h4>
              <p className="font-gt-display-light !leading-relaxed text-medium-blue xs:text-2xl sm:text-3xl md:text-[1.75rem] md:!leading-[2.375rem] 4xl:h-[17.813rem]">
                Seit über zwanzig Jahren sind wir in der norddeutschen
                Immobilienwirtschaft
                <br className="hidden xl:block" /> fest etabliert. Mediales
                Scheinwerferlicht liegt uns fern – lieber wollen wir die Augen
                <br className="hidden xl:block" /> das perfekte Zusammenspiel
                mit bewährten Gewerken bis hin zur
                <br className="hidden xl:block" />
                unserer Kunden zum Leuchten bringen. Die akribische Planung und
                Ausführung unser <br className="hidden xl:block" /> Bauvorhaben
                hat daher höchste Priorität: Dafür nehmen wir uns sehr viel
                <br className="hidden xl:block" /> Zeit. Manche mögen das
                pedantisch nennen – für uns ist es ein
                <br className="hidden xl:block" /> Qualitätsversprechen, das
                durch nichts zu ersetzen ist.
                <br className="hidden xl:block" />
                Auf den ersten Blick bekommt man davon wenig mit.
                <br className="hidden xl:block" />
                Aber gerade diese unsichtbaren Details hinter den Kulissen
                machen
                <br className="hidden xl:block" />
                den Komfort und Wert unserer Immobilien aus.
              </p>
            </div>
          </div>
        </div>

        {/* section 2 */}

        <div className="mb-[2.813rem] bg-white text-black">
          <ProjectSlider>
            <SwiperSlide className="bg-white pt-[10.75rem]">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <Image
                  src={Fabian}
                  alt="fabian"
                  width={284}
                  className="mx-auto"
                />
                <p className="mb-[1.9375rem] mt-[4rem]">
                  {"„Sich zu Hause zu fühlen – zu wissen, genau hier, | genau so will ich wohnen: Mit diesem Anspruch gehen wir jedes Bauprojekt an. | Es definiert unser Ziel, wenn wir darüber nachdenken, welche | Blickachsen es braucht, um Licht und Leben in eine Wohnung zu lassen. | Mit welchen Materialien wir arbeiten, wo der Elektroschalter sitzen | muss und welche Pflanzen im Garten stehen.“ "
                    .split(" | ")
                    .map((text, index) => (
                      <span
                        key={index}
                        className="font-gt-display-light-italic text-[1.75rem] leading-[2.375rem]"
                      >
                        {text}
                        <br />
                      </span>
                    ))}
                </p>
                <p className="font-proxima-semibold text-xl text-brown">
                  FABIAN SCHNEIDER
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: `url(${UnternehmenImg2.src})`,
                }}
                className="h-[65.25rem] w-full bg-cover bg-no-repeat"
              ></div>
              {/* <Image
                src={UnternehmenImg2}
                alt="fabian"                
                className="object-cover aspect-auto"
              /> */}
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex w-full flex-col items-center justify-center pt-[21.625rem]">
                <p className="font-proxima-semibold text-xl text-brown">
                  Unser bisher schönstes Bauprojekt? Alle.
                </p>
                <p className="mx-auto mt-9 max-w-[80vw] text-center 4xl:h-[18.375rem] 4xl:w-[60.75rem]">
                  <TextWithLineBreaks text="Jedem Bauvorhaben liegt ein Zauber inne. Denn es geht nicht nur darum, | eine Immobilie zu bauen. Sondern sie auch als Teil eines ganzen Quartiers zu | begreifen. Für uns ist das etwas Großartiges – und Verantwortungsvolles. | Denn wie wir in der Stadt von morgen leben, hat vor allem damit zu tun, | wie wir sie heute planen. Unsere Mission ist es, unverwechselbare Immobilien | zu erschaffen, die zum jeweiligen Standort passen und die Nachbarschaft | nachhaltig bereichern. Jedes Projekt steckt daher voller Herzblut und wir sind | stolz auf jedes einzelne." />
                </p>
              </div>
            </SwiperSlide>
          </ProjectSlider>
        </div>
        <div className="container">
          <Kontakt />
        </div>
      </div>
    </section>
  );
};

export default Unternehmen;
