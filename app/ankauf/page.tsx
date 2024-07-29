import React from "react";
import Image from "next/image";
import AnkaufProfile from "@/public/assets/ankauf/ankaufsprofil.png";
import LinkButton from "@/components/link-button";
import { Ankaufsprofil } from "../utils/data";

const Ankauf = () => {
  return (
    <section className=" bg-light-blue pb-[3.181rem] pt-[6.75rem] lg:pb-[6.25] lg:pt-[10.656rem]">
      <div className="container">
        {/* section 1 */}
        <div className="relative mb-14 flex items-center justify-center lg:mb-[6.563rem] ">
          <Image src={AnkaufProfile} alt="ankaufProfile" />

          <div className="absolute max-w-[67.438rem] text-center lg:-mt-32">
            <h4 className=" mb-[clamp(2px,4.4vw,5.188rem)] font-proxima-semibold text-[clamp(0.625rem,1.4vw,1.313rem)] uppercase leading-tight tracking-wide 4xl:h-[1.313rem] 4xl:leading-[1.563rem]">
              Ankaufsprofile
            </h4>
            <h2 className="font-gt-book text-[clamp(1rem,3vw,2.188rem)] leading-[clamp(0.875rem,3.4vw,3.125rem)] tracking-tight  text-gray 4xl:h-[8.438rem]">
              Mit Seriosität, Verbindlichkeit
              <br /> und besten Referenzen: <br />
              Wir kaufen Immobilien und Grundstücke.
            </h2>
          </div>
        </div>

        {/* section 2 */}

        <div className="mx-auto my-14 max-w-[59.063rem] text-center font-gt-super sm:text-lg lg:mb-[15.063rem] lg:mt-[12.313rem] lg:text-[1.563rem] lg:leading-[2.5rem] lg:tracking-tight 4xl:h-[24.063rem]">
          <p>
            Was gibt es Schöneres als etwas Gutes noch besser zu machen?{" "}
            <br className="hidden lg:block" /> Wir haben diesen Ehrgeiz.
            Besonders, wenn es um Immobilien mit Potenzial geht.
            <br className="hidden lg:block" /> nentdeckte Schmuckstücke mit
            jeder Menge Patina, Sanierungsstau{" "}
            <br className="hidden lg:block" /> oder unerschlossenen Baureserven.
          </p>

          <p className="mt-4 md:mt-10">
            Jahrzehnte im Markt, mehr als 200 erfolgreich durchgeführte
            Projekte.
            <br className="hidden lg:block" /> Wir sind sicher, dass viel für
            uns spricht, wenn es um den Ankauf{" "}
            <br className="hidden lg:block" /> Ihrer Immobilie oder Ihres
            Grundstücks geht. Auch, und ganz besonders, dass wir ein
            Familienunternehmen sind. Mit kurzen Wegen und schnellen
            Entscheidungen,
            <br className="hidden lg:block" /> was die Abwicklung Ihres
            Ankaufsprozesses betrifft.
          </p>
        </div>

        {/* section 3 */}
        <div className="flex flex-col gap-14 lg:gap-[4.5rem]">
          {Ankaufsprofil?.map((profil, index) => (
            <div
              key={index}
              className=" flex flex-col bg-white px-5 py-14 pt-[2.188rem] sm:px-10 lg:px-[4.875rem] lg:pb-[6.25rem] 4xl:h-[75.8125rem]"
            >
              <div className="mb-14 flex flex-col lg:mb-[6.25rem] lg:flex-row">
                <div className=" flex h-[28.75rem] flex-1 items-center justify-center ">
                  <div className="w-full max-w-[32.25rem] text-center lg:-mt-24">
                    <h4 className=" font-gt-display-light text-[12.5rem] leading-none text-light-yellow xs:text-[18.75rem] md:text-[28.75rem] ">
                      {String(index + 1).padStart(2, "0")}
                    </h4>
                    <h2 className="font-gt-book text-2xl text-medium-blue xs:-mt-8 xs:text-3xl md:-mt-16 md:text-[2.813rem] md:leading-[4.813rem] ">
                      {profil?.name}
                    </h2>
                  </div>
                </div>

                <div className="mt-14 w-full flex-1 space-y-5 divide-y-[.0625rem] divide-medium-blue border-medium-blue lg:mt-[5.3125rem] lg:border-l lg:pl-[3.25rem] xl:space-y-[2.375rem] 4xl:h-[51.063rem] 4xl:max-w-[47.3125rem]">
                  <div>
                    <span className={`ankauf-point !mt-0`}>asset-klassen</span>
                    <span className="ankauf-desc 4xl:h-6 ">
                      {profil?.["asset-klaseen"]}
                    </span>
                  </div>

                  <div>
                    <span className={`ankauf-point 4xl:h-6`}>Standorte</span>
                    <span className="ankauf-desc 4xl:h-[3.813rem]">
                      {profil?.standorte}
                    </span>
                  </div>

                  <div>
                    <span className={`ankauf-point`}>Mikrolagen</span>
                    <span className="ankauf-desc 4xl:h-6">
                      {profil?.mikrolagen}
                    </span>
                  </div>

                  <div>
                    <span className={`ankauf-point`}>Maßnahmen</span>
                    <span className="ankauf-desc 4xl:h-[3.813rem]">
                      {profil?.maßnahmen}
                    </span>
                  </div>

                  <div>
                    <span className={`ankauf-point`}>Kriterien</span>
                    <span className="ankauf-desc 4xl:h-[3.813rem]">
                      {profil?.kriterien}
                    </span>
                  </div>

                  <div>
                    <span className={`ankauf-point`}>Investitionsvolumen</span>
                    <span className="ankauf-desc 4xl:h-6">
                      {profil?.investitionsvolumen}
                    </span>
                  </div>
                </div>
              </div>

              <LinkButton
                as={"button"}
                variant="sm"
                text="download Ankaufsprofil"
                styles="self-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ankauf;
