"use client";

import React from "react";
import PixelBlast from "./PixelBlast";

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="w-full min-h-dvh absolute inset-0 pointer-events-none rotate-180 [mask-image:linear-gradient(to_top,transparent,black_15%)]">
      <div className="w-full h-full relative">
        <PixelBlast
          variant="square"
          pixelSize={5}
          color="#1a1a1a"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.5}
          rippleThickness={0.1}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.1}
          liquidRadius={1.5}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
    </div>
  );
};

export default BackgroundAnimation;
