import Image from "next/image";
import HeroImage from "@/public/assets/homepage/hero.png";
import Fabian from "@/public/assets/homepage/fabian.png";
import AnkaufsProfile from "@/public/assets/homepage/ankaufsprofile.png";
import { aktuelleprojekte } from "./utils/data";
import Kontakt from "@/components/Kontakt";
import LinkButton from "@/components/link-button";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" bg-light-blue pb-[3.181rem] pt-[6.75rem] lg:pt-[12.0625rem]">
      <div className="container">
        {/* section 1 */}
        <div className="relative mb-[2.813rem] flex items-center justify-center lg:mb-[6.563rem]">
          <Image src={HeroImage} alt="hero" />

          <div className="absolute top-36 max-w-[63.75rem] text-center">
            <h2 className="font-gt-display-light text-[clamp(1rem,3vw,3.438rem)] uppercase leading-[clamp(1rem,3.4vw,4.063rem)] tracking-tight text-black 4xl:h-[11.563rem]">
              Klassische Architektur,
              <br />
              modern interpretiert.
            </h2>
          </div>
        </div>

        {/* section 2 */}
        <div className="mb-[2.813rem] flex items-center justify-center bg-light-yellow px-4 py-16 xs:px-7 sm:h-[63.313rem] lg:mb-[5.625rem] ">
          <div className="mx-auto max-w-[60.313rem] text-center">
            <h4 className=" mb-3 font-proxima-semibold uppercase tracking-wide text-brown sm:text-xl lg:mb-[2.188rem] 4xl:h-5">
              Beste Lagen verdienen beste Planung.
            </h4>
            <p className="font-gt-display-rg !leading-relaxed text-medium-blue xs:text-2xl sm:text-3xl md:text-[1.75rem] md:!leading-[2.375rem] 4xl:h-[21.0625rem]">
              <span className=" block">
                Bei FSG | Projekte haben wir ein einfaches Credo:
                <br className="hidden lg:block" /> Nur wenn uns eine Bauidee zu
                100 Prozent fasziniert, gehen wir sie an.
              </span>

              <span className="block">
                Dann aber mit ganzer Kraft und Verve.
                <br className="hidden lg:block" />
                Das beginnt bei der Auswahl erstklassiger Grundstücke in den
                feinsten Lagen,
                <br className="hidden lg:block" />
                geht über die Beauftragung bekannter Architekten und
                <br className="hidden lg:block" />
                bewährter Gewerke, bis hin zur exklusiven Ausgestaltung der
                Objekte
                <br className="hidden lg:block" />
                durch kreative Innenarchitekten und Designer.
                <br className="hidden lg:block" />
                Das Ergebnis: außergewöhnliche Wohnimmobilien,
                <br className="hidden lg:block" />
                die für sich sprechen – und zum Dialog einladen.
              </span>
            </p>
          </div>
        </div>

        {/* section 3 */}
        <div className="mb-[2.813rem] flex flex-col bg-dark-blue md:flex-row lg:mb-[4.688rem] 4xl:h-[65.563rem]">
          <div className=" flex-1 md:order-1">
            <Image src={Fabian} alt="fabian" objectPosition="bottom" />
          </div>

          <div className="flex flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 lg:px-7 2xl:px-0 4xl:items-start">
            <div className="w-full text-center lg:max-w-[39.188rem] 4xl:mb-[20.406rem]  4xl:mt-[21.863rem]">
              <p className="mt-3 font-proxima text-sm lg:text-[0.938rem] lg:leading-[1.563rem] xl:mt-[3.438rem] 4xl:h-[10.313rem]">
                „Sich zu Hause zu fühlen – zu wissen, genau hier,
                <br className="hidden 2xl:block" />
                genau so will ich wohnen: Mit diesem Anspruch gehen wir jedes
                Bauprojekt an.
                <br className="hidden 2xl:block" /> Es definiert unser Ziel,
                wenn wir darüber nachdenken, welche
                <br className="hidden 2xl:block" /> Blickachsen es braucht, um
                Licht und Leben in eine Wohnung zu lassen.
                <br className="hidden 2xl:block" /> Mit welchen Materialien wir
                arbeiten, wo der Elektroschalter sitzen
                <br className="hidden 2xl:block" />
                muss und welche Pflanzen im Garten stehen.“
              </p>
              <p className="mb-[3.5812rem] mt-[1.25rem] font-proxima">
                FABIAN SCHNEIDER
              </p>
              <Link
                href={"/unternehmen"}
                className="inline-block border-b-[2px] border-brown pb-2 text-[0.938rem] uppercase text-brown lg:pb-[0.8rem] 4xl:h-[1.734rem] 4xl:leading-[1.125rem]"
              >
                UNTERNEHMEN
              </Link>
            </div>
          </div>
        </div>

        {/* section 4 */}
        <div className=" mb-[2.813rem] bg-light-yellow px-[4vw] py-8 xs:py-[7vw] lg:mb-[6.25rem] 2xl:px-[4.813rem] 2xl:py-[6.25rem]">
          <h2 className=" text-center font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] 4xl:h-5">
            Aktuelle Projekte
          </h2>

          <div className="mt-[6vw] flex flex-col gap-[4vw] 2xl:mt-24 2xl:gap-[6.25rem]">
            {aktuelleprojekte?.map((project, index) => (
              <Link
                href={`/projekt-details/${project?.id}`}
                key={project?.id}
                className=" group relative"
              >
                <Image src={project.displayImage} alt="" />
                <div className=" absolute inset-0 flex items-center justify-center bg-medium-blue bg-opacity-40">
                  <Image
                    width={index === 0 ? 155.4 : 380}
                    src={project?.projectName}
                    alt=""
                    className={`relative z-20 2xl:max-w-none ${index === 0 ? "max-w-[12vw]" : "max-w-[25vw]"}`}
                  />
                </div>

                <div
                  className={`absolute inset-0 flex items-end opacity-0 duration-300 group-hover:opacity-100 ${index === 1 ? "bg-dark-green" : "bg-black"}`}
                >
                  <div className="flex w-full justify-between px-[2.5vw] pb-[1.5vw] text-gray 2xl:pb-12 2xl:pl-[3.25rem] 2xl:pr-[4.25rem]">
                    <div
                      className={`${index === 1 ? "max-w-[8.125rem] sm:max-w-[18.563rem]" : "max-w-[8.125rem] sm:max-w-[12.375rem]"}`}
                    >
                      <span className="block font-proxima-semibold text-[clamp(8px,1.1vw,20px)] leading-none 2xl:leading-[1.25rem] 4xl:h-[2.625rem]">
                        {project?.type}
                      </span>
                      <span className="mt-[0.5vw] block font-proxima-thin text-[clamp(7px,0.9vw,16px)] 2xl:mt-[1.063rem] 4xl:h-4">
                        {project?.units}
                      </span>
                    </div>

                    <div className="max-w-[8.188rem] text-right">
                      <h2 className="font-proxima-semibold text-[clamp(8px,1.1vw,20px)] leading-none 2xl:leading-[1.25rem] 4xl:h-[2.625rem]">
                        {project?.area}
                      </h2>
                      <span className="mt-[0.5vw] block font-proxima-thin text-[clamp(7px,0.9vw,16px)] tracking-tight 2xl:mt-[1.063rem] 4xl:h-4">
                        {project?.space}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            <LinkButton
              as={"button"}
              variant="sm"
              text="Kontakt aufnehmen"
              styles={"self-center mt-7 md:mt-0 bg-opacity-80"}
            />
          </div>
        </div>

        {/* section 5 */}
        <div className="mb-[2.813rem] flex flex-col bg-dark-blue md:flex-row md:py-12 md:pr-[3vw] lg:mb-[6.25rem] lg:py-[6.25rem] 3xl:pr-[6.25rem]">
          <div className="flex-1 md:order-1 lg:max-w-[31.25rem] 3xl:max-w-[39rem]">
            <Image src={AnkaufsProfile} alt="fabian" className="mx-auto" />
          </div>

          <div className="flex flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 md:py-0 lg:px-7 2xl:px-10 3xl:px-0">
            <div className="w-full text-center lg:max-w-[36.563rem]  ">
              <h2 className="mb-4 font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] xl:mb-9 2xl:mb-[3.563rem] 4xl:h-5">
                WIR SUCHEN GRUNDSTÜCKE UND IMMOBILIEN.
              </h2>
              <p className="my-3 font-proxima text-sm lg:my-3 lg:text-[0.938rem] lg:leading-[1.563rem] xl:my-7 2xl:my-[2.3125rem]">
                <span className="block">
                  Etwas Gutes noch besser zu machen.
                  <br className="hidden xl:block" /> In diesem Sinne suchen wir
                  Grundstücke und Bestandsimmobilen in guten
                  <br className="hidden xl:block" /> bis sehr guten Lagen. In
                  Hamburg, besonders um die Alster herum.
                </span>

                <span className="mt-2 block xl:mt-5">
                  Auf eine diskrete und unkomplizierte Abwicklung der
                  Transaktion
                  <br className="hidden xl:block" /> Können Sie sich verlassen.
                  Wir freuen uns auf Ihre Nachricht!
                </span>
              </p>

              <span className="inline-block border-b-[2px] border-brown pb-2 uppercase text-brown lg:pb-[0.8rem] 4xl:h-[1.734rem] 4xl:leading-[1.125rem]">
                PDF ansehen
              </span>
            </div>
          </div>
        </div>

        <Kontakt />
      </div>
    </section>
  );
}
