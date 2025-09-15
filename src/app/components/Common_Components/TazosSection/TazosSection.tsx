"use client";

import React from "react";
import TazosCardSection from "../TazosCardSection/TazosCardSection";
import TazosClaimSection from "../TazosClaimSection/TazosClaimSection";
import NotEligibleImage from "@/app/not-eligible/sub-components/NotEligibleImage";
import { usePathname } from "next/navigation";

const TazosSection: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="flex-1 flex justify-center items-center flex-col gap-4 px-5 relative max-md:gap-10">
      {pathname === "/not-eligible" ? (
        <>
          {/* Not eligible image section start here */}
          <NotEligibleImage />
        </>
      ) : (
        <>
          {/* Tazos card section start here */}
          <TazosCardSection />
        </>
      )}

      {/* Tazos claim section start here */}
      <TazosClaimSection />
    </div>
  );
};

export default TazosSection;
