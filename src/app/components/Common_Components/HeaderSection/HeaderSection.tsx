"use client";

import React from "react";
import Image from "next/image";

const svgPath = "/assets/svg/";

const HeaderSection: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-center shrink-0 z-30 relative px-5 py-4 mb-2 mt-9.5 max-md:mt-5">
      <div className="flex justify-center items-center gap-4">
        <Image 
          fill
          src={`${svgPath}capx-logo.svg`} 
          alt="Monad" 
          loading="lazy"
          className="!w-23 !h-7.25 !static"
        />
      </div>
    </header>
  );
};

export default HeaderSection;
