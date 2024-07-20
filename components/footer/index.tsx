import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/footer-logo.svg";

const Footer = () => {
  return (
    <footer className=" bg-dark-blue ">
      <div className="4xl:h-[538px] container pb-12 pt-[44.5px] lg:pb-[73px]">
        <div className="max-w-[1769px]">
          <div className="flex flex-col items-center gap-11 ">
            <Image src={Logo} alt="footer-logo" />

            <div className="h-[0.5px] w-full bg-white" />
          </div>

          <div className="mt-[49px] grid grid-cols-1 justify-between gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1fr,2fr,1fr] lg:gap-0">
            <div className="">
              <h4 className="font-proxima-semibold text-brown text-lg leading-[22px]">
                VERTRIEB
              </h4>

              <div className="font-gt-book mt-2.5 space-y-3.5 lg:mt-[31px] lg:space-y-[19px] xl:text-lg xl:leading-[26px]">
                <h4 className=" ">
                  FSG Projekte <br /> Beratungs- und Vertriebsgesellschaft mbH
                </h4>
                <address className=" not-italic">
                  Maria-Louisen-Straße 8 <br /> D-22301 Hamburg
                </address>

                <Link className=" block" href={`tel:+49 (0)40 561 289 40`}>
                  Tel +49 (0)40 561 289 40
                </Link>

                <Link href={`mailto:info@fsg-projekte.de`}>
                  E-Mail info@fsg-projekte.de
                </Link>
              </div>
            </div>

            <div className=" row-start-3 sm:col-span-full sm:row-start-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mt-[56px]">
              <h5 className="font-gt-super-italic text-xl sm:text-center lg:text-2xl xl:text-[33px] xl:!leading-[38px]">
                Besondere Orte <br /> mit einem besonderen Anspruch:
                <br /> Vollenden.
              </h5>

              <div className="mx-auto mt-6 flex flex-col justify-between sm:max-w-[334px] sm:flex-row lg:mt-[41px]">
                <Link
                  className=" text-brown font-proxima-semibold text-lg uppercase tracking-wider"
                  href={"/"}
                >
                  Impressum
                </Link>
                <Link
                  className=" text-brown font-proxima-semibold text-lg uppercase tracking-wider"
                  href={"/"}
                >
                  Agb
                </Link>
                <Link
                  className=" text-brown font-proxima-semibold text-lg uppercase tracking-wider"
                  href={"/"}
                >
                  Datenschutz
                </Link>
              </div>
            </div>

            <div className=" sm:text-right">
              <h4 className=" font-proxima-semibold text-brown text-lg leading-[22px]">
                UNTERNEHMEN
              </h4>

              <div className=" font-gt-book mt-2.5 space-y-3.5 lg:mt-[31px] lg:space-y-[19px] xl:text-lg xl:leading-[26px]">
                <h4 className=" ">
                  FSG Grundstücks-
                  <br /> gesellschaft mbH
                </h4>
                <address className=" not-italic">
                  Westerweg 12
                  <br /> 25999 Kampen, Sylt
                </address>

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
    </footer>
  );
};

export default Footer;
