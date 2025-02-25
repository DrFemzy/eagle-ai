import React from "react";
import { ContainImage } from "./myImage";
import Link from "next/link";

function Brand({ showTextLogo }: { showTextLogo?: boolean }) {
  return (
    <Link href={"/"} className="flex items-center gap-[1.20419rem]">
      <div className="relative aspect-logo w-[2.39631rem] max-3xl:w-8">
        <ContainImage src="/svgs/logo.svg" alt="Logo" />
      </div>
      <div className="relative aspect-[11.837/1.21294] w-[11.837rem] max-3xl:w-5xl max-sm:hidden">
        <ContainImage src="/svgs/textLogo.svg" alt="Text Logo Horizontal" />
      </div>
      {showTextLogo && (
        <div className="relative aspect-[11.837/1.21294] w-[11.837rem] max-3xl:w-5xl hidden max-sm:block">
          <ContainImage src="/svgs/textLogo.svg" alt="Text Logo Horizontal" />
        </div>
      )}
    </Link>
  );
}

export default Brand;
