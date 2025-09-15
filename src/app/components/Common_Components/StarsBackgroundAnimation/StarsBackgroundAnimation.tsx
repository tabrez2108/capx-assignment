"use client";

import React from "react";
import { motion } from "framer-motion";

interface StarsBackgroundAnimationProps {
  /** Optional CSS className for the SVG */
  className?: string;
  /** Default fill color of the paths */
  fill?: string;
}

const paths: string[] = [
  "M88.6,211.1l1.3,6.1c0.8,3.8,3.8,6.8,7.6,7.6l6.1,1.3l-6.1,1.3c-3.8,0.8-6.8,3.8-7.6,7.6l-1.3,6.1l-1.3-6.1c-0.8-3.8-3.8-6.8-7.6-7.6l-6.1-1.3l6.1-1.3c3.8-0.8,6.8-3.8,7.6-7.6L88.6,211.1z",
  "M592.6,182.1l1.1,5.3c0.7,3.3,3.3,5.9,6.6,6.6l5.3,1.1l-5.3,1.1c-3.3,0.7-5.9,3.3-6.6,6.6l-1.1,5.3l-1.1-5.3c-0.7-3.3-3.3-5.9-6.6-6.6l-5.3-1.1l5.3-1.1c3.3-0.7,5.9-3.3,6.6-6.6L592.6,182.1z",
  "M543.6,102.1l0.5,2.4c0.3,1.5,1.5,2.7,3,3l2.4,0.5l-2.4,0.5c-1.5,0.3-2.7,1.5-3,3l-0.5,2.4l-0.5-2.4c-0.3-1.5-1.5-2.7-3-3l-2.4-0.5l2.4-0.5c1.5-0.3,2.7-1.5,3-3L543.6,102.1z",
  "M553.6,286.1l0.5,2.4c0.3,1.5,1.5,2.7,3,3l2.4,0.5l-2.4,0.5c-1.5,0.3-2.7,1.5-3,3l-0.5,2.4l-0.5-2.4c-0.3-1.5-1.5-2.7-3-3l-2.4-0.5l2.4-0.5c1.5-0.3,2.7-1.5,3-3L553.6,286.1z",
  "M57.6,316.1l0.5,2.4c0.3,1.5,1.5,2.7,3,3l2.4,0.5l-2.4,0.5c-1.5,0.3-2.7,1.5-3,3l-0.5,2.4l-0.5-2.4c-0.3-1.5-1.5-2.7-3-3l-2.4-0.5l2.4-0.5c1.5-0.3,2.7-1.5,3-3L57.6,316.1z",
  "M77.6,78.1l0.5,2.4c0.3,1.5,1.5,2.7,3,3l2.4,0.5l-2.4,0.5c-1.5,0.3-2.7,1.5-3,3l-0.5,2.4l-0.5-2.4c-0.3-1.5-1.5-2.7-3-3l-2.4-0.5l2.4-0.5c1.5-0.3,2.7-1.5,3-3L77.6,78.1z",
  "M578.6,0.1l2.1,9.7c1.3,6.1,6.1,10.9,12.2,12.2l9.7,2.1l-9.7,2.1c-6.1,1.3-10.9,6.1-12.2,12.2l-2.1,9.7l-2.1-9.7c-1.3-6.1-6.1-10.9-12.2-12.2l-9.7-2.1l9.7-2.1c6.1-1.3,10.9-6.1,12.2-12.2L578.6,0.1z",
  "M25.1,122.1l2.3,11.8c1.2,6.1,5.9,10.9,11.9,12.3l10.2,2.4l-10.2,2.4c-6.1,1.4-10.7,6.2-11.9,12.3L25.1,175l-2.3-11.8c-1.2-6.1-5.9-10.9-11.9-12.3l-10.2-2.4l10.2-2.4c6.1-1.4,10.7-6.2,11.9-12.3L25.1,122.1z"
];

const StarsBackgroundAnimation: React.FC<StarsBackgroundAnimationProps> = ({
  className,
  fill = "#C9FE36",
}) => {
  return (
    <svg
      viewBox="0 0 606 329"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {paths.map((d, index) => {
        const duration = 0.75 + Math.random() * 1.5;
        const delay = Math.random() * 1.5;
        const introDelay = Math.random() * 0.3;

        return (
          <motion.path
            key={index}
            d={d}
            fill={fill}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [1, 0.1, 1],
              scale: 1,
            }}
            transition={{
              opacity: {
                duration,
                delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
              scale: {
                duration: 0.75,
                delay: introDelay,
                ease: "easeOut",
              },
            }}
          />
        );
      })}
    </svg>
  );
};

export default StarsBackgroundAnimation;
