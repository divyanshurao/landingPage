"use client";
import React, { useTransition } from "react";
import Mail from "/public/mail.svg";
import Image from "next/image";
import toast from "react-hot-toast";

const EmailForm = () => {
  const [isPending, startTransaction] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
  }
  return (
    <form
  onSubmit={(e) => handleSubmit(e)}
  className="flex justify-center items-center gap-2"
>
  <button
    disabled={isPending}
    type="button"
    onClick={() => window.open('https://forms.gle/n5CZzqmWNYy4F8Ni6', '_blank')} 
    className="bg-gradient-to-b from-white to-[#f8eedb] text-[#482307] shadow-button-shadow font-semibold py-2 px-3 rounded-md text-base transition-all duration-200 "
  >
    Join Gramo
  </button>
</form>
  );
};

export default EmailForm;
