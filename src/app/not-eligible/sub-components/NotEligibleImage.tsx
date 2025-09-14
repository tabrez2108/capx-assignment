"use client";

import React from "react";
import Image from "next/image";

const imgPath = "/assets/images/";

const NotEligibleImage: React.FC = () => {
  return (
    <section className="w-full max-w-104 mx-auto">
      <div className="w-full max-w-100 mx-auto relative">
        <Image 
          fill
          src={`${imgPath}not-eligible-img.webp`} 
          alt="Monad" 
          loading="lazy"
        className="!w-full !h-auto !static"
        />
      </div>

      <p className="text-white text-base font-normal leading-[1.5] text-center">
        Sorry, you didnt make the cut this time. Stay tuned for more shots to join the AI Builder Economy.
      </p>
    </section>
  );
};

export default NotEligibleImage;
