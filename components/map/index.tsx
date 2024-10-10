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
    <section className="relative mb-8 md:mb-[5.625rem] 4xl:h-[85.8125rem]">
      <div className="overflow-hidden pb-12 lg:pb-[4.938rem] ">
        <div className="bg-gray pt-12 lg:pt-[6.25rem]">
          <div className="mx-auto max-w-[54.188rem] px-4 pb-10 text-center xs:px-7 lg:pb-[6.375rem] 2xl:px-0">
            <h2 className="font-proxima-semibold uppercase leading-none tracking-wide text-brown lg:text-[1.313rem] lg:leading-[1.5rem] 4xl:h-[1.313rem]">
              DIE Lage
            </h2>
            <h3 className="my-6 font-gt-display-light text-xl text-medium-blue lg:mb-[2.906rem] lg:mt-[2.594rem] lg:text-[1.875rem] lg:leading-[2.5rem]">
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

      <div className="absolute bottom-0 left-1/2 z-10 flex h-[5rem] w-full max-w-[56.25rem] -translate-x-1/2 justify-center rounded-lg  bg-[#AAAAAA] px-1 text-white xs:justify-normal xs:px-4 md:h-[13vw] md:px-10 4xl:h-[11.625rem]">
        <div className="mt-5 flex items-center  justify-between gap-3 xs:w-[80%] sm:w-[70%] md:mt-10 lg:w-[90%]">
          <div className="flex items-center gap-1 xs:gap-2 ">
            <input
              type="checkbox"
              id="Galerien"
              name="Galerien"
              value="Galerien"
              className="peer relative size-3 shrink-0
                                  appearance-none rounded-sm border-[2px] border-white bg-transparent accent-white checked:appearance-auto lg:size-[1.625rem]"
            />
            <label
              htmlFor="Galerien"
              className="text-xs xs:text-sm lg:text-2xl"
            >
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
                                  appearance-none rounded-sm border-[2px] border-white bg-transparent accent-white checked:appearance-auto lg:size-[1.625rem]"
            />
            <label
              htmlFor="Galerien"
              className="text-xs xs:text-sm lg:text-2xl"
            >
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
                                  appearance-none rounded-sm border-[2px] border-white bg-transparent accent-white checked:appearance-auto lg:size-[1.625rem]"
            />
            <label
              htmlFor="Galerien"
              className="text-xs xs:text-sm lg:text-2xl"
            >
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
                                  appearance-none rounded-sm border-[2px] border-white bg-transparent accent-white checked:appearance-auto lg:size-[1.625rem]"
            />
            <label
              htmlFor="Galerien"
              className="text-xs xs:text-sm lg:text-2xl"
            >
              Shopping
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
