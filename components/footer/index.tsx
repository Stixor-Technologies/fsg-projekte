import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-dark-blue pb-12 4xl:h-[35.5rem]">
      <div>
        <div className="relative mx-auto max-w-[110.563rem] px-5 sm:px-10 4xl:px-0">
          <div className="flex flex-col items-center gap-[4.5625rem]">
            <p className="mt-[5.125rem] font-gt-display-light text-xl lg:text-[2.1875rem] 4xl:h-[2.1875rem]">
              Besondere Orte mit einem besonderen Anspruch: Vollenden.{" "}
            </p>
            <div className="h-[0.5px] w-full bg-white" />
          </div>

          <div className="mt-[2.5rem] grid grid-cols-1 justify-between gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1fr,2fr,1fr] lg:gap-0 4xl:grid-cols-[21.063rem,306px,30.125rem,418px,14.125rem,] 4xl:justify-normal">
            <div className="sm:row-start-2 lg:row-start-1">
              <h4 className="4xl-[1.438rem] font-proxima-semibold text-lg leading-[1.375rem] text-custom-brown">
                VERTRIEB
              </h4>

              <div className="mt-[0.875rem] space-y-3.5 font-gt-super lg:space-y-[1.188rem] xl:text-lg xl:leading-[1.625rem]">
                <h4 className="tracking-tight 4xl:h-[2.75rem] ">
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
              <div className="!mt-[4.1875rem] flex gap-3 text-custom-brown sm:max-w-[17.4375rem] sm:flex-row sm:justify-between sm:gap-0 lg:mt-[2.563rem] 4xl:h-[1.125rem]">
                <Link
                  className=" font-proxima-semibold uppercase tracking-wide duration-300 hover:text-light-brown"
                  href={"/"}
                >
                  Impressum
                </Link>
                |
                <Link
                  className=" font-proxima-semibold uppercase tracking-wide duration-300 hover:text-light-brown"
                  href={"/"}
                >
                  Agb
                </Link>
                |
                <Link
                  className=" font-proxima-semibold uppercase tracking-wide duration-300 hover:text-light-brown"
                  href={"/"}
                >
                  Datenschutz
                </Link>
              </div>
            </div>

            <div className="row-start-1 mx-auto w-[12rem] sm:col-span-full sm:row-start-1 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-[3.5rem] lg:w-auto 4xl:col-start-3">
              <Image src={Logo} alt="footer-logo" />
            </div>

            <div className="sm:row-start-2 sm:text-right lg:row-start-1 4xl:col-start-5">
              <h4 className="4xl-[1.438rem] font-proxima-semibold text-lg leading-[1.375rem] text-custom-brown">
                UNTERNEHMEN
              </h4>

              <div className=" mt-[0.875rem] space-y-3.5 font-gt-super lg:space-y-[1.188rem] xl:text-lg xl:leading-[1.625rem]">
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
                <p className="!mt-[4.1875rem] font-proxima-semibold text-base uppercase tracking-wide text-custom-brown duration-300 hover:text-light-brown">
                  © FSG | Projekte, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
