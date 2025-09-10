"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const imgPath = "/assets/images/";

const CardFlipAnimation: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const loopFlip = async () => {
      while (true) {
        // Flip 1
        await controls.start({ rotateY: 180, transition: { duration: 0.8, ease: "easeInOut" } });
        // Flip 2
        await controls.start({ rotateY: 360, transition: { duration: 0.8, ease: "easeInOut" } });
        // Pause for 1 second
        await new Promise((resolve) => setTimeout(resolve, 500));
        // Reset rotation for next loop
        await controls.set({ rotateY: 0 });
      }
    };
    loopFlip();
  }, [controls]);

  return (
    <section className="w-4/5 max-w-125 aspect-square mx-auto">
      <div
        className="aspect-square relative"
        style={{ perspective: 320 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={controls}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full"
            style={{ backfaceVisibility: "hidden", position: "absolute", top: 0, left: 0 }}
          >
            <Image
              fill
              src={`${imgPath}card-front-img.webp`}
              alt="Card Front"
              loading="lazy"
              className="!object-contain hue-rotate-180"
            />
          </div>

          {/* Back Side */}
          <div
            className="absolute w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Image
              fill
              src={`${imgPath}card-back-img.webp`}
              alt="Card Back"
              loading="lazy"
              className="!object-contain hue-rotate-180"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CardFlipAnimation;
