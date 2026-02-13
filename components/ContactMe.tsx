import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href =
      "mailto: allaerjona@gmail.com?subject=" +
      formData.subject +
      "&body=Hi, my name is " +
      formData.name +
      ". " +
      formData.message +
      " (" +
      formData.email +
      ")";
  };

  return (
    <div className="relative flex flex-col text-center md:text-left px-6 justify-evenly mx-auto items-center pb-[100px]">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-10">
        Contact Me
      </h3>

      <div className="flex flex-col  space-y-10">
        <div className="text-lg md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </div>

        <div className="flex flex-col items-baseline md:items-center space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+49 176 60963232</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">allaerjona@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Leipzig, Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
