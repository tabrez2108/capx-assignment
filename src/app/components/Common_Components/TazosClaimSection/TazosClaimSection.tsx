"use client";

import React from "react";
import HeroButton from "../../Common_UI_Kit/HeroButton/HeroButton";
import TwitterXIcon from "@/assets/icons/Twitter-X";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const imgPath = "/assets/images/";

const TazosClaimSection: React.FC = () => {
  const pathname = usePathname();
  return (
    <section className="w-full flex items-center flex-col gap-4">
      <Image
        fill
        src={`${imgPath}tazos-logo.webp`}
        alt="Tazos Logo"
        loading="lazy"
        className="!w-43 !h-30 !object-contain !object-center !static"
      />

      <div className="flex items-center flex-col gap-1">
        <h6 className="text-white text-lg font-normal text-center leading-[1.2]">
          Badge of recognition for CT
        </h6>

        {pathname === "/eligible" ? (
          <p className="text-white text-sm font-normal text-center leading-[1.2]">
            signed in as {" "}
            <Link href="/" className="text-primary leading-[1.2]">@sahil_pednekar3</Link>
          </p>
        ) : null}        
      </div>

      <HeroButton
        buttonType={pathname === "/eligible" ? "secondary" : "primary"}
        endContent={pathname === "/eligible" ? undefined : <TwitterXIcon />}
        className="!min-w-37"
      >
        {pathname === "/eligible" ? "Nominate" : "Claim with"}
      </HeroButton>
    </section>
  );
};

export default TazosClaimSection;
