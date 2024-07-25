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
    <section className=" bg-light-blue pb-[3.181rem] pt-[6.75rem] lg:pt-[10.656rem]">
      <div className="container">
        {/* section 1 */}
        <div className="relative mb-[2.813rem] flex items-center justify-center lg:mb-[6.563rem]">
          <Image src={HeroImage} alt="hero" />

          <div className="absolute max-w-[63.75rem] text-center sm:-mt-16">
            <h4 className=" mb-[clamp(2px,1.8vw,2.125rem)] font-proxima-semibold text-[clamp(0.625rem,1.4vw,1.563rem)] uppercase leading-tight tracking-wide 4xl:h-[1.563rem] 4xl:leading-[1.875rem]">
              ES IST EINE PASSION
            </h4>
            <h2 className="font-gt-book text-[clamp(1rem,3vw,3.438rem)] uppercase leading-[clamp(1rem,3.4vw,4.063rem)] tracking-tight 4xl:h-[11.563rem]">
              Besondere Orte <br /> mit einem besonderen Anspruch: <br />
              Vollenden.
            </h2>
          </div>
        </div>

        {/* section 2 */}
        <div className="mb-[2.813rem] flex items-center justify-center bg-light-yellow px-4 py-16 xs:px-7 sm:h-[63.313rem] lg:mb-[5.625rem] ">
          <div className="mx-auto max-w-[60.313rem] text-center">
            <h4 className=" mb-3 font-proxima-semibold uppercase tracking-wide text-brown sm:text-xl lg:mb-[2.188rem] 4xl:h-5">
              Es ist Leidenschaft
            </h4>
            <p className="font-gt-book !leading-relaxed text-medium-blue xs:text-2xl sm:text-3xl md:text-[2.188rem] md:!leading-[3.125rem] 4xl:h-[20.938rem]">
              <span className=" block">
                Weil wir stets das Besondere wollen,
                <br className="hidden lg:block" /> lassen wir all unsere
                Erfahrung, Leidenschaft und Kreativität in unsere Projekte
                einfließen.
              </span>

              <span className="block">
                Schließlich ist es das Ziel, uns mit neuen Sichtweisen{" "}
                <br className="hidden lg:block" />
                vom Üblichen abzuheben. Dabei vergessen wir auch unsere Werte
                nicht: Um jeder Adresse eine zutiefst persönliche{" "}
                <br className="hidden lg:block" /> und emotionale Note mit auf
                den Weg zu geben.
              </span>
            </p>
          </div>
        </div>

        {/* section 3 */}
        <div className="mb-[2.813rem] flex flex-col bg-dark-blue md:flex-row lg:mb-[4.688rem]">
          <div className=" flex-1 md:order-1">
            <Image src={Fabian} alt="fabian" />
          </div>

          <div className="flex flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 lg:px-7 2xl:px-0 4xl:items-start">
            <div className="w-full text-center lg:max-w-[39.188rem] 4xl:mb-[20.406rem]  4xl:mt-[21.863rem]">
              <h2 className="font-gt-medium text-xl uppercase lg:text-[1.875rem] lg:leading-[2.5rem] 4xl:h-[4.375rem]">
                Das F und das S von FSG:
                <br /> Fabian Schneider
              </h2>
              <p className="my-3 font-proxima-thin text-sm lg:my-7 lg:text-[0.938rem] lg:leading-[1.563rem] xl:my-[3.438rem] 4xl:h-[10.313rem]">
                Fabian Schneider ist der Mensch gewordene Qualitätsanspruch.
                <br className="hidden 2xl:block" />
                Weil sich seiner Meinung nach nur so nachhaltige Immobilienwerte
                realisieren werden. <br className="hidden 2xl:block" /> Das
                wurde ihm schon als Kind einer Bauträgerfamilie in die Wiege
                gelegt. <br className="hidden 2xl:block" /> Später arbeitete er
                als Bestandshalter und Projektentwickler für bedeutende
                Unternehmen <br className="hidden 2xl:block" /> der
                Immobilienwirtschaft. Auf diesem Erfahrungsschatz aufbauend,
                gründete er <br className="hidden 2xl:block" /> 2012 die
                FSG-Grundstücksgesellschaft. Weil sich besondere Ambitionen nur
                und am <br className="hidden 2xl:block" /> besten in Eigenregie
                realisieren lassen.
              </p>

              <span className="inline-block border-b-[2px] border-brown pb-2 text-[0.938rem] uppercase text-brown lg:pb-[0.8rem] 4xl:h-[1.734rem] 4xl:leading-[1.125rem]">
                UNTERNEHMEN
              </span>
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
              <div key={project?.id} className=" group relative">
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
              </div>
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
              <h2 className=" mb-4 font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] xl:mb-9 2xl:mb-[3.563rem] 4xl:h-5">
                Ankaufsprofile
              </h2>

              <h3 className="font-gt-medium text-xl uppercase md:text-base lg:text-2xl xl:text-[1.875rem] xl:leading-[2.5rem] 4xl:h-[9.375rem]">
                Mit allen Tugenden <br /> des hanseatischen Kaufmanns: <br />
                Wir suchen Grundstücke <br /> und Immobilien.
              </h3>
              <p className="my-3 font-proxima text-sm lg:my-5 lg:text-[0.938rem] lg:leading-[1.563rem] xl:my-7 2xl:my-[3.438rem] 4xl:h-[10.313rem]">
                <span className="block">
                  Etwas Gutes noch besser zu machen. Und zwar so, bis es mit
                  einzigartig ist. <br className="hidden xl:block" /> In diesem
                  Sinne suchen wir Grundstücke und Bestandsimmobilen in guten
                  bis sehr <br className="hidden xl:block" /> guten Lagen. In
                  Hamburg, besonders um die Alster herum.
                </span>

                <span className="mt-2 block xl:mt-5">
                  Auf unsere Bonität können Sie sich ebenso verlassen wie auf
                  unsere Diskretion und <br className="hidden xl:block" /> die
                  seriöse Abwicklung der Transaktion. Denn bei uns sprechen Sie
                  mit dem Entscheider. Wir freuen uns auf Ihre Nachricht.
                </span>
              </p>

              <span className=" border-b-[2px] border-brown pb-2 uppercase text-brown lg:pb-[0.8rem] 4xl:h-[1.734rem] 4xl:leading-[1.125rem]">
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
