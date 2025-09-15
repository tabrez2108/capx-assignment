"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionProps } from "@heroui/react";
import ChevronRightIcon from "@/assets/icons/Chevron-Right";
interface CustomItem {
  key?: string | number;
  ariaLabel?: string;
  title?: string;
  content?: React.ReactNode;
}
interface CustomAccordionProps {
  items?: CustomItem[];
  defaultContent?: React.ReactNode;

  classNames?: {
    base?: string;
    trigger?: string;
    indicator?: string;
    title?: string;
    content?: string;
  };
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  items = [],
  defaultContent = "",
  classNames = {},
}) => {
  return (
    <Accordion
      className={`border-0 px-0 duration-300 transition-all ease-in-out group ${
        classNames.base ?? ""
      }`}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.key ?? index}
          aria-label={item.ariaLabel ?? `Accordion ${index + 1}`}
          className={`border-b-1 border-onyx flex-row-reverse gap-1 cursor-pointer py-0 duration-300 transition-all ease-in-out last:border-b-0 [&_section>div]:pt-0 [&_section>div]:pb-4 [&_button[data-slot="trigger"]]:cursor-pointer ${
            classNames.trigger ?? ""
          }`}
          title={
            <span
              className={`text-white text-base font-normal text-left duration-300 transition-all ease-in-out ${
                classNames.title ?? ""
              }`}
            >
              {item.title ?? `Accordion ${index + 1}`}
            </span>
          }
          indicator={
            <ChevronRightIcon
              className={`w-3.5 h-3.5 fill-white duration-300 transition-all ease-in-out group-data-[open=true]:rotate-90 ${
                classNames.indicator ?? ""
              }`}
            />
          }
        >
          <div
            className={`text-quickSilver text-sm font-normal duration-300 transition-all ease-in-out ${
              classNames.content ?? ""
            }`}
          >
            {item.content ?? defaultContent}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
