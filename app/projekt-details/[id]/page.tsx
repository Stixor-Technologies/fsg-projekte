"use client";
import React, { useEffect, useState } from "react";
import { aktuelleprojekte } from "@/app/utils/data";
import Image from "next/image";
import Spinner from "@/components/spinner/spinner";
import TextWithLineBreaks from "@/components/line-break";
import Faq from "@/components/faq";
import ProjectPhase from "@/components/project-phase";
import { Project } from "@/app/utils/types";
import ProjectSlider from "@/components/slider";
import { SwiperSlide } from "swiper/react";
import LinkButton from "@/components/link-button";
import Project1Sec7 from "./components/project-1-sec-7";
import Project2Sec7 from "./components/project-2-sec-7";
import Project1Sec9 from "./components/project-1-sec-9";
import Project2Sec9 from "./components/project-2-sec-9";
import Map from "@/components/map";
import Project2Section4 from "./components/project-2-section-4";

interface ProjectDetailParams {
  params: {
    id: string;
  };
}

const ProjectDetail = ({ params: { id } }: ProjectDetailParams) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const project = aktuelleprojekte?.find((project) => project?.id === id);
    setLoading(false);
    if (project) setProject(project);
  }, []);

  return (
    <section className="bg-white">
      {loading ? (
        <div className="container flex h-screen items-center justify-center">
          <Spinner color={"text-medium-blue"} />
        </div>
      ) : !loading && project ? (
        <>
          <section className="pb-[5.625rem] pt-[6.75rem] lg:pt-[12.0625rem]">
            <div className="container">
              {/* section 1 */}
              <div className=" mb-[1.75rem] sm:mb-[5.625rem]">
                <ProjectSlider arrowColor="white">
                  {project.heroSlider.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative">
                        <Image
                          src={slide.displayImage}
                          alt=""
                          className="w-full"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </ProjectSlider>
              </div>
              {/* section 2 */}
              <div className="flex items-center justify-center bg-gray px-4 py-12 xs:px-7 md:h-[63.875rem]">
                <div className="mx-auto flex max-w-[74.375rem] flex-col items-center justify-center text-center">
                  <h4
                    className={`mb-3 font-proxima-semibold uppercase tracking-wide text-brown sm:text-xl  ${
                      id === "petit-palais" ? "lg:mb-9" : "lg:h-[6.375rem]"
                    }`}
                  >
                    <TextWithLineBreaks text={project?.philosophieHeader} />
                  </h4>
                  <p className=" max-w-[74.375rem] font-gt-display-light !leading-relaxed text-medium-blue xs:text-2xl sm:text-3xl md:text-[1.75rem] md:!leading-[2.375rem]">
                    <span className="mb-[4.5rem] block 4xl:h-[18.375rem]">
                      <TextWithLineBreaks text={project?.philosophie} />
                    </span>
                  </p>
                  {project?.philosophieButtonText && (
                    <LinkButton
                      // className="w-[23.4375rem] max-w-full"
                      as={"button"}
                      variant="sm"
                      text="ZUR PETIT PALAIS WEBSEITE"
                    />
                  )}
                </div>
              </div>

              {/* section 3 */}

              <div className="mb-[1.75rem] grid grid-cols-1 justify-between gap-3 divide-transparent-blue  bg-dark-brown py-4 xs:grid-cols-[1fr,.0625rem,1fr] sm:mb-[5.625rem] md:flex md:gap-0 md:divide-x lg:py-[1.875rem] 4xl:h-[16.25rem]">
                <div className="flex flex-1 flex-col gap-3 md:flex-row md:justify-between md:gap-0">
                  <div className="metric-container 4xl:ml-[4.75rem]">
                    <h5 className="metric">
                      {project?.unitMetrics?.wohnungen}
                    </h5>
                    <span className="metric-label">Wohnungen</span>
                  </div>
                  <div className="w-[.0625rem] shrink-0 bg-transparent-blue" />

                  <div className="metric-container">
                    <h5 className="metric">
                      {project?.unitMetrics?.penthouse}
                    </h5>
                    <span className="metric-label">Penthouse</span>
                  </div>
                </div>
                <div className="w-[.0625rem] shrink-0 bg-transparent-blue md:hidden" />

                {project?.unitMetrics?.stellplätze &&
                  project?.unitMetrics?.zuralster && (
                    <div className="flex flex-1 flex-col gap-3 md:flex-row md:justify-between md:gap-0">
                      <div className="metric-container">
                        <h5 className="metric">
                          {project?.unitMetrics?.zuralster}
                        </h5>
                        <span className="metric-label">Zur Alster</span>
                      </div>

                      <div className="w-[.0625rem] shrink-0 bg-transparent-blue" />

                      <div className="metric-container 4xl:mr-[4.8125rem]">
                        <h5 className="metric">
                          {project?.unitMetrics?.stellplätze}
                        </h5>
                        <span className="metric-label">Stellplätze</span>
                      </div>
                    </div>
                  )}

                {project?.unitMetrics?.gebäude &&
                  project?.unitMetrics?.zummühlenkamp && (
                    <div className="flex flex-1 flex-col gap-3 md:flex-row md:justify-between md:gap-0">
                      <div className="metric-container">
                        <h5 className="metric">
                          {project?.unitMetrics?.gebäude}
                        </h5>
                        <span className="metric-label">gebäude</span>
                      </div>

                      <div className="w-[.0625rem] shrink-0 bg-transparent-blue" />

                      <div className="metric-container 4xl:mr-[4.8125rem]">
                        <h5 className="metric">
                          {project?.unitMetrics?.zummühlenkamp}
                        </h5>
                        <span className="metric-label">zum mühlenkamp</span>
                      </div>
                    </div>
                  )}
              </div>
            </div>

            {/* section 4 */}
            <div className="mb-[5.625rem] 4xl:h-[65.25rem]">
              {id === "petit-palais" ? (
                <ProjectSlider arrowColor="white">
                  {project?.sliderImages.map((image, index) => (
                    <>
                      <SwiperSlide key={index}>
                        <div className={`relative overflow-hidden`}>
                          <Image
                            src={image}
                            alt=""
                            className={`w-full ${index === 3 ? "scale-150 sm:scale-100" : ""}`}
                          />
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
                </ProjectSlider>
              ) : (
                <Project2Section4 />
              )}
            </div>
            <div className="mb-[1.75rem] px-5 sm:mb-[5.625rem] xl:px-0">
              {/* section 5 */}
              <ProjectPhase
                projectPhases={project?.projectPhases}
                currentPhase={project?.currentPhase}
              />
            </div>
            {/* section 6 */}
            <div className="container">
              <div className="mb-[1.75rem] flex flex-col justify-center gap-10 bg-gray py-10 sm:mb-[5.625rem] lg:flex-row lg:items-center lg:gap-0 4xl:h-[58.375rem] 4xl:items-start 4xl:justify-start 4xl:py-0">
                <div
                  className={`flex-1 ${id === "petit-palais" ? "4xl:ml-[8.875rem]" : "4xl:ml-[6.375rem]"} 4xl:mt-[5.5625rem] 4xl:flex-none`}
                >
                  <Image
                    src={project?.architektur?.displayImage}
                    alt=""
                    className="mx-auto"
                  />
                </div>

                <div
                  className={`flex flex-1 ${id === "petit-palais" ? "4xl:ml-[10.125rem]" : "4xl:ml-[12.625rem]"} 4xl:mt-[18.375rem] 4xl:flex-none`}
                >
                  <div className="mx-auto w-full max-w-[90%] text-center text-medium-blue lg:max-w-[33.9375rem]">
                    <h3 className="font-proxima-semibold text-xl uppercase leading-[1.5rem] text-brown">
                      <TextWithLineBreaks text={project?.architektur.title} />
                      {/* {project?.architektur?.title} */}
                    </h3>
                    <p className="mt-3 font-proxima text-[.938rem] lg:mt-5 lg:leading-[1.563rem] xl:mt-7 2xl:mt-9 4xl:h-[21.25rem]">
                      <span className="block">
                        <TextWithLineBreaks
                          text={project?.architektur?.description1}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* section 7 */}
            {/* <Slider sliderImages={project?.sliderImages} /> */}
            <div className="mb-[1.75rem] sm:mb-[5.625rem]">
              {project.id === "petit-palais" ? (
                <Project1Sec7 />
              ) : (
                <Project2Sec7 />
              )}
            </div>
            {/* section 8 */}
            <div className="container">
              <div className="mb-[1.75rem] flex flex-col gap-10 bg-gray px-10 pb-10 sm:mb-[5.625rem] lg:h-[59.875rem] lg:flex-row lg:items-center lg:gap-0 lg:pb-0 3xl:items-start 3xl:px-0">
                <div className="order-2 flex h-full flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 md:py-0 lg:order-1 lg:px-7 2xl:px-10 3xl:px-0 4xl:flex-none 4xl:items-start 4xl:justify-start">
                  <div
                    className={`w-full text-center text-medium-blue lg:max-w-[32.063rem] ${
                      id === "petit-palais"
                        ? "4xl:ml-[13.5rem] 4xl:mt-[16.8125rem]"
                        : "4xl:ml-[12.625rem] 4xl:mt-[19.75rem]"
                    }`}
                  >
                    <p className="mb-[2.125rem] font-proxima-semibold text-[1.3125rem] leading-[1.75rem] text-brown">
                      <TextWithLineBreaks text={project?.interior.title} />
                    </p>
                    <p className="font-proxima text-[.938rem] lg:leading-[1.4375rem] 4xl:h-[13.438rem] 4xl:w-[32.0625rem]">
                      <span className="block">
                        <TextWithLineBreaks
                          text={project?.interior?.description1}
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className={`order-1 mx-auto flex-1 lg:order-2 lg:mx-0 xl:mt-[6.25rem] ${id === "petit-palais" ? "4xl:!mr-[6.3125rem]" : "4xl:!mr-[6.4375rem]"} 4xl:flex 4xl:justify-end`}
                >
                  <Image src={project?.interior?.displayImage} alt="" />
                </div>
              </div>

              {/* section 9 - model */}

              {/* {project?.model && (
                <Image
                  src={project?.model}
                  alt=""
                  className="mx-auto mb-[2.813rem] lg:mb-[6.25rem]"
                />
              )} */}
            </div>
            <div className="mb-[1.75rem] sm:mb-[5.625rem]">
              {project.id === "petit-palais" ? (
                <Project1Sec9 />
              ) : (
                <Project2Sec9 />
              )}
            </div>
            {/* section 10 - feature before*/}
            {/* {project?.feature_before && (
              <Image
                src={project?.feature_before}
                width={1920}
                alt=""
                className="mx-auto mb-[2.813rem] lg:mb-[6.25rem]"
              />
            )} */}

            <div className="container">
              {/* section 11 -   Besonderheiten / Features*/}
              <div className="mb-[1.75rem] flex flex-col items-center justify-center gap-10 bg-gray px-10 py-10 sm:mb-[5.625rem] lg:h-[58.375rem] lg:flex-row lg:py-0 3xl:px-0 4xl:items-start 4xl:justify-start">
                <div className="flex-1 3xl:ml-[6.375rem] 3xl:flex-initial 4xl:mt-[5.5625rem]">
                  <Image
                    src={project?.besonderheiten?.displayImage}
                    alt=""
                    className="mx-auto 4xl:mx-0"
                  />
                </div>

                <div className="flex h-full flex-1 items-center justify-center">
                  <div
                    className={`w-full text-center text-medium-blue  ${id === "petit-palais" ? "4xl:h-[26.5rem]" : ""}`}
                  >
                    <h2 className="h-[1.3125rem] font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem]">
                      <TextWithLineBreaks
                        text={project?.besonderheiten?.title}
                      />
                    </h2>

                    <p className="mt-9 font-proxima text-[.938rem] lg:leading-[1.375rem]">
                      <span className="block">
                        <TextWithLineBreaks
                          text={project?.besonderheiten?.description1}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* section 12 */}

              {/* {project?.bildImages && (
                <div className="mb-[2.813rem] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mb-[6.25rem] lg:gap-[4.125rem]">
                  {project?.bildImages?.map(
                    (imageSrc: StaticImageData, index: number) => (
                      <Image
                        key={index}
                        src={imageSrc}
                        alt=""
                        className="mx-auto"
                      />
                    ),
                  )}
                </div>
              )}

              {project?.galleryImage && (
                <Image
                  src={project?.galleryImage}
                  alt=""
                  className="mx-auto mb-[2.813rem] lg:mb-[6.25rem]"
                />
              )} */}

              <div className="mb-[1.75rem] flex flex-col justify-center gap-10 bg-gray sm:mb-[5.625rem] lg:flex-row lg:items-center 4xl:h-[58.375rem] 4xl:items-start 4xl:justify-start">
                <div className="flex-[0.7] lg:flex-1 4xl:w-[77.625rem]">
                  <Image src={project?.locations.displayImage} alt="" />
                </div>
                <div className="ml-5 flex flex-[0.3] gap-[0.5rem] lg:ml-0 lg:mt-[6.25rem]">
                  <div className="flex flex-col justify-center">
                    {project?.locations.locations.map((location, index) => (
                      <div key={index} className="flex">
                        <p
                          key={index}
                          className="w-[2.125rem] font-gt-super text-[1.5625rem] text-xl leading-[2.5rem] text-brown"
                        >
                          {index + 1}
                        </p>

                        <p
                          key={index}
                          className="font-proxima text-xl uppercase leading-[2.5rem] text-medium-blue"
                        >
                          {location}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* <div className="mt-[0.5rem] flex flex-col">
                    {project?.locations.locations.map((location, index) => (
                      <p
                        key={index}
                        className="font-proxima text-xl uppercase leading-[2.5rem] text-medium-blue"
                      >
                        {location}
                      </p>
                    ))}
                  </div> */}
                </div>
              </div>

              <Map
                title={project?.dieLage?.title}
                decription={project?.dieLage?.description}
                center={project?.mapCenter}
              />

              {/* section 10 */}
              <Faq faqs={project?.faq} />
            </div>
          </section>
        </>
      ) : (
        <div className="container flex h-[90vh] items-center justify-center">
          <h4 className="text-3xl text-medium-blue">No Data Found</h4>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
