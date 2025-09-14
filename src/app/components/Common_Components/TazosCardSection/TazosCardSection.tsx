"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const imgPath = "/assets/images/";

const TazosCardSection: React.FC = () => {
  return (
    <section className="w-4/5 max-w-129 aspect-[516/430] mx-auto relative">
      <Image
        fill
        src={`${imgPath}glass-box-img.webp`}
        alt="Glass Box"
        loading="lazy"
        className="!w-full !h-full !object-contain !object-center !static"
      />

      <div className="w-[46%] aspect-square absolute top-[14%] left-1/2 -translate-x-1/2">
        <Image
          fill
          src={`${imgPath}blank-tazos-card-img.webp`}
          alt="Blank Card"
          loading="lazy"
          className="!w-full !h-full !object-contain !object-center !static"
        />
      </div>

      <div className="w-[70%] rounded-xl aspect-[360/74] absolute left-1/2 bottom-[7.5%] -translate-x-1/2">
        <Image
          fill
          src={`${imgPath}card-text-box-img.webp`}
          alt="Blank Card"
          loading="lazy"
          className="!w-full !h-full !object-contain !object-center !absolute !inset-0"
        />

        {/* <div className="w-full flex flex-col gap-1 px-6 py-2 absolute inset-0">
          <h6 className="text-black/43 text-xl font-normal leading-[1.1] text-center">Capx tazos</h6>
          <p className="text-black/30 text-sm leading-[1.1] text-center">For the real ones. The ones who show up no matter the climate, no matter the cycle.</p>
        </div> */}

        <div className="w-full flex items-center gap-2.5 px-3 py-2.5 absolute inset-0">
          <div className="h-full max-h-13.5 min-h-7 bg-black/70 rounded-xl aspect-square " />
          <div className="flex flex-col gap-1">
            <h6 className="text-onyx text-sm font-bold leading-[1.1]">Gets Shit Done</h6>
            <p className="text-darkSilver text-xs leading-[1.1]">A rare catch. Someone you can always count on. This one's a keeper.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TazosCardSection;
