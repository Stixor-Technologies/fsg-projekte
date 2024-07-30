"use client";
import React, { useRef, useEffect, FC } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { MAP_KEY } from "@/app/utils/constant";
import TextWithLineBreaks from "../line-break";

mapboxgl.accessToken = MAP_KEY!;

interface MapProps {
  center: LngLatLike;
  title: string;
  decription: string;
}

const Map: FC<MapProps> = ({ center, title, decription }) => {
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/light-v11",
      center: center,
      zoom: 12,
      maxZoom: 20,
      minZoom: 10,
      scrollZoom: false,
    });

    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false, showZoom: true }),
    );
    new mapboxgl.Marker({ color: "black" }).setLngLat(center).addTo(map);

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="relative mb-[2.813rem] lg:mb-[6.25rem] 4xl:h-[81.6875rem]">
      <div className="overflow-hidden pb-12 lg:pb-[4.938rem] ">
        <div className="bg-gray pt-12 lg:pt-[6.25rem]">
          <div className="mx-auto max-w-[54.188rem] px-4 pb-10 text-center xs:px-7 lg:pb-[6.375rem] 2xl:px-0">
            <h2 className="font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-[1.313rem] lg:leading-[1.5rem] 4xl:h-[1.313rem]">
              DIE Lage
            </h2>
            <h3 className="my-6 font-gt-book-italic text-xl text-medium-blue lg:mb-[2.906rem] lg:mt-[2.594rem] lg:text-[1.875rem] lg:leading-[2.5rem]">
              <TextWithLineBreaks text={title} />
            </h3>
            <p className=" text-[0.938rem] leading-[1.563rem] text-medium-blue">
              <TextWithLineBreaks text={decription} />
            </p>
          </div>
        </div>
        <div
          className="map-container h-[25rem] xl:h-[48.25rem]"
          ref={mapContainerRef}
        />
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 flex h-[7rem] w-full max-w-[56.25rem] -translate-x-1/2  rounded-lg bg-[#AAAAAA] px-1 text-white xs:px-4 sm:px-10 md:h-[13vw] 4xl:h-[11.625rem]">
        <div className="flex items-center  justify-between gap-2 xs:w-[80%]">
          <div className="flex items-center gap-1 xs:gap-2 ">
            <input
              type="checkbox"
              id="Galerien"
              name="Galerien"
              value="Galerien"
              className="peer relative size-3 shrink-0
                                  appearance-none rounded-sm border border-white bg-transparent accent-white checked:appearance-auto sm:size-4"
            />
            <label htmlFor="Galerien" className="text-sm sm:text-base">
              Galerien
            </label>
          </div>

          <div className="flex items-center gap-1 xs:gap-2 ">
            <input
              type="checkbox"
              id="Galerien"
              name="Galerien"
              value="Galerien"
              className="peer relative size-3 shrink-0
                                  appearance-none rounded-sm border border-white bg-transparent accent-white checked:appearance-auto sm:size-4"
            />
            <label htmlFor="Galerien" className="text-sm sm:text-base">
              Kultur
            </label>
          </div>

          <div className="flex items-center gap-1 xs:gap-2 ">
            <input
              type="checkbox"
              id="Galerien"
              name="Galerien"
              value="Galerien"
              className="peer relative size-3 shrink-0
                                  appearance-none rounded-sm border border-white bg-transparent accent-white checked:appearance-auto sm:size-4"
            />
            <label htmlFor="Galerien" className="text-sm sm:text-base">
              Genuss
            </label>
          </div>

          <div className="flex items-center gap-1 xs:gap-2 ">
            <input
              type="checkbox"
              id="Galerien"
              name="Galerien"
              value="Galerien"
              className="peer relative size-3 shrink-0
                                  appearance-none rounded-sm border border-white bg-transparent accent-white checked:appearance-auto sm:size-4"
            />
            <label htmlFor="Galerien" className="text-sm sm:text-base">
              Shopping
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
