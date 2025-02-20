import React from "react";
import Brand from "./brand";
import { ContainImage } from "./myImage";

function Footer() {
  return (
    <footer className="flex justify-between items-center sm:flex-col gap-4 py-[1.88rem] mx-[19.375rem] 3xl:mx-[15rem] 2xl:mx-[10rem] xl:mx-10 sm:mx-5 border-t border-white/20 ">
      <Brand showTextLogo />

      <p className="text-[1rem] text-[#8CA0B3] text-center">
        Copyright © {new Date().getFullYear()} Eagle AI
      </p>

      <div className="relative w-[10rem] h-8">
        <ContainImage src="/pngs/socials.png" alt="Social Icons" />
      </div>
    </footer>
  );
}

export default Footer;
