"use client";

import React from "react";
import HeroInput from "../../Common_UI_Kit/HeroInput/HeroInput";
import HeroButton from "../../Common_UI_Kit/HeroButton/HeroButton";
import SearchIcon from "@/assets/icons/Search";
import AtIcon from "@/assets/icons/At";
import Image from "next/image";

const svgPath = "/assets/svg/";

interface EligibilitySearchSectionProps {
  inputValue: string;
  setInputValue: (val: string) => void; // 👈 now just pass string
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  eligibilityStatus?: "eligible" | "not-eligible" | null;
}

const EligibilitySearchSection: React.FC<EligibilitySearchSectionProps> = ({
  inputValue,
  setInputValue,
  handleSubmit,
  eligibilityStatus = null,
}) => {
  return (
    <section className="w-full max-w-130 mx-auto">
      <div className="w-full flex flex-col gap-1 mb-4">
        <h2 className="text-white text-xl font-normal text-center">
          Check your eligibility below!
        </h2>
        <h6 className="text-spanishGray text-base font-normal text-center">
          Account linking not required.
        </h6>
      </div>

      <div className="w-full max-w-72 mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <HeroInput
            inputType="textField"
            id="userName"
            name="userName"
            placeholder="Enter Twitter Username"
            startContent={
              inputValue && inputValue.trim() !== "" ? <AtIcon /> : <SearchIcon />
            }
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            classFormControl="!mb-0"
          />

          {/* Always show this if input not empty */}
          {inputValue.trim() !== "" && (
            <div className="w-fit border border-dashed border-arsenic rounded-full flex justify-center items-center gap-2 p-2 mt-4 mx-auto">
              <div
                className={`w-fit h-8 border rounded-full font-inter text-white text-sm font-normal leading-none truncate flex justify-center items-center gap-2 px-2 ${
                eligibilityStatus === "eligible"
                  ? "bg-success/25 border-success"
                  : "bg-danger/25 border-danger"
              }`}
              >
                {eligibilityStatus === "eligible"
                  ? (
                    <>
                      <Image
                        fill
                        src={`${svgPath}check-badge.svg`}
                        alt="Card Front"
                        loading="lazy"
                        className="!w-4.5 !h-4.5 !object-contain !object-center !static"
                      />
                      <span className="leading-none inline-block">You are Eligible</span>
                    </>
                  )
                  : (
                    <>
                      <Image
                        fill
                        src={`${svgPath}broken-heart.svg`}
                        alt="Card Front"
                        loading="lazy"
                        className="!w-4.5 !h-4.5 !object-contain !object-center !static"
                      />
                      <span className="leading-none inline-block">You aren’t Eligible</span>
                    </>
                  )}
              </div>

              {eligibilityStatus === "eligible"
                ? <HeroButton 
                    buttonType="metallic" 
                    type="submit" 
                    buttonSmall
                    className="!font-[Inter]"
                  >
                    Claim
                  </HeroButton>
                : null
              }
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default EligibilitySearchSection;
