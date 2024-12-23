"use client";

import Button from "@/components/ui/atoms/Button";
import { bankAcountSchema } from "@/core/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateUserBankAccount } from "@/core/services/mutations";
import toast from "react-hot-toast";




function UserBankAccountForm() {

  // mutation of update data
  const { mutate, isPending } = useUpdateUserBankAccount();




  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });



  const submitHandler = (data) => {
    if (isPending) return;
    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          // console.log(data.data.user.payment)
          toast.success(data?.data?.message);
        },
        onError: (error) => {
          toast.error("مشکلی پیش آمده است مجدد تلاش کنید");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem] '>
      <h2>اطلاعات حساب بانکی</h2>
      <div className='flex flex-col md:grid grid-cols-3 gap-5  *:w-full *:flex *:flex-col'>
        {/* shaba code */}
        {/* <div>
          {existingData ? (
            <span>{existingData.shaba_code}</span> // Display existing data
          ) : (
            <input {...register("shaba_code")} placeholder="شماره شبا" maxLength={26} className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />
          )}
          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.shaba_code && errors?.shaba_code?.message}
          </span>
        </div> */}
        <div >
          <input  {...register("shaba_code")} placeholder="شماره شبا" maxLength={26} className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />
          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.shaba_code && errors?.shaba_code?.message}
          </span>
        </div>
        {/* debit card */}
        {/* <div>
          {existingData ? (
            <span>{existingData.debitCard_code}</span> // Display existing data
          ) : (
            <input {...register("debitCard_code")} placeholder="شماره کارت" maxLength={16} className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />
          )}
          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.debitCard_code && errors?.debitCard_code?.message}
          </span>
        </div> */}
        <div>
          <input  {...register("debitCard_code")} placeholder="شماره کارت" maxLength={16} className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />
          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.debitCard_code && errors?.debitCard_code?.message}
          </span>
        </div>
        {/* account identifier */}
        {/* account identifier */}
        {/* <div>
          {existingData ? (
            <span>{existingData.accountIdentifier}</span> // Display existing data
          ) : (
            <input {...register("accountIdentifier")} placeholder="شماره حساب" maxLength={12} className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />
          )}
          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.accountIdentifier && errors?.accountIdentifier?.message}
          </span>
        </div> */}
        <div>
          <input  {...register("accountIdentifier")} placeholder="شماره حساب" maxLength={12} className="md:border md:rounded-[0.5rem] md:p-[0.8rem]" />
          <span className="text-red-600 h-[2rem] p-0 ">
            {!!errors?.accountIdentifier && errors?.accountIdentifier?.message}
          </span>
        </div>


      </div>

      {/* <input
        type="submit"
        className="!bg-primary text-xs p-2 text-white !border-0"
      /> */}
      <div className="flex items-center justify-end gap-2 mt-[2rem] md:border-t md:pt-[2rem] ">
        <Button label="تایید" status="profileBtn" type="submit"  />
        <Button label="انصراف" status="cancelBtn" className=" " />
      </div>
    </form>
  )
}

export default UserBankAccountForm