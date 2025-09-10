"use client";

import React from "react";
import Image from "next/image";

const imgPath = "/assets/images/";

const LandingBgImage: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full pointer-events-none">
      <Image 
        fill
        src={`${imgPath}bg-grid-lines-img.webp`} 
        className="w-full h-full object-cover" 
        alt=""
        loading="lazy"
      />
      <Image 
        fill
        src={`${imgPath}bg-effect-img.webp`}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt="Bg Img"
        loading="lazy" 
      />
      {/* style="background:linear-gradient(0deg, #080613 18.65%, rgba(8, 6, 19, 0.00) 90.21%);" */}
      <div className="w-full h-full bg-linear-to-t from-secondary to-secondary/0 absolute top-0 left-0" />
    </div>
  );
};

export default LandingBgImage;
