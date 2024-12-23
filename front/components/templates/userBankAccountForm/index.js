"use client";

import Button from "@/components/ui/atoms/Button";
import { bankAcountSchema } from "@/core/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";




function UserBankAccountForm() {



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });


  const submitHandler = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem] '>
      <div className='flex flex-col md:grid grid-cols-3 gap-5  *:w-full *:flex *:flex-col'>
        {/* shaba code */}
        <div className="" >
          <input  {...register("shaba_code")} placeholder="شماره شبا" maxLength={26}   className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />
          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.shaba_code && errors?.shaba_code?.message}
          </span>
        </div>
        {/* debit card */}
        <div>
          <input  {...register("debitCard_code")} placeholder="شماره کارت"  maxLength={16} className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />


          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.debitCard_code && errors?.debitCard_code?.message}
          </span>

        </div>
        {/* account identifier */}
        <div>
          <input  {...register("accountIdentifier")} placeholder="شماره حساب"  maxLength={12} className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />
          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.accountIdentifier && errors?.accountIdentifier?.message}
          </span>

        </div>


      </div>

      {/* <input
        type="submit"
        className="!bg-primary text-xs p-2 text-white !border-0"
      /> */}
      <div className="grid grid-cols-6 gap-2 mt-[2rem] ">
        <Button label="تایید" status="profileBtn" type="submit" className="col-span-1 w-full" />
        <Button label="انصراف" status="cancelBtn" className="col-span-1 w-full" />
      </div>





    </form>
  )
}

export default UserBankAccountForm