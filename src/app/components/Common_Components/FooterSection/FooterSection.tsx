"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const svgPath = "/assets/svg/";

const FooterSection: React.FC = () => {
  return (
    <footer className="pt-12 pb-24 flex justify-center items-center w-full flex-col space-y-1">
      <Image 
        fill
        src={`${svgPath}monad-logo.svg`} 
        alt="Monad" 
        loading="lazy"
        className="!w-32 !h-7 !static"
      />

      <p className="text-neutral-400">© 2025 Monad Foundation</p>

      <div className="flex items-center gap-2">
        <Link href="/" className="text-neutral-300 text-sm underline-offset-1 hover:text-neutral-400 hover:underline">Privacy Policy</Link>
        <Link href="/" className="text-neutral-300 text-sm underline-offset-1 hover:text-neutral-400 hover:underline">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default FooterSection;
