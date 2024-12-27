"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "@/components/ui/atoms/Button";
import { bankAcountSchema } from "@/core/schema";
import { useUpdateUserBankAccount } from "@/core/services/mutations";
import EditIcon from "@/public/icons/icons/EditIcon";



function UserBankAccountForm({ data }) {

  // destrust user bank account data
  const { shaba_code, debitCard_code, accountIdentifier } = data.payment;

  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  // mutation of update data
  const { mutate, isPending } = useUpdateUserBankAccount();


  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });

  // Function to submit form 
  const submitHandler = (data) => {
    if (isPending) return;
    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          setIsEditing(false); // Exit edit mode on success
        },
        onError: (error) => {
          toast.error("مشکلی پیش آمده است مجدد تلاش کنید");
        },
      }
    );
  };

  // Function to handle edit button 
  const handleEditClick = () => {
    setIsEditing(true);
    // Set form values to existing data for editing
    setValue("shaba_code", shaba_code || "");
    setValue("debitCard_code", debitCard_code || "");
    setValue("accountIdentifier", accountIdentifier || "");
  };
  // Function to handle cancel button
  const handleCancelClick = () => {
    setIsEditing(false);
    reset();
  };


  const renderInputField = (name, label, maxLength, value) => (
    <div className=" mb-[1rem]">
      {isEditing ? (
        <input
          {...register(name)}
          placeholder={label}
          maxLength={maxLength}
          className="border rounded-[0.5rem] p-[0.8rem] w-full md:w-[25rem] h-[4.5rem] text-left placeholder:text-right"
        />
      ) : (
        <p className="flex md:flex-col md:items-center items-center justify-between ">
          <span className="text-[1.45rem]">{label}</span>
          <span>{value || "-"}</span>
        </p>
      )}
      <span className="text-red-600 h-[1rem] p-0 text-[1rem]">
        {!!errors[name] && errors[name].message}
      </span>
    </div>
  );



  return (
    <form onSubmit={handleSubmit(submitHandler)} className=' mb-8 md:mb-0 grid grid-cols-1  border border-borderDivColor rounded-xl'>
      <h2 className="text-[1.6rem] leading-[2.48rem] text-primary p-[1rem]">اطلاعات حساب بانکی</h2>

      <div className='flex flex-col p-[1rem] md:flex-row md:items-center  *:w-full *:flex *:flex-col md:h-[10rem]'>
        {renderInputField("shaba_code", "شماره شبا", 26, shaba_code)}
        {renderInputField("debitCard_code", "شماره کارت", 16, debitCard_code)}
        {renderInputField("accountIdentifier", "شماره حساب", 12, accountIdentifier)}
      </div>

      <div className="border-t p-[1rem] flex justify-end ">
        {isEditing ? (
          <div className=" grid grid-cols-2 gap-4">

            <Button label="تایید" status="profileBtn" type="submit" />
            <Button label="انصراف" status="cancelBtn" onClick={handleCancelClick} />

          </div>
        ) : (
          <button type="button" onClick={handleEditClick} className="text-blue-500 flex items-center gap-2">
            <EditIcon />
            <span className="text-[#009ECA]"> ویرایش اطلاعات</span>
          </button>
        )}
      </div>
    </form>
  );
}

export default UserBankAccountForm