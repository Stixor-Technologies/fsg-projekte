import React from "react";
import Image from "next/image";
import AnkaufProfile from "@/public/assets/ankauf/ankaufsprofil.png";
import LinkButton from "@/components/link-button";
import { Ankaufsprofil } from "../utils/data";

const Ankauf = () => {
  return (
    <section className=" bg-light-blue pb-[3.181rem] pt-[6.75rem] lg:pt-[12.0625rem]">
      <div className="container">
        {/* section 1 */}
        <div className="relative mb-14 flex items-center justify-center lg:mb-[6.563rem] ">
          <Image src={AnkaufProfile} alt="ankaufProfile" />

          <div className="absolute max-w-[67.438rem] text-center lg:-mt-32">
            <h4 className=" mb-[clamp(2px,4.4vw,5.188rem)] font-proxima-semibold text-[clamp(0.625rem,1.4vw,1.313rem)] uppercase leading-tight tracking-wide 4xl:h-[1.313rem] 4xl:leading-[1.563rem]">
              Ankaufsprofile
            </h4>
            <h2 className="font-gt-display-light text-[clamp(1rem,3vw,2.5rem)] leading-[clamp(0.875rem,3.4vw,3.125rem)] tracking-tight  text-gray 4xl:h-[8.438rem]">
              Mit Seriosität, Verbindlichkeit
              <br /> und besten Referenzen: <br />
              Wir kaufen Immobilien und Grundstücke.
            </h2>
          </div>
        </div>

        {/* section 2 */}

        <div className="mx-auto my-14 max-w-[82.25rem] text-center font-gt-display-light sm:text-lg lg:mb-[15.063rem] lg:mt-[12.313rem] lg:text-[1.75rem] lg:leading-[2.375rem] lg:tracking-tight 4xl:h-[19.875rem]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            ligula ante. <br className="hidden lg:block" /> Mauris at congue
            orci. Nulla commodo nunc ac ex eleifend porta. Ut varius gravida
            rutrum.
            <br className="hidden lg:block" /> Nam mi odio, ultricies et
            consequat vitae, rutrum sit amet ligula. Integer efficitur bibendum
            augue,
            <br className="hidden lg:block" /> varius tempor dui consectetur
            non. Praesent eu viverra nisi. Sed finibus metus id arcu suscipit
            venenatis.
            <br className="hidden lg:block" /> Duis luctus felis sit amet
            vestibulum ullamcorper. In vehicula semper lacus, a venenatis
            tortor.
            <br className="hidden lg:block" /> Etiam gravida purus ac dapibus
            interdum. Suspendisse a nibh lorem.
          </p>
        </div>

        {/* section 3 */}
        <div className="flex flex-col gap-14 lg:gap-[4.5rem]">
          {Ankaufsprofil?.map((profil, index) => (
            <div
              key={index}
              className=" flex flex-col bg-white px-5 py-14 pt-[2.188rem] sm:px-10 lg:px-[6.375rem] lg:pt-[7.5rem] 4xl:h-[75.8125rem]"
            >
              <div>
                <div className="w-full flex-1 divide-y-[.0625rem] divide-medium-blue border-medium-blue">
                  <div className="grid sm:grid-cols-2">
                    <span className={`ankauf-point !mt-0`}>
                      Transaktionsstruktur
                    </span>
                    <div className="mb-[1.625rem]">
                      {profil?.Transaktionsstruktur.split(" | ").map((item) => (
                        <p className="ankauf-desc">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <span className={`ankauf-point`}>Volumen</span>
                    <span className="ankauf-desc">{profil?.Volumen}</span>
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <span className={`ankauf-point`}>GrundstückE</span>
                    <div className="my-[1.625rem]">
                      {profil?.GrundstückE.split(" | ").map((item) => (
                        <p className="ankauf-desc">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <span className={`ankauf-point`}>Bestandsobjekte</span>
                    <div className="my-[1.625rem]">
                      {profil?.Bestandsobjekte.split(" | ").map((item) => (
                        <p className="ankauf-desc">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <span className={`ankauf-point`}>Regionen</span>
                    <div className="my-[1.625rem]">
                      {profil?.Regionen.split(" | ").map((item) => (
                        <p className="ankauf-desc">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2">
                    <span className={`ankauf-point`}>Ausschlußkriterien</span>
                    <div className="my-[1.625rem]">
                      {profil?.Ausschlußkriterien.split(" | ").map((item) => (
                        <p className="ankauf-desc">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ankauf;
