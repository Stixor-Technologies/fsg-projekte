"use client";
import React, { useEffect, useState } from "react";
import { aktuelleprojekte } from "@/app/utils/data";
import Image, { StaticImageData } from "next/image";
import Spinner from "@/components/spinner/spinner";
import TextWithLineBreaks from "@/components/line-break";
import Faq from "@/components/faq";
import ProjectPhase from "@/components/project-phase";
import Slider from "@/components/slider";
import { Project } from "@/app/utils/types";
import MapComponent from "@/components/map";
import DetailHero from "@/components/detail-hero";

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
          <section className=" pb-[3.181rem] pt-[6.75rem] lg:pt-[10.656rem]">
            <div className="container">
              {/* section 1 */}
              <DetailHero
                displayImage={project?.detailDisplay}
                projectName={project?.projectName}
              />

              {/* section 2 */}
              <div className="flex items-center justify-center bg-light-yellow px-4 py-36 xs:px-7 md:h-[63.875rem] ">
                <div className="mx-auto max-w-[74.375rem] text-center">
                  <h4 className=" mb-3 font-proxima-semibold uppercase tracking-wide text-brown sm:text-xl lg:mb-[2.813rem] 4xl:h-5">
                    Philosophie
                  </h4>
                  <p className=" max-w-[74.375rem] font-gt-book !leading-relaxed text-medium-blue xs:text-2xl sm:text-3xl md:text-[2.5rem] md:!leading-[3.4375rem]">
                    <span className="block 4xl:h-[12.8125rem]">
                      <TextWithLineBreaks text={project?.philosophie} />
                    </span>
                  </p>
                </div>
              </div>

              {/* section 3 */}

              <div className="mb-[2.813rem] grid grid-cols-1 justify-between gap-3   divide-transparent-blue bg-dark-brown py-4 xs:grid-cols-[1fr,.0625rem,1fr] md:flex md:gap-0 md:divide-x lg:mb-[6.25rem]  lg:py-[1.875rem] 4xl:h-[16.25rem]">
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

              {/* section 4 */}
              <Image
                src={project?.phaseImage}
                alt=""
                className="mx-auto mb-[2.813rem] lg:mb-[6.25rem]"
              />

              {/* section 5 */}
              <ProjectPhase
                projectPhases={project?.projectPhases}
                currentPhase={project?.currentPhase}
              />

              {/* section 6 */}

              <div className="mb-[2.813rem] flex flex-col bg-light-yellow  md:flex-row md:py-12 md:pl-[3vw] lg:mb-[6.25rem] lg:pb-[6.25rem] lg:pt-[6.25rem] 3xl:pl-[6.25rem]">
                <div className="flex-1 lg:max-w-[31.25rem] 3xl:max-w-[44.063rem]">
                  <Image
                    src={project?.architektur?.displayImage}
                    alt=""
                    className="mx-auto"
                  />
                </div>

                <div className="flex flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 md:py-0 lg:px-7 2xl:px-10 3xl:px-0">
                  <div className="w-full text-center text-medium-blue lg:max-w-[33.938rem]  ">
                    <h2 className=" mb-4 font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] xl:mb-10 4xl:h-5">
                      Architektur
                    </h2>

                    <h3 className="break-words font-gt-super text-xl uppercase md:text-base lg:text-2xl xl:text-[1.875rem] xl:leading-[2.813rem] 4xl:h-[4.688rem]">
                      {project?.architektur?.title}
                    </h3>
                    <p className="mt-3 font-proxima text-[.938rem] lg:mt-5 lg:leading-[1.563rem] xl:mt-7 2xl:mt-12 4xl:h-[21.25rem]">
                      <span className="block">
                        <TextWithLineBreaks
                          text={project?.architektur?.description1}
                        />
                      </span>

                      <span className="mt-2 block xl:mt-5">
                        <TextWithLineBreaks
                          text={project?.architektur?.description2}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* section 7 */}
            <Slider sliderImages={project?.sliderImages} />

            {/* section 8 */}
            <div className="container">
              <div className="mb-[2.813rem] flex flex-col bg-gray  md:flex-row md:py-12 md:pl-[3vw] lg:mb-[6.25rem] lg:pb-[6.25rem] lg:pt-[6.25rem] 3xl:pl-[6.25rem]">
                <div className="flex-1 lg:max-w-[31.25rem] 3xl:max-w-[44.063rem]">
                  <Image
                    src={project?.interior?.displayImage}
                    alt=""
                    className="mx-auto"
                  />
                </div>

                <div className="flex flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 md:py-0 lg:px-7 2xl:px-10 3xl:px-0">
                  <div className="w-full text-center text-medium-blue lg:max-w-[32.063rem]">
                    <h2 className="mb-4 font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] xl:mb-[2.438rem] 4xl:h-5">
                      Interior
                    </h2>

                    <h3 className="break-words font-gt-super text-xl md:text-base lg:text-2xl xl:text-[1.875rem] xl:leading-[2.5rem] 4xl:h-[4.375rem]">
                      <TextWithLineBreaks text={project?.interior?.title} />
                    </h3>
                    <p className="mt-3 font-proxima text-[.938rem] lg:mt-5 lg:leading-[1.563rem] xl:mt-7 2xl:mt-[3.188rem] 4xl:h-[13.438rem]">
                      <span className="block">
                        <TextWithLineBreaks
                          text={project?.interior?.description1}
                        />
                      </span>

                      <span className="mt-2 block xl:mt-5">
                        <TextWithLineBreaks
                          text={project?.interior?.description2}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* section 9 - model */}

              {project?.model && (
                <Image
                  src={project?.model}
                  alt=""
                  className="mx-auto mb-[2.813rem] lg:mb-[6.25rem]"
                />
              )}
            </div>

            {/* section 10 - feature before*/}
            {project?.feature_before && (
              <Image
                src={project?.feature_before}
                width={1920}
                alt=""
                className="mx-auto mb-[2.813rem] lg:mb-[6.25rem]"
              />
            )}

            <div className="container">
              {/* section 11 -   Besonderheiten / Features*/}
              <div className="mb-[2.813rem] flex flex-col bg-light-yellow  md:flex-row md:py-12 md:pl-[3vw] lg:mb-[6.25rem] lg:pb-[5.875rem] lg:pt-[6.25rem] 3xl:pl-[6.25rem] 4xl:h-[73.5rem]">
                <div className="flex-1 lg:max-w-[31.25rem] 3xl:max-w-[44.063rem]">
                  <Image
                    src={project?.besonderheiten?.displayImage}
                    alt=""
                    className="mx-auto"
                  />
                </div>

                <div className="flex flex-1 items-center justify-center px-4 py-12 xs:px-7 md:px-4 md:py-0 lg:px-7 2xl:px-10 3xl:px-0 4xl:items-start">
                  <div className="w-full text-center text-medium-blue lg:max-w-[39rem] 4xl:mb-[18.563rem] 4xl:mt-[18.75rem]">
                    <h2 className="mb-4 font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-xl lg:leading-[1.5rem] xl:mb-[2.625rem] 4xl:h-5">
                      Besonderheiten / Features
                    </h2>

                    <h3 className="break-words font-gt-book text-xl uppercase md:text-base lg:text-2xl xl:text-[1.875rem] xl:leading-[2.5rem] 4xl:h-[4.375rem]">
                      <TextWithLineBreaks
                        text={project?.besonderheiten?.title}
                      />
                    </h3>
                    <p className="mt-3 font-proxima text-[.938rem] lg:mt-5 lg:leading-[1.563rem] xl:mt-7 2xl:mt-[2.938rem] 4xl:h-[13.438rem]">
                      <span className="block 4xl:h-[5.625rem]">
                        <TextWithLineBreaks
                          text={project?.besonderheiten?.description1}
                        />
                      </span>

                      <span className="mt-4 block font-gt-book-italic text-xl leading-[1.875rem] xl:mt-[1.875rem] 4xl:h-[5rem]">
                        <TextWithLineBreaks
                          text={project?.besonderheiten?.description2}
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* section 12 */}

              {project?.bildImages && (
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
              )}

              <MapComponent center={project?.mapCenter} />

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
