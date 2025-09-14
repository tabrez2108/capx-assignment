"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundAnimation from "../components/Common_Components/BackgroundAnimation/BackgroundAnimation";
import HeaderSection from "../components/Common_Components/HeaderSection/HeaderSection";
import EligibleImage from "./sub-components/EligibleImage";
import TazosClaimSection from "../components/Common_Components/TazosClaimSection/TazosClaimSection";
import EligibilitySearchSection from "../components/Common_Components/EligibilitySearchSection/EligibilitySearchSection";

export default function EligiblePage() {
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
    <div className="w-full min-h-dvh">
      <div className="w-full relative">
        {/* Background animation start here */}
        <BackgroundAnimation />

        <div className="flex flex-col z-10 relative">
          {/* Header section start here */}
          <HeaderSection />

          <div className="flex-1 flex justify-center items-center flex-col gap-4 px-5 relative">
            {/* Eligible image section start here */}
            <EligibleImage />

            {/* Tazos claim section start here */}
            <TazosClaimSection />
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl z-30 relative pt-4 pb-0 px-5 mx-auto md:pt-6 [&>section]:pb-0">
        {/* Eligibility search section start here */}
          <EligibilitySearchSection inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
