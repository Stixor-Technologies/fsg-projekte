"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Sidebar from "./menu/sidebar";
import Logo from "@/public/assets/header-logo.svg";
import Link from "next/link";
import Hamburger from "./menu/hamburger";
import { navLinks } from "@/app/utils/utils";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { usePathname } from "next/navigation";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const path = usePathname();

  const header = useRef<HTMLElement | null>(null);

  return (
    <header ref={header} className={`bg-dark-blue fixed z-50 w-full`}>
      <div className="container">
        <nav className="mx-auto flex h-[85px] !max-w-[1522px] items-center justify-between lg:h-[131px]">
          {/* <div className="link-container">
            <Link className="header-link" href={"/"}>
              Bauprojekte
            </Link>
            <Link className="header-link" href={"/"}>
              Ankauf
            </Link>
          </div>

          <Link href={"/"}>
            <Image
              src={Logo}
              alt="header-logo"
              className="xs:max-w-[17rem] max-w-[12rem] lg:max-w-none"
            />
          </Link>

          <div className="link-container">
            <Link className="header-link" href={"/"}>
              Unternehmen
            </Link>
            <Link className="header-link" href={"/"}>
              Kontakt
            </Link>
          </div> */}

          <div className="link-container">
            {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
              <Link
                key={link?.id}
                className={`header-link ${path === link?.path}`}
                href={link?.path}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Link href={"/"}>
            <Image
              src={Logo}
              alt="header-logo"
              className="xs:max-w-[17rem] max-w-[12rem] lg:max-w-none"
            />
          </Link>

          <div className="link-container">
            {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
              <Link
                key={link?.id}
                className={`header-link ${path === link?.path}`}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Hamburger />
        </nav>
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
