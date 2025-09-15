"use client";

import React from "react";
import Link from "next/link";

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full px-5 py-7.5">
      <div className="w-full max-w-300 flex justify-between items-center flex-wrap gap-3 mx-auto">
        <p className="text-white/45 text-sm font-normal">2024, 2025 Capx AI ®</p>

        <div className="flex items-center gap-4">
          <Link href="/" className="text-white text-sm font-normal hover:text-primary hover:underline">Capx website</Link>
          <Link href="/" className="text-white text-sm font-normal hover:text-primary hover:underline">Discord</Link>
          <Link href="/" className="text-white text-sm font-normal hover:text-primary hover:underline">Twitter</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
