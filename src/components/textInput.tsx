import { openSans } from "@/fonts";
import React from "react";

function TextInput({
  type,
  placeholder,
  value,
  name,
  onchange,
}: {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${openSans.className} px-5 py-5 text-[1rem] text-[#ABAEB4] rounded-[1.5625rem] inputBg focus:outline-none focus:border-none`}
      value={value}
      onChange={onchange}
    />
  );
}

export default TextInput;
