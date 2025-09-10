"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionProps } from "@heroui/react";
import ChevronRightIcon from "@/assets/icons/Chevron-Right";

// Define each accordion item type
interface CustomItem {
  key?: string | number;
  ariaLabel?: string;
  title?: string;
  content?: React.ReactNode;
}

interface CustomAccordionProps {
  items?: CustomItem[];
  defaultContent?: React.ReactNode;

  // ✅ classNames prop to customize styles
  classNames?: {
    base?: string;
    trigger?: string;
    indicator?: string;
    title?: string;
    content?: string;
  };
}

// ✅ Extend HeroUI AccordionProps to include classNames
type FixedAccordionProps = AccordionProps & {
  classNames?: {
    base?: string;
    trigger?: string;
    indicator?: string;
    title?: string;
    content?: string;
  };
};

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  items = [],
  defaultContent = "",
  classNames = {},
}) => {
  return (
    <Accordion
      className={`border-0 px-0 duration-300 transition-all ease-in-out group ${classNames.base ?? ""}`}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.key ?? index}
          aria-label={item.ariaLabel ?? `Accordion ${index + 1}`}
          title={
            <span className={`text-lightGoldenrodYellow text-xl font-bold text-left duration-300 transition-all ease-in-out ${classNames.title ?? ""}`}>
              {item.title ?? `Accordion ${index + 1}`}
            </span>
          }
          indicator={<ChevronRightIcon className={`w-3.5 h-3.5 fill-black duration-300 transition-all ease-in-out group-data-[open=true]:rotate-90 ${classNames.indicator ?? ""}`} />}
          className={`flex-row-reverse gap-1 py-0 mb-1 last:mb-0 duration-300 transition-all ease-in-out [&>h2>button]:cursor-pointer [&>h2>button]:py-2 [&>h2>button_svg]:fill-lightGoldenrodYellow [&>section>div]:pt-0 ${classNames.trigger ?? ""}`}
          contentClassName={`duration-300 transition-all ease-in-out ${classNames.content ?? ""}`}
        >
          {item.content ?? defaultContent}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
