import * as React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";

export const LoginForm: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-9 mx-auto w-full bg-pink-700 max-w-[480px] rounded-[30px] shadow-[10px_10px_40px_rgba(0,0,0,0.3)]">
      <div className="flex relative flex-col pb-40 w-full rounded-none aspect-[1.038]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf90f051d227582948c5b22e49930127ca3f40f7cccf128b27b2f9f46865c1f6?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a497c0ace98b07476d3d5fab0e2b8b6fd9d812921a6471267a4cf265da551f7a?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3"
          alt=""
          className="object-contain mb-0 w-full rounded-none aspect-[1.7]"
        />
      </div>
      
      <form className="flex z-10 flex-col items-start px-6 -mt-2 w-full">
        <h1 className="text-4xl font-bold text-orange-100">Login</h1>
        
        <div className="mt-11 w-full">
          <InputField
            label="Email"
            type="email"
            id="email"
          />
        </div>
        
        <div className="mt-5 w-full">
          <InputField
            label="Password"
            type="password"
            id="password"
          />
        </div>
        
        <button 
          type="button"
          className="self-end mt-3 text-sm font-bold text-orange-100"
        >
          Forgot Password?
        </button>
        
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f01973b15ccd3cda74937564c406ca18a33ef930f438a7ab06ca1dccad14a3?placeholderIfAbsent=true&apiKey=7f447f3e4453447a8e7532de9b4247c3"
          alt=""
          className="object-contain mt-3.5 max-w-full rounded-none aspect-[2.29] w-[103px]"
        />
        
        <div className="flex gap-10 mt-8 ml-3.5 w-full">
          <div className="self-end mt-8 text-base font-bold text-orange-100">
            <span>New Here?</span>{" "}
            <button type="button">Register</button>
          </div>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};
