import { openSans } from "@/fonts";
import React from "react";

function PryBtn({ text }: { text: string }) {
  return (
    <button
      className={`${openSans.className} bg-pryLinearGradient text-white px-[1.875rem] py-[0.72rem] rounded-full text-[1rem] font-normal leading-normal`}
    >
      {text}
    </button>
  );
}

export default PryBtn;
