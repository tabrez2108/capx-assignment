"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroButton from "../components/Common_UI_Kit/HeroButton/HeroButton";
import LandingBgImage from "../components/Common_Components/LandingBgImage/LandingBgImage";
import TwitterXIcon from "@/assets/icons/Twitter-X";
import FAQsSection from "./sub-components/FAQsSection";
import FooterSection from "../components/Common_Components/FooterSection/FooterSection";
import EligibilitySearchSection from "../components/Common_Components/EligibilitySearchSection/EligibilitySearchSection";
import CardFlipAnimation from "../components/Common_Components/CardFlipAnimation/CardFlipAnimation";
import HeaderSection from "../components/Common_Components/HeaderSection/HeaderSection";
import MonadWavebSection from "../components/Common_Components/MonadWavebSection/MonadWavebSection";

export default function Landing() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  // Mock eligibility check (replace with API call later)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eligibleName:string = "sharvil";

    if (eligibleName === inputValue) {
      router.push("/eligible");
    } else {
      router.push("/not-eligible");
    }
  };

  return (
    <>
      <div className="relative min-h-full">
        {/* Landing background image start here */}
        <LandingBgImage />

        <div className="flex flex-col z-10 relative">
          {/* Sub-header start here */}
          <HeaderSection />

          <div className="flex-1 flex justify-center items-center flex-col gap-4 px-4 relative md:gap-6">
            {/* Card flip animation section start here */}
            <CardFlipAnimation />

            {/* Monad waveb image section start here */}
            <MonadWavebSection />

            {/* Eligible / Not Eligible condition action section start here */}
            <section className="w-full flex items-center flex-col gap-4">
              <HeroButton 
                buttonType="primary" 
                endContent={<TwitterXIcon />}
                // onClick={checkEligibility}
              >
                Claim with
              </HeroButton>

              <p className="text-lightGoldenrodYellow text-base leading-[1.35] text-center px-4 mt-2">
                Check your eligibility below! Account linking not required.
              </p>
          </section>
          </div>
        </div>
      </div>

      <div className="bg-radial-[55.25%_55.25%_at_50%_100%] from-darkBronze from-0% to-secondary to-100%">
        <div className="max-w-4xl z-30 relative px-4 py-4 mx-auto md:py-10">
          {/* Eligibility search section start here */}
          <EligibilitySearchSection inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} />

          {/* FAQ section start here */}
          <FAQsSection />
        </div>

        {/* Footer section start here */}
        <FooterSection />
      </div>
    </>
  );
}
