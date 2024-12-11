"use client";

import OtpInput from "react18-input-otp";
import { useState } from "react";

import { useCheckOtp } from "@/core/services/mutations";
import { setCookie } from "@/core/utils/cookie";
import Button from "@/components/ui/atoms/Button";

function CheckOTPForm({ mobile, setStep, setIsOpen, onGoBack }) {
  const [code, setCode] = useState("");

  const { isPending, mutate } = useCheckOtp();

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      // send data to function
      { mobile, code },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data?.data?.accessToken, 30);//30 days
          setCookie("refreshToken", data?.data?.refreshToken, 365);
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  const changeHandler = (otp) => {
    setCode(otp);
  };

  return (
    <div className="flex flex-col w-[358px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-[4rem]">
      <button onClick={onGoBack} className="flex items-end justify-end text-xl text-[2.2rem] font-semibold">
        <img src="/icons/arrow-left.svg" /></button>

      <h4 className="text-xl text-center text-[2.2rem] font-semibold">کد تایید را وارد کنید.</h4>
      <form
        className="flex flex-col justify-end items-center  gap-10 flex-1"
        onSubmit={checkOtpHandler}
      >
        <label className=" text-[1.6rem] font-light leading-[2.48rem]">شماره موبایل {mobile}</label>
        {/* otp div */}
        {/* <div style={{ direction: "ltr" }}> */}
        <div style={{ direction: "ltr" }}>
          {/* otp input component */}
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "49px",
              height: "45px",
              marginRight: "5px",
            }}
          />
        </div>
        <Button label=" ورود به تورینو " status="submit" />

      </form>
    </div>
  );
}

export default CheckOTPForm;
