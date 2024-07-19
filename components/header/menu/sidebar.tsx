"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMenuStore } from "@/store/menu-store";
import { navLinks } from "@/app/utils/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const path = usePathname();

  const sideBarMenu = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (
        sideBarMenu.current &&
        !sideBarMenu.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen],
  );

  useEffect(() => {
    window.addEventListener("resize", () => setIsMenuOpen(false));

    return () => {
      window.removeEventListener("resize", () => setIsMenuOpen(false));
    };
  }, []);

  // Trigger animations for menu open state
  useEffect(() => {
    if (isMenuOpen) {
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: -sideBarMenu?.current?.clientWidth,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.5,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    } else {
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        ref={sideBarMenu}
        className="min-aspect:-mr-[40vw] min-aspect:w-[40vw] bg-dark-blue fixed right-0 top-0 z-40
          -mr-[100vw] h-screen w-screen will-change-auto"
      >
        <div className="bg-indigo-blue absolute -z-10 h-full w-full" />

        <div
          className="min-aspect:mx-0 min-aspect:w-full min-aspect:justify-center min-aspect:pt-[6vw] mx-auto h-full 
          w-full flex-col justify-center p-4 pb-4 pt-[2.313rem]"
        >
          <ul className="min-aspect:space-y-[3vw] min-aspect:text-[3vw] mt-[12.6vw] space-y-[7vw] px-8 text-[7vw] md:text-left">
            {navLinks?.map((link) => (
              <li
                className={`after:transition-width hover:text-light-brown relative w-max text-white duration-300 ${
                  path === link?.path && "after:w-full"
                }`}
                key={link?.id}
              >
                <Link href={link?.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        ref={overlayRef}
        className={`${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        } fixed top-0 z-30 h-screen w-screen bg-black opacity-0`}
      ></div>
    </>
  );
};

export default Sidebar;
