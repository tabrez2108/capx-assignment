"use client";

import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverProps,
} from "@heroui/react";
import { motion } from "framer-motion";
import HeroButton from "../../Common_UI_Kit/HeroButton/HeroButton";
import ChevronDownIcon from "@/assets/icons/Chevron-Down";
import TwitterXIcon from "@/assets/icons/Twitter-X";
import CopyIcon from "@/assets/icons/Copy";
import DownloadIcon from "@/assets/icons/Download";
import ImageIcon from "@/assets/icons/Image";

interface FeaturesButtonsDropdownProps extends Omit<PopoverProps, "children"> {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  contentClassName?: string;
  /** Optional placement for Popover */
  placement?: string;
}

const FeaturesButtonsDropdown: React.FC<FeaturesButtonsDropdownProps> = ({
  trigger,
  children,
  contentClassName = "",
  placement,
  ...popoverProps
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttons = [
    { icon: <TwitterXIcon />, label: "Share on Twitter" },
    { icon: <CopyIcon />, label: "Copy Capx Tazo" },
    { icon: <DownloadIcon />, label: "Download Capx Tazo" },
    { icon: <ImageIcon />, label: "Download PFP" },
  ];

  // Framer Motion variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // faster staggering
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -6, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2, // faster animation per item
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className={`absolute top-0 ${
        isMobile ? "right-2 scale-[0.85] origin-top-right" : "pt-1 right-0"
      } ${contentClassName}`}
    >
      {/* @ts-expect-error placement prop missing from PopoverProps types but valid at runtime */}
      <Popover {...popoverProps} placement={isMobile ? "bottom" : "bottom-start"}>
        <PopoverTrigger>
          {trigger ?? (
            <HeroButton
              isIconOnly
              className="!min-w-10 !min-h-10 !bg-darkLiver !rounded-2xl"
            >
              <ChevronDownIcon />
            </HeroButton>
          )}
        </PopoverTrigger>

        <PopoverContent
          className={`p-0 ${
            isMobile ? "scale-[0.824] origin-top" : "pt-1"
          } ${contentClassName}`}
        >
          {children ?? (
            <motion.div
              className="flex flex-col gap-2.5"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {buttons.map((btn, i) => (
                // @ts-expect-error variants prop missing from PopoverProps types but valid at runtime
                <motion.div key={i} variants={itemVariants}>
                  <HeroButton
                    startContent={btn.icon}
                    isIconOnly={isMobile}
                    className={
                      isMobile
                        ? "!min-w-10 !min-h-10"
                        : "!min-w-10 !min-h-10 !text-sm !font-normal !gap-2.5 !px-3"
                    }
                    classStartContent="!fill-philippineSilver"
                  >
                    {!isMobile && btn.label}
                  </HeroButton>
                </motion.div>
              ))}
            </motion.div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FeaturesButtonsDropdown;
