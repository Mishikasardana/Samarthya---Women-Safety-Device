import * as React from "react";
import { InputField } from "./InputField";
import { RegisterButton } from "./RegisterButton";

export const RegisterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputFields = [
    { label: "Full Name" },
    { label: "Email", type: "email" },
    { label: "Password", type: "password" }
  ];

  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full bg-pink-700 max-w-[480px] rounded-[30px] shadow-[10px_10px_40px_rgba(0,0,0,0.3)]">
      <form onSubmit={handleSubmit} className="flex relative flex-col items-start px-5 pt-80 pb-5 w-full rounded-none aspect-[0.499]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/576157452b6aa1c014f3649af9d1a1fe8d033f0b35791167c3f97dbd60b9138b?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <h1 className="relative text-4xl font-bold text-orange-100 border border-amber-100 border-solid">
          Register
        </h1>
        
        <div className="flex flex-col gap-3.5 mt-10">
          {inputFields.map((field, index) => (
            <InputField key={index} {...field} />
          ))}
        </div>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88b394453cea3d81ed61643c20aa155d5e01d95c9ddc3db82fe1e8d548412bf6?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3"
          className="object-contain mt-6 max-w-full rounded-none aspect-[2.29] w-[103px]"
          alt=""
        />

        <div className="flex relative gap-7 items-start self-stretch mt-10">
          <div className="grow self-end mt-8 text-base font-bold text-orange-100 border border-amber-100 border-solid">
            <span className="text-orange-100">Already Member?</span>{" "}
            <a href="/login" className="focus:outline-none focus:ring-2 focus:ring-orange-100" tabIndex={0}>
              Login
            </a>
          </div>
          <RegisterButton>Register</RegisterButton>
        </div>
      </form>
    </div>
  );
}
