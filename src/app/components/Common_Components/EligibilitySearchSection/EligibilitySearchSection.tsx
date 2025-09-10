"use client";

import React from "react";
import CustomInputField from "../../Common_UI_Kit/HeroInput/HeroInput";
import SearchIcon from "@/assets/icons/Search";

interface EligibilitySearchSectionProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const EligibilitySearchSection: React.FC<EligibilitySearchSectionProps> = ({
  inputValue,
  setInputValue,
  handleSubmit,
}) => {
  return (
    <section className="w-full max-w-3xl pb-8 mx-auto md:pb-15 md:px-30">
      <h2 className="text-white text-3xl font-semibold text-center mb-2 md:text-4xl">
        Check Eligibility
      </h2>

      <form onSubmit={handleSubmit}>
        <CustomInputField
          inputType="textField"
          id="userName"
          name="userName"
          placeholder="Enter username"
          startContent={<SearchIcon />}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          classFormControl="!mb-0 !mt-4 md:!mt-8"
          classStartContent="!fill-darkBronze"
        />

        <button type="submit" />
      </form>
    </section>
  );
};

export default EligibilitySearchSection;
