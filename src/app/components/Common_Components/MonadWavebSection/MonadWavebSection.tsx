"use client";

import React from "react";
// import Image from "next/image";

// const imgPath = "/assets/images/";

const strokeTitleText = "MONAD CARDS";

const MonadWavebSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-105 relative mx-auto">
        {/* <Image 
          fill
          src={`${imgPath}monad-cards-waveb.webp`} 
          alt="Monad" 
          loading="lazy"
          className="!w-full !h-auto !static"
        /> */}
        <h1 className="stroke-title-text">
          {strokeTitleText}
        </h1>
      </div>

      <h6 className="text-lightGoldenrodYellow text-sm font-semibold leading-[1.35] italic text-center md:text-lg px-4 mt-2">
        &#34;A token of appreciation for Crypto Twitter&#34;
      </h6>
    </section>
  );
};

export default MonadWavebSection;
