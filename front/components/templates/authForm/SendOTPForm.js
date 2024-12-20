"use client";

import toast from "react-hot-toast";

import { useState } from "react";
import { useSendOtp } from "@/core/services/mutations";
import { isValidMobile, validateInput } from "@/core/utils/validation";
import Button from "@/components/ui/atoms/Button";

function SendOTPForm({ mobile, setMobile, setStep, onClose }) {

  const [error, setError] = useState("");//Error handling

  const { isPending, mutate } = useSendOtp();//it is equal to useMutation({func})

  // Action -  Send request to server and get OTP
  const sendOtpHandler = (event) => {
    event.preventDefault();// prevent default reloading of the browser page

    if (isPending) return;  // is pending true donot do any thing if user click the send button dont send request to api again
    // if isValidMobile is false

    // if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    // setError("");//clear error
    const errorResult = validateInput("mobile", mobile);
    if (errorResult) {
      setError(errorResult);
    } else {
      setError("");
      // post mobile number
      mutate(
        { mobile },
        {
          onSuccess: (data) => {
            toast.success(` ${data?.data?.message} ${data?.data?.code}`);//show otp code 
            setStep(2);//go to the second action of check otp code
          },
          onError: (error) => {
            toast.error(error.message);//
            // console.log(error);
          },
        }
      );
    }
  };

  return (
    <div className="flex flex-col w-[358px] h-[362px] bg-white rounded-[20px] shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-[4rem]">
      {/* close button */}
      <div className="flex justify-end" >
        <button onClick={onClose} className=" text-[1.5rem] font-semibold bg-primary w-[1rem] h-[1rem] p-[1.5rem] rounded-md flex items-center justify-center" >
          <span className="text-white">×</span> </button>
      </div>

      <h4 className="text-center text-[2.3rem] font-semibold">ورود به تورینو</h4>
      {/* form of send mobile number */}
      <form
        className="flex flex-col justify-end gap-10 flex-1"
        onSubmit={sendOtpHandler}
      >
        <label className="text-[1.6rem] font-light leading-[2.48rem]">شماره موبایل خود را وارد کنید</label>
        <input
          type="text"
          placeholder="0917***0000"
          className=" h-[5.4rem] p-[0.8rem] text-left rounded-md border-solid border text-[1.5rem] border-[#00000037]"
          value={mobile}
          onchan
          onChange={(e) => setMobile(e.target.value)}
        />
        {!!error && <p className="text-red-500">{error}</p>}
        <Button label="ارسال کد تایید" status="submit" />
      </form>
    </div>
  );
}

export default SendOTPForm;
