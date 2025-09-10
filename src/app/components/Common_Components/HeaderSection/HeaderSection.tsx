"use client";

import React from "react";
import Image from "next/image";

const svgPath = "/assets/svg/";

const HeaderSection: React.FC = () => {
  return (
    <header className="flex items-center justify-center shrink-0 z-30 relative p-4 mt-4 md:mt-8">
      <div className="flex justify-center items-center gap-4">
        <Image 
          fill
          src={`${svgPath}monad-logo-white.svg`} 
          alt="Monad" 
          loading="lazy"
          className="!w-32 !h-7 !static"
        />
      </div>
    </header>
  );
};

export default HeaderSection;
