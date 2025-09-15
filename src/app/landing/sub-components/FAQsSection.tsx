"use client";

import React from "react";
import CustomAccordion from "@/app/components/Common_UI_Kit/HeroAccordion/HeroAccordion";
import { accordionItems } from "./constant";

const FAQsSection: React.FC = () => {
  return (
    <section className="w-full max-w-130 mt-13.5 mx-auto">
      <h2 className="text-white text-4xl font-normal text-center mb-4">FAQ</h2>

      <CustomAccordion
        items={accordionItems}
        defaultContent={<p>No content available.</p>}
      />
    </section>
  );
};

export default FAQsSection;
