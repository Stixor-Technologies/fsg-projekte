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
    <header
      ref={header}
      className={`fixed z-50 w-full border-b-[2px] border-brown bg-dark-blue`}
    >
      <div className="container">
        <nav className="mx-auto flex h-[4.375rem] !max-w-[95.125rem] items-center justify-between lg:h-[8.188rem]">
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
              className="max-w-[12rem] xs:max-w-[17rem] lg:max-w-none"
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
