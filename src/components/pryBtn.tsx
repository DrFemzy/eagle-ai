import { openSans } from "@/fonts";
import { cn } from "@/utils/cn";
import { Loader } from "lucide-react";
import React from "react";

function PryBtn({
  text,
  fullWidth,
  mobileFullWidth,
  loading,
  disable,
}: {
  text: string;
  fullWidth?: boolean;
  mobileFullWidth?: boolean;
  loading?: boolean;
  disable?: boolean;
}) {
  return (
    <button
      disabled={disable}
      className={cn(
        `${openSans.className} cursor-pointer bg-[linear-gradient(115deg,#1870f6_62.27%,#32fefe_95.1%)] text-white px-[1.875rem] py-[0.72rem] rounded-full text-[1rem] font-normal leading-normal self-start`,
        fullWidth && "self-auto",
        mobileFullWidth && "max-md:w-full",
        disable && "cursor-not-allowed"
      )}
    >
      {loading ? (
        <Loader
          size={16}
          className="text-white text-center animate-spin w-full"
        />
      ) : (
        text
      )}
    </button>
  );
}

export default PryBtn;
