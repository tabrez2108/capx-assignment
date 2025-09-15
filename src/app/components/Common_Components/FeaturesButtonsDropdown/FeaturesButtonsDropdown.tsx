"use client";

import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverProps,
} from "@heroui/react";
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
  placement = "bottom-start",
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

  return (
    <div
      className={`absolute top-0 ${
        isMobile
          ? "right-2 scale-[0.85] origin-top-right"
          : "pt-1 right-0"
      } ${contentClassName}`}
    >
      {/* @ts-expect-error: placement prop missing from PopoverProps types but valid at runtime */}
      <Popover {...popoverProps} placement={placement}>
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
            isMobile
              ? "scale-[0.85] origin-top-right"
              : "pt-1"
          } ${contentClassName}`}
        >
          {children ?? (
            <div className="flex flex-col gap-2.5">
              {buttons.map((btn, i) => (
                <HeroButton
                  key={i}
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
              ))}
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FeaturesButtonsDropdown;
