import React from "react";
import { ContainImage } from "./myImage";
import Link from "next/link";

function Brand() {
  return (
    <Link href={"/"} className="flex items-center gap-[1.20419rem]">
      <div className="relative aspect-logo w-[2.39631rem] 3xl:w-[2rem]">
        <ContainImage src="/svgs/logo.svg" alt="Logo" />
      </div>
      <div className="relative aspect-textLogo w-[11.837rem] 3xl:w-[10rem] sm:hidden">
        <ContainImage src="/svgs/textLogo.svg" alt="Text Logo Horizontal" />
      </div>
    </Link>
  );
}

export default Brand;
