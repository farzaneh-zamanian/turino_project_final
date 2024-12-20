"use client";

import OtpInput from "react18-input-otp";
import { useEffect, useState } from "react";

import { useCheckOtp } from "@/core/services/mutations";
import { setCookie } from "@/core/utils/cookie";
import Button from "@/components/ui/atoms/Button";
import { formatTheTime } from "@/core/utils/hepler";
import toast from "react-hot-toast";

function CheckOTPForm({ mobile, setStep, setIsOpen, onGoBack }) {
  // Otp code status
  const [code, setCode] = useState("");
  //   Timer status
  const [timer, setTimer] = useState(120); // 2 minutes - 120 seconds

  // useMutation
  const { isPending, mutate } = useCheckOtp();

  useEffect(() => {
    if (timer === 0) setStep(1); //Go back to step 1 after 2 minutes
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000); //decrease the timer

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [timer]);




  // Submit the form 
  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    // if (code.length !==5) return;

    mutate(
      // send data to function
      { mobile, code },
      {
        onSuccess: (data) => {
          toast.success("ورود شما با موفقیت انجام شد.")
          setCookie("accessToken", data?.data?.accessToken, 30);//30 days
          setCookie("refreshToken", data?.data?.refreshToken, 365);
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
          // toast.error(error.message); 
        },
      }
    );
  };
  // 
  const changeHandler = (otp) => {
    setCode(otp);
  };



  return (
    <div className="flex flex-col w-[358px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-[4rem]">
      <div className="flex justify-end" >
        <button onClick={onGoBack} className="flex items-end justify-end text-[2.2rem] font-semibold">
          <img src="/icons/arrow-left.svg" />
          {/* <َArrowLeft /> */}
        </button>
      </div>

      <h4 className="text-center text-[1.6rem] font-semibold">کد تایید را وارد کنید.</h4>
      <form
        className="flex flex-col justify-end items-center  gap-10 flex-1"
        onSubmit={checkOtpHandler}
      >
        <label className=" font-light leading-[2.48rem] text-[1.4rem]"> کد تایید به شماره {mobile} ارسال شد  </label>
        {/* otp div */}
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
        {/* timer */}
        <div className="text-center text-[1.4rem] font-light">
          {timer > 0 ? `زمان باقی‌مانده: ${formatTheTime(timer)}` : "زمان منقضی شد"}
        </div>
        <Button label=" ورود به تورینو " status="submit" />

      </form>
    </div>
  );
}

export default CheckOTPForm;
