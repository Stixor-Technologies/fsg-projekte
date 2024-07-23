import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/footer-logo.svg";

const Footer = () => {
  return (
    <footer className=" bg-dark-blue ">
      <div className="container pb-12 pt-[2.781rem] lg:pb-[4.563rem] 4xl:h-[33.625rem]">
        <div className="max-w-[110.563rem]">
          <div className="flex flex-col items-center gap-11 ">
            <Image src={Logo} alt="footer-logo" />

            <div className="h-[0.5px] w-full bg-white" />
          </div>

          <div className="mt-[3.063rem] grid grid-cols-1 justify-between gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1fr,2fr,1fr] lg:gap-0 4xl:grid-cols-[21.063rem,30.125rem,14.125rem]">
            <div className="">
              <h4 className="4xl-[1.438rem] font-proxima-semibold text-lg leading-[1.375rem] text-brown">
                VERTRIEB
              </h4>

              <div className="mt-2.5 space-y-3.5 font-gt-book lg:mt-[1.938rem] lg:space-y-[1.188rem] xl:text-lg xl:leading-[1.625rem]">
                <h4 className="4xl:h-[2.75rem] ">
                  FSG Projekte <br /> Beratungs- und Vertriebsgesellschaft mbH
                </h4>
                <address className="not-italic 4xl:h-[2.75rem]">
                  Maria-Louisen-Straße 8 <br /> D-22301 Hamburg
                </address>

                <div className="4xl:h-[2.75rem]">
                  <Link className=" block" href={`tel:+49 (0)40 561 289 40`}>
                    Tel +49 (0)40 561 289 40
                  </Link>

                  <Link href={`mailto:info@fsg-projekte.de`}>
                    E-Mail info@fsg-projekte.de
                  </Link>
                </div>
              </div>
            </div>

            <div className=" row-start-3 sm:col-span-full sm:row-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-[3.5rem]">
              <h5 className="font-gt-super-italic text-xl sm:text-center lg:text-2xl xl:text-[2.063rem] xl:!leading-[2.375rem] 4xl:h-[6.813rem]">
                Besondere Orte <br /> mit einem besonderen Anspruch:
                <br /> Vollenden.
              </h5>

              <div className="mx-auto mt-6 flex flex-col justify-between sm:max-w-[20.875rem] sm:flex-row lg:mt-[2.563rem] 4xl:h-[1.125rem]">
                <Link
                  className=" font-proxima-semibold text-lg uppercase tracking-wide text-brown duration-300 hover:text-light-brown"
                  href={"/"}
                >
                  Impressum
                </Link>
                <Link
                  className=" font-proxima-semibold text-lg uppercase tracking-wide text-brown duration-300 hover:text-light-brown"
                  href={"/"}
                >
                  Agb
                </Link>
                <Link
                  className=" font-proxima-semibold text-lg uppercase tracking-wide text-brown duration-300 hover:text-light-brown"
                  href={"/"}
                >
                  Datenschutz
                </Link>
              </div>
            </div>

            <div className=" sm:text-right">
              <h4 className="4xl-[1.438rem] font-proxima-semibold text-lg leading-[1.375rem] text-brown">
                UNTERNEHMEN
              </h4>

              <div className=" mt-2.5 space-y-3.5 font-gt-book lg:mt-[1.938rem] lg:space-y-[1.188rem] xl:text-lg xl:leading-[1.625rem]">
                <h4 className=" 4xl:h-[2.75rem] ">
                  FSG Grundstücks-
                  <br /> gesellschaft mbH
                </h4>
                <address className="not-italic 4xl:h-[2.75rem]">
                  Westerweg 12
                  <br /> 25999 Kampen, Sylt
                </address>

                <div className="4xl:h-[2.75rem]">
                  <Link
                    className=" block"
                    href={`tel:+49 (0)4651 350 401 61
`}
                  >
                    Tel +49 (0)4651 350 401 61
                  </Link>

                  <Link href={`mailto:fsg@fsg-projekte.de`}>
                    E-Mail fsg@fsg-projekte.de
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
