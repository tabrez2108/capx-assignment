"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundAnimation from "../components/Common_Components/BackgroundAnimation/BackgroundAnimation";
import HeaderSection from "../components/Common_Components/HeaderSection/HeaderSection";
import TazosCardSection from "../components/Common_Components/TazosCardSection/TazosCardSection";
import TazosClaimSection from "../components/Common_Components/TazosClaimSection/TazosClaimSection";
import EligibilitySearchSection from "../components/Common_Components/EligibilitySearchSection/EligibilitySearchSection";
import FAQsSection from "./sub-components/FAQsSection";
import FooterSection from "../components/Common_Components/FooterSection/FooterSection";

export default function Landing() {
  const [inputValue, setInputValue] = useState("");
  const [eligibilityStatus, setEligibilityStatus] = useState<null | "eligible" | "not-eligible">(null);
  const router = useRouter();

  const eligibleName: string = "sharvil";

  // Check eligibility instantly while typing
  const handleInputChange = (value: string) => {
    setInputValue(value);

    if (value.trim() === "") {
      setEligibilityStatus(null);
    } else if (value.trim() === eligibleName) {
      setEligibilityStatus("eligible");
    } else {
      setEligibilityStatus("not-eligible");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (eligibilityStatus === "eligible") {
      router.push("/eligible");
    } else {
      router.push("/not-eligible");
    }
  };

  return (
    <div className="min-h-dvh">
      <div className="w-full min-h-full relative">
        {/* Background animation start here */}
        <BackgroundAnimation />

        <div className="flex flex-col z-10 relative">
          {/* Header section start here */}
          <HeaderSection />

          <div className="flex-1 flex justify-center items-center flex-col gap-4 px-5 relative">
            {/* Tazos card section start here */}
            <TazosCardSection />

            {/* Tazos claim section start here */}
            <TazosClaimSection />
          </div>
        </div>
      </div>

      <div className="w-full z-30 relative px-5 py-25 mx-auto">
        {/* Eligibility search section start here */}
        <EligibilitySearchSection 
          inputValue={inputValue} 
          setInputValue={handleInputChange}
          handleSubmit={handleSubmit} 
          eligibilityStatus={eligibilityStatus}
        />

        {/* FAQ section start here */}
        <FAQsSection />
      </div>

      {/* Footer section start here */}
      <FooterSection />
    </div>
  );
}
