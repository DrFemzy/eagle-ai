import React from "react";
import { ContainImage } from "./myImage";
import Link from "next/link";

function Brand() {
  return (
    <Link href={"/"} className="flex items-center gap-[1.20419rem]">
      <div className="relative w-[2.39631rem] h-[2.1875rem]">
        <ContainImage src="/svgs/logo.svg" alt="Logo" />
      </div>
      <div className="relative w-[11.837rem] h-[1.21294rem]">
        <ContainImage src="/svgs/textLogo.svg" alt="Text Logo Horizontal" />
      </div>
    </Link>
  );
}

export default Brand;
