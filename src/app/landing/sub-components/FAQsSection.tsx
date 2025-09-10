"use client";

import React from "react";
import CustomAccordion from "@/app/components/Common_UI_Kit/HeroAccordion/HeroAccordion";
import { accordionItems } from "./constant";

const FAQsSection: React.FC = () => {
  return (
    <section className="bg-secondary border border-primary rounded-4xl pt-10 pb-8 px-6 md:px-30 md:py-15 mx-auto">
      <h2 className="text-white text-3xl font-semibold text-center mb-10 md:text-4xl">Frequently Asked Questions</h2>

      <CustomAccordion
        items={accordionItems}
        defaultContent={<p>No content available.</p>}
      />
    </section>
  );
};

export default FAQsSection;
