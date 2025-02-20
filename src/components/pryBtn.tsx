import { openSans } from "@/fonts";
import { cn } from "@/utils/cn";
import React from "react";

function PryBtn({ text, fullWidth }: { text: string; fullWidth?: boolean }) {
  return (
    <button
      className={cn(
        `${openSans.className} bg-pryLinearGradient text-white px-[1.875rem] py-[0.72rem] rounded-full text-[1rem] font-normal leading-normal self-start`,
        fullWidth && "self-auto"
      )}
    >
      {text}
    </button>
  );
}

export default PryBtn;
