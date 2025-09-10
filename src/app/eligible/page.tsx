"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import LandingBgImage from "../components/Common_Components/LandingBgImage/LandingBgImage";
import HeaderSection from "../components/Common_Components/HeaderSection/HeaderSection";
import EligibleImage from "./sub-components/EligibleImage";
import MonadWavebSection from "../components/Common_Components/MonadWavebSection/MonadWavebSection";
import EligibilitySearchSection from "../components/Common_Components/EligibilitySearchSection/EligibilitySearchSection";
import Link from "next/link";

export default function EligiblePage() {
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
    <div className="min-h-dvh">
      <div className="relative">
        {/* Landing background image start here */}
        {/* <LandingBgImage /> */}

        <div className="flex flex-col z-10 relative">
          {/* Sub-header start here */}
          <HeaderSection />

          <div className="flex-1 flex justify-center items-center flex-col gap-4 px-4 relative md:gap-6">
            {/* Eligible image section start here */}
            <EligibleImage />

            {/* Monad waveb image section start here */}
            <MonadWavebSection />

            <p className="text-white text-base font-normal leading-[1.35] text-center">
              Signed in as {" "}
              <Link href="/" className="text-primary">user/capx.ai</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl z-30 relative px-4 pt-4 pb-0 mx-auto md:pt-6 [&>section]:pb-0">
        {/* Eligibility search section start here */}
          <EligibilitySearchSection inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
