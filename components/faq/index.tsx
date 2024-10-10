"use client";
import React, { useState, useRef, FC } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import LinkButton from "../link-button";
import FaqArrow from "@/public/assets/arrow.svg";
import { FaqItem } from "@/app/utils/types";
import { useScrollToSection } from "@/app/utils/scroll";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

interface FaqProps {
  faqs: FaqItem[];
}

const FaqCard = ({
  id,
  faqItem,
  isActive,
  toggleActive,
}: {
  id: number;
  faqItem: FaqItem;
  isActive: boolean;
  toggleActive: (id: number) => void;
}) => {
  const answerRef = useRef<HTMLDivElement | null>(null);
  const tallbarPlus = useRef<HTMLSpanElement | null>(null);
  const flatbarPlus = useRef<HTMLSpanElement | null>(null);

  const { contextSafe } = useGSAP();

  const questionClicked = contextSafe(() => {
    const tl = gsap.timeline();

    const activeFaq = document.querySelector(".active");
    const tallBar = document.querySelector(".icon-animate");
    if (activeFaq) {
      gsap.to(activeFaq, {
        height: "0",
        marginTop: "0px",
        marginBottom: "0px",
        duration: 0.4,
      });
      activeFaq?.classList.remove("active");

      tl.to(tallBar, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallBar, {
        rotate: 90,
        duration: 0.2,
      });
    }

    if (!isActive) {
      gsap.to(answerRef.current, {
        height: "auto",
        marginTop: "45px",
        marginBottom: "35px",
        duration: 0.4,
      });
      answerRef.current?.classList.add("active");
      tallbarPlus.current?.classList.add("icon-animate");

      tl.to(tallbarPlus.current, {
        rotate: 180,
        duration: 0.2,
      });

      tl.to(flatbarPlus.current, {
        scale: 0,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        scale: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        marginTop: "0px",
        marginBottom: "0px",
        duration: 0.4,
      });
      answerRef.current?.classList.remove("active");

      tl.to(flatbarPlus.current, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        rotate: 90,
        duration: 0.2,
      });
    }

    toggleActive(id);
  });
  return (
    <>
      <div
        className={`border-b  border-[#A6ABB7] pb-[1.188rem] pt-[0.938rem] ${id === 0 && "border-t"}`}
      >
        <div
          className="group relative flex cursor-pointer items-center justify-between gap-8"
          onClick={questionClicked}
        >
          <span className="w-[90%] font-gt-display-light text-2xl text-medium-blue lg:text-[2.188rem] 4xl:h-[2.1875rem]">
            {faqItem?.question}
          </span>

          <Image
            src={FaqArrow}
            width={9.34}
            height={9.34}
            alt="expand-answer-icon"
            className={`${isActive ? "rotate-180" : "rotate-0"} mr-[1.375rem] duration-300 ease-in-out`}
          />
        </div>

        <div ref={answerRef} className="h-0 overflow-hidden">
          {/* section 1 */}
          <div className="mb-16 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  flex-wrap gap-x-1 gap-y-4">
            <div className="faq-section-1">
              <span className="faq-section-1-header">Zimmer</span>
              <span className="faq-section-1-value">
                {`${faqItem?.answer?.zimmer || "VERKAUFT"}`}
              </span>
            </div>

            <div className="faq-section-1">
              <span className="faq-section-1-header">FLÄCHE INNEN</span>
              <span className="faq-section-1-value">
                {faqItem?.answer?.flache}
              </span>
            </div>

            <div className="faq-section-1">
              <span className="faq-section-1-header">TERRASSEN / BALKONE </span>
              <span className="faq-section-1-value">
                {faqItem?.answer?.terrassen}
              </span>
            </div>

            <div className="faq-section-1">
              <span className="faq-section-1-header">WOHNFLÄCHE GESAMT</span>
              <span className="faq-section-1-value">
                {faqItem?.answer?.wohnflache}
              </span>
            </div>

            <div className="faq-section-1 justify-end">
              {/* <span className="faq-section-1-header">WOHNFLÄCHE GESAMT</span> */}
              <span className="faq-section-1-value !bg-brown !font-gt-display-rg">
                {faqItem?.answer?.runterladen}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:gap-0">
            <div className="flex w-full max-w-[75rem] flex-col md:flex-row">
              <div className="mr-10 w-full max-w-[34.8125rem]">
                <h3 className="faq-list-header">Ausstattung</h3>
                <ul className="faq-list  4xl:h-[17rem]">
                  {faqItem?.answer?.ausstattung?.map(
                    (ausstattung: string, index: number) => (
                      <li key={index}>{ausstattung}</li>
                    ),
                  )}
                </ul>
              </div>

              <div className="w-full max-w-[37.6875rem]">
                <div>
                  <h3 className="faq-list-header">Besonderheiten</h3>
                  <ul className="faq-list">
                    {faqItem?.answer?.besonderheiten?.map(
                      (besonderheiten: string, index: number) => (
                        <li key={index} className=" ">
                          {besonderheiten}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="mt-0">
                  <h3 className="faq-list-header">BADEZIMMER</h3>
                  <ul className="faq-list">
                    {faqItem?.answer?.badezimmer?.map(
                      (badezimmer: string, index: number) => (
                        <li key={index}>{badezimmer}</li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full shrink-0 items-center justify-center self-start lg:ml-4 lg:flex lg:max-w-[16.5rem]">
              <Image src={faqItem?.answer?.faqImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Faq: FC<FaqProps> = ({ faqs }) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const [activeFaq, setActiveFaq] = useState<number>(-1);
  const { scrollToSection } = useScrollToSection();

  const toggleActive = (id: number) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? -1 : id));
  };
  return (
    <div className="  bg-gray px-4 py-10 xs:px-7 lg:px-12 lg:pb-[6.25rem] lg:pt-[7.625rem] 3xl:pl-[4.688rem] 3xl:pr-[4.938rem]">
      <h2 className="font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] 4xl:h-[1.313rem]">
        Grundrisse
      </h2>
      <div className=" my-10 w-full lg:mb-[6.25rem] lg:mt-[4.938rem]">
        {faqs?.map((faqItem, index) => (
          <FaqCard
            id={index}
            faqItem={faqItem}
            isActive={activeFaq === index}
            toggleActive={toggleActive}
            key={index}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <LinkButton
          text="Jetzt anfragen"
          variant="sm"
          as={"button"}
          onClick={() => {
            scrollToSection("#kontact");
          }}
        />
      </div>
    </div>
  );
};

export default Faq;
