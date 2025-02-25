import React from "react";
import Brand from "./brand";
import { ContainImage } from "./myImage";

function Footer() {
  return (
    <footer className="flex justify-between items-center max-sm:flex-col gap-4 py-[1.88rem] mx-7xl max-3xl:mx-6xl max-2xl:mx-5xl max-xl:mx-10 max-sm:mx-5 border-t border-white/20 ">
      <Brand showTextLogo />

      <p className="text-base text-[#8CA0B3] text-center">
        Copyright © {new Date().getFullYear()} Eagle AI
      </p>

      <div className="relative w-5xl h-8">
        <ContainImage src="/pngs/socials.png" alt="Social Icons" />
      </div>
    </footer>
  );
}

export default Footer;
