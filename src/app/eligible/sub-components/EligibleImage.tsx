"use client";

import React from "react";
import Image from "next/image";
import HeroButton from "@/app/components/Common_UI_Kit/HeroButton/HeroButton";
import TwitterXIcon from "@/assets/icons/Twitter-X";
import CopyIcon from "@/assets/icons/Copy";
import DownloadIcon from "@/assets/icons/Download";
import ImageIcon from "@/assets/icons/Image";

const imgPath = "/assets/images/";

const EligibleImage: React.FC = () => {
  return (
    <section className="w-full max-w-76.25 mx-auto relative">
      <div className="w-full max-w-full drop-shadow-gb-glow p-4 mx-auto relative">
        <Image 
          fill
          src={`${imgPath}eligible-card-img.webp`} 
          alt="Monad" 
          loading="lazy"
          className="!w-full !h-full !aspect-square !object-contain !object-center !hue-rotate-180 !drop-shadow-card !static"
        />
      </div>

      <div className="flex flex-col gap-2 absolute top-1/2 right-0 -translate-y-1/2 scale-[0.8] origin-right">
        <HeroButton buttonType="secondary" isIconOnly className="!min-w-10 !min-h-10">
          <TwitterXIcon />
        </HeroButton>
        <HeroButton buttonType="secondary" isIconOnly className="!min-w-10 !min-h-10">
          <CopyIcon />
        </HeroButton>
        <HeroButton buttonType="secondary" isIconOnly className="!min-w-10 !min-h-10">
          <DownloadIcon />
        </HeroButton>
        <HeroButton buttonType="secondary" isIconOnly className="!min-w-10 !min-h-10">
          <ImageIcon />
        </HeroButton>
      </div>
    </section>
  );
};

export default EligibleImage;
