import React, { ChangeEvent, useState } from "react";
import PryBtn from "./pryBtn";
import TextInput from "./textInput";

function WaitlistForm() {
  const [formDetails, setFormDetails] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    telegramUser: string;
  }>({ firstName: "", lastName: "", email: "", telegramUser: "" });

  const handleFormDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="flex flex-col gap-[1.94rem]">
      <TextInput
        name={"firstName"}
        value={formDetails.firstName}
        onchange={handleFormDetailsChange}
        type="text"
        placeholder="First Name"
      />
      <TextInput
        name={"lastName"}
        value={formDetails.lastName}
        onchange={handleFormDetailsChange}
        type="text"
        placeholder="Last Name"
      />
      <TextInput
        name={"email"}
        value={formDetails.email}
        onchange={handleFormDetailsChange}
        type="email"
        placeholder="Email"
      />
      <TextInput
        name={"telegramUser"}
        value={formDetails.telegramUser}
        onchange={handleFormDetailsChange}
        type="text"
        placeholder="Telegram User"
      />

      <div className="flex justify-between">
        <div></div>
        <PryBtn text="Register your interest now" />
      </div>
    </form>
  );
}

export default WaitlistForm;
