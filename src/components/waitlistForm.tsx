import React, { ChangeEvent, useState } from "react";
import PryBtn from "./pryBtn";
import TextInput from "./textInput";
import myAxios from "@/lib/myAxios";
import { SERVER_URL } from "@/lib/constants";
import { toast } from "sonner";
import ScrollAnimation from "./scrollAnimation";

function WaitlistForm() {
  const [formDetails, setFormDetails] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    telegram: string;
  }>({ firstName: "", lastName: "", email: "", telegram: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleFormDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmitWaitlistForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ formDetails });

    if (
      !formDetails.firstName ||
      !formDetails.email ||
      !formDetails.lastName ||
      !formDetails.telegram
    ) {
      toast.warning("All fields are required");
      return;
    }
    setSubmitting(true);

    const headers = {
      "Content-Type": "application/json",
    };

    myAxios
      .post(`${SERVER_URL}/submit`, formDetails, { headers })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message || "Successfully Submitted");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message || "Error Submitting");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <ScrollAnimation type="slideLeft">
      <form
        onSubmit={handleSubmitWaitlistForm}
        className="flex flex-col gap-[1.94rem]"
      >
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
          name={"telegram"}
          value={formDetails.telegram}
          onchange={handleFormDetailsChange}
          type="text"
          placeholder="Telegram User"
        />

        <div className="flex justify-between">
          <div className="max-md:hidden"></div>
          <PryBtn
            disable={
              !formDetails.firstName ||
              !formDetails.lastName ||
              !formDetails.email ||
              !formDetails.telegram
            }
            mobileFullWidth
            loading={submitting}
            text="Register your interest now"
          />
        </div>
      </form>
    </ScrollAnimation>
  );
}

export default WaitlistForm;
