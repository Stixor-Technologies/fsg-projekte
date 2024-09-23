"use client";
import React from "react";
import Kontakt from "@/components/Kontakt";
import Image from "next/image";
import Fabian from "@/public/assets/unternehmen-slider-image.png";
import { SwiperSlide } from "swiper/react";
import ProjectSlider from "@/components/slider";

const Unternehmen = () => {
  const sliderData = [
    {
      image: Fabian,
      description:
        "„Sich zu Hause zu fühlen – zu wissen, genau hier, | genau so will ich wohnen: Mit diesem Anspruch gehen wir jedes Bauprojekt an. | Es definiert unser Ziel, wenn wir darüber nachdenken, welche | Blickachsen es braucht, um Licht und Leben in eine Wohnung zu lassen. | Mit welchen Materialien wir arbeiten, wo der Elektroschalter sitzen | muss und welche Pflanzen im Garten stehen.“ ",
      subTitle: "FABIAN SCHNEIDER",
    },
    {
      image: Fabian,
      description:
        "„Sich zu Hause zu fühlen – zu wissen, genau hier, | genau so will ich wohnen: Mit diesem Anspruch gehen wir jedes Bauprojekt an. | Es definiert unser Ziel, wenn wir darüber nachdenken, welche | Blickachsen es braucht, um Licht und Leben in eine Wohnung zu lassen. | Mit welchen Materialien wir arbeiten, wo der Elektroschalter sitzen | muss und welche Pflanzen im Garten stehen.“ ",
      subTitle: "FABIAN SCHNEIDER",
    },
    {
      image: Fabian,
      description:
        "„Sich zu Hause zu fühlen – zu wissen, genau hier, | genau so will ich wohnen: Mit diesem Anspruch gehen wir jedes Bauprojekt an. | Es definiert unser Ziel, wenn wir darüber nachdenken, welche | Blickachsen es braucht, um Licht und Leben in eine Wohnung zu lassen. | Mit welchen Materialien wir arbeiten, wo der Elektroschalter sitzen | muss und welche Pflanzen im Garten stehen.“ ",
      subTitle: "FABIAN SCHNEIDER",
    },
    {
      image: Fabian,
      description:
        "„Sich zu Hause zu fühlen – zu wissen, genau hier, | genau so will ich wohnen: Mit diesem Anspruch gehen wir jedes Bauprojekt an. | Es definiert unser Ziel, wenn wir darüber nachdenken, welche | Blickachsen es braucht, um Licht und Leben in eine Wohnung zu lassen. | Mit welchen Materialien wir arbeiten, wo der Elektroschalter sitzen | muss und welche Pflanzen im Garten stehen.“ ",
      subTitle: "FABIAN SCHNEIDER",
    },
    {
      image: Fabian,
      description:
        "„Sich zu Hause zu fühlen – zu wissen, genau hier, | genau so will ich wohnen: Mit diesem Anspruch gehen wir jedes Bauprojekt an. | Es definiert unser Ziel, wenn wir darüber nachdenken, welche | Blickachsen es braucht, um Licht und Leben in eine Wohnung zu lassen. | Mit welchen Materialien wir arbeiten, wo der Elektroschalter sitzen | muss und welche Pflanzen im Garten stehen.“ ",
      subTitle: "FABIAN SCHNEIDER",
    },
    {
      image: Fabian,
      description:
        "„Sich zu Hause zu fühlen – zu wissen, genau hier, | genau so will ich wohnen: Mit diesem Anspruch gehen wir jedes Bauprojekt an. | Es definiert unser Ziel, wenn wir darüber nachdenken, welche | Blickachsen es braucht, um Licht und Leben in eine Wohnung zu lassen. | Mit welchen Materialien wir arbeiten, wo der Elektroschalter sitzen | muss und welche Pflanzen im Garten stehen.“ ",
      subTitle: "FABIAN SCHNEIDER",
    },
  ];

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

        <div className="mb-[2.813rem] bg-white px-[3.75rem] pb-12 pt-[6.25rem] text-black lg:mb-[6.875rem] 4xl:h-[65.25rem] 4xl:px-[7.9375rem] 4xl:pt-[10.75rem]">
          <ProjectSlider>
            {sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image
                    src={item.image}
                    alt="fabian"
                    width={284}
                    className="mx-auto"
                  />
                  <p className="mb-[1.9375rem] mt-[4rem]">
                    {item.description.split(" | ").map((text, index) => (
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
                    {item.subTitle}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </ProjectSlider>
          {/* <Swiper spaceBetween={50} slidesPerView={1}>
            {sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-4 md:mb-[9vw] md:flex-row md:pl-[3vw] xl:mb-[12.5rem] 3xl:pl-[9.875rem]">
                  <div className="flex-1 lg:max-w-[31.25rem] 3xl:max-w-[39.5rem]">
                    <Image
                      src={item.image}
                      alt="fabian"
                      width={632}
                      className="mx-auto"
                    />
                  </div>

                  <div className="flex flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 md:py-0 lg:px-7 2xl:px-10 3xl:px-0">
                    <div className="w-full text-center lg:max-w-[45.875rem]  ">
                      <h2 className=" mb-4 font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] xl:mb-9 2xl:mb-[5.5rem] 4xl:h-5">
                        {item.subTitle}
                      </h2>

                      <p className="block font-gt-book-italic text-medium-blue lg:text-xl lg:leading-[1.875rem] 4xl:h-[6.875rem]">
                        {item.description}
                      </p>

                      <p className="mt-5 block text-[0.938rem] leading-tight text-medium-blue lg:mt-[2.375rem] lg:leading-[1.563rem] 4xl:h-[5.625rem]">
                        Mit einer Professional
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          {/* <div className="flex flex-col gap-4 md:mb-[9vw] md:flex-row md:pl-[3vw] xl:mb-[12.5rem] 3xl:pl-[9.875rem]">
            <div className="flex-1 lg:max-w-[31.25rem] 3xl:max-w-[39.5rem]">
              <Image
                src={Fabian}
                alt="fabian"
                width={632}
                className="mx-auto"
              />
            </div>

            <div className="flex flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 md:py-0 lg:px-7 2xl:px-10 3xl:px-0">
              <div className="w-full text-center lg:max-w-[45.875rem]  ">
                <h2 className=" mb-4 font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] xl:mb-9 2xl:mb-[5.5rem] 4xl:h-5">
                  Fabian Schneider
                </h2>

                <p className="block font-gt-book-italic text-medium-blue lg:text-xl lg:leading-[1.875rem] 4xl:h-[6.875rem]">
                  Dafür setzen wir auf schnelle, schlanke Strukturen:{" "}
                  <br className="hidden 2xl:block" /> Auf Entscheidungsträger
                  statt auf Befehlsempfänger. Unterstützt von einem{" "}
                  <br className="hidden 2xl:block" /> breiten Netzwerk, das wir
                  seit vielen Jahren kennen und uns genau den richtigen Support
                  zur richtigen Zeit gibt. So, wie wir ihn gerade brauchen.
                </p>

                <p className="mt-5 block text-[0.938rem] leading-tight text-medium-blue lg:mt-[2.375rem] lg:leading-[1.563rem] 4xl:h-[5.625rem]">
                  Mit einer Professionalität, die man jedem unserer Gebäude und
                  Bauvorhaben ansehen kann: <br className="hidden 2xl:block" />{" "}
                  Unikate in den besten Lagen, mit einer modern interpretierten,
                  klassischen Formensprache, <br className="hidden 2xl:block" />{" "}
                  Grundrissen, die ein Leben oberhalb der Norm ermöglichen sowie
                  einer vielleicht altmodisch zu nennenden Verbindlichkeit
                  unsererseits, die das nötige Vertrauen dafür schafft.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[74.375rem] px-5 text-center 2xl:px-0">
            <h4 className=" mb-3 font-proxima-semibold uppercase tracking-wide text-brown sm:text-xl lg:mb-5 xl:mb-12 4xl:h-5">
              Philosophie
            </h4>
            <p className="font-gt-book !leading-relaxed text-medium-blue xs:text-2xl md:text-[2.188rem] md:!leading-[3.125rem] 4xl:h-[14.688rem]">
              Weil Bauen für uns kein Selbstzweck ist, entwickeln wir{" "}
              <br className="hidden lg:block" />
              ausschließlich Objekte, die das Leben ihrer Bewohner{" "}
              <span className=" underline">maßgeblich</span> bereichern.
              Schließlich gehört Wohnen zu den wichtigsten menschlichen
              Grundbedürfnissen. Denn nur Weniges stimuliert das Gefühlsleben so{" "}
              <span className=" underline">positiv</span> und{" "}
              <span className="underline">dauerhaft</span> wie die Schönheit der
              eigenen vier Wände.
            </p>
          </div> */}
        </div>
        <div className="container">
          <Kontakt />
        </div>
      </div>
    </section>
  );
};

export default Unternehmen;
