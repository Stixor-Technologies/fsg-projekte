"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Sidebar from "./menu/sidebar";
import Logo from "@/public/assets/header-logo.svg";
import Link from "next/link";
import Hamburger from "./menu/hamburger";
import { navLinks } from "@/app/utils/utils";
import { usePathname } from "next/navigation";
import { useScrollToSection } from "@/app/utils/scroll";
import LogoScrolled from "@/public/assets/logo-scrolled.svg";

const Header = () => {
  const path = usePathname();
  const { scrollToSection } = useScrollToSection();
  const [isTop, setIsTop] = useState(true);

  const header = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsTop(false) : setIsTop(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={header} className={`fixed z-50 w-full bg-dark-blue`}>
      <div className="container">
        <nav
          className={`mx-auto  flex h-[5rem] !max-w-[95.125rem] items-center justify-between duration-150 ${
            isTop ? "lg:h-[12.0625rem]" : "lg:h-[8.1875rem]"
          }`}
        >
          <div className="link-container 4xl:ml-[4px]">
            {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
              <Link
                key={link?.id}
                className={`header-link ${path === link?.path && "text-custom-brown"}`}
                href={link?.path}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Link href={"/"} className="hidden lg:block">
            {isTop ? (
              <Image
                src={Logo}
                alt="header-logo"
                className="h-[8.3125rem] max-w-[3rem] md:w-[17.5625rem] md:max-w-[17.5625rem] 4xl:ml-[23.0313rem] 4xl:mr-[21.0375rem]"
              />
            ) : (
              <Image
                src={LogoScrolled}
                alt="header-logo"
                className="max-w-[3rem] md:w-[4.25rem] md:max-w-[17.5625rem] 4xl:ml-[23.0313rem] 4xl:mr-[21.0375rem]"
              />
            )}
          </Link>
          <Link href={"/"} className="block lg:hidden">
            <Image src={Logo} alt="header-logo" className="max-w-[6rem]" />
          </Link>

          <div className="link-container gap-5 lg:!gap-[3.688rem] 4xl:mr-[1px]">
            {navLinks.slice(-2, -1).map((link) => (
              <Link
                key={link?.id}
                className={`header-link ${path === link?.path && "text-custom-brown"}`}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
            <button
              className={`header-link }`}
              onClick={() => {
                scrollToSection("#kontact");
              }}
            >
              kontakt
            </button>
          </div>

          <Hamburger />
        </nav>
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
