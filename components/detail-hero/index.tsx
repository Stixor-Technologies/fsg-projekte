"use client";
import { StaticImageData } from "next/image";
import React, { FC } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface DetailHeroProps {
  displayImage: StaticImageData;
  projectName: StaticImageData;
}

const DetailHero: FC<DetailHeroProps> = ({ displayImage, projectName }) => {
  const path = usePathname();

  return (
    <div className="relative mb-[2.813rem] lg:mb-24">
      <Image src={displayImage} alt="" />
      <div className="absolute inset-0 flex items-center justify-center 4xl:mt-16">
        <Image
          width={path == "/projekt-details/138" ? 380 : 220}
          src={projectName}
          alt=""
          className={`relative max-w-[14vw] 2xl:max-w-none`}
        />
      </div>
    </div>
  );
};

export default DetailHero;
