"use client";

import React from "react";
import Image from "next/image";
import StarsBackgroundAnimation from "../StarsBackgroundAnimation/StarsBackgroundAnimation";
import CurvedUserName from "../CurvedUserName/CurvedUserName";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const imgPath = "/assets/images/";

const TazosCardSection: React.FC = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-115 aspect-[516/430] mx-auto relative origin-top max-md:scale-[1.1]">
      {pathname === "/eligible" ? (
        <div className="w-full flex justify-center items-center pointer-events-none absolute top-[40%] left-1/2 -translate-1/2">
          <motion.div
            className="w-full m-auto"
            initial={{ opacity: 0, y: -50, scale: 0.8 }} 
            animate={{ opacity: 1, y: 0, scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.2,
            }}
          >
            <StarsBackgroundAnimation />
          </motion.div>
        </div>
      ) : null}

      <Image
        fill
        src={`${imgPath}glass-box-img.webp`}
        alt="Glass Box"
        loading="lazy"
        className="!w-full !h-full !object-contain !object-center !static"
      />

      <div className="w-[46%] rounded-full aspect-square overflow-hidden absolute top-[14%] left-1/2 -translate-x-1/2">
        {pathname === "/eligible" ? (
          <>
            <Image
              fill
              src={`${imgPath}tazos-baze-water.webp`}
              alt="Blank Card"
              loading="lazy"
              className="!w-full !h-full !object-contain !object-center !static"
            />

            <div className="w-[80%] rounded-full aspect-square overflow-hidden absolute top-[50%] left-1/2 -translate-1/2">
              <Image
                fill
                src={`${imgPath}user-img.webp`}
                alt="Blank Card"
                loading="lazy"
                className="!w-full !h-full !object-contain !object-center !static"
              />
            </div>

            <div className="w-[183%] rounded-full aspect-square overflow-hidden absolute top-[50%] left-1/2 -translate-1/2 rotate-[-32deg]">
              <CurvedUserName 
                text="@sahil_pednekar3" 
                fontSize={14} 
                maxChars={20} 
              />
            </div>
          </>
        ) : (
          <Image
            fill
            src={`${imgPath}blank-tazos-card-img.webp`}
            alt="Blank Card"
            loading="lazy"
            className="!w-full !h-full !object-contain !object-center !static"
          />
        )}
      </div>

      <div className="w-[70%] rounded-xl aspect-[360/74] absolute left-1/2 bottom-[7.5%] -translate-x-1/2">
        <Image
          fill
          src={`${imgPath}card-text-box-img.webp`}
          alt="Blank Card"
          loading="lazy"
          className="!w-full !h-full !object-contain !object-center !absolute !inset-0"
        />

        {pathname === "/eligible" ? (
          <div className="w-full flex items-center gap-2.5 px-3 py-2.5 absolute inset-0">
            <Image
              fill
              src={`${imgPath}x-normal-img.webp`}
              alt="Blank Card"
              loading="lazy"
              className="!w-auto h-full max-h-13.5 min-h-9 !object-contain !object-center !static"
            />
            <div className="flex justify-center flex-col gap-0.5">
              <h6 className="text-onyx text-[clamp(0.625rem,_2vw,_0.875rem)] font-bold leading-[1.1]">
                Gets Shit Done
              </h6>
              <p className="text-darkSilver text-[clamp(0.5rem,_2vw,_0.75rem)] leading-[1.1] truncate-2-lines">
                A rare catch. Someone you can always count on. This one&#39;s a keeper.
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center flex-col gap-0.5 px-6 py-2 absolute inset-0">
            <h6 className="text-black/43 text-[clamp(0.625rem,_2vw,_1.125rem)] font-normal leading-[1.1] text-center">
              Capx tazos
            </h6>
            <p className="text-black/30 text-[clamp(0.5rem,_2vw,_0.75rem)] leading-[1.1] text-center truncate-2-lines">
              For the real ones. The ones who show up no matter the climate, no matter the cycle.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TazosCardSection;
