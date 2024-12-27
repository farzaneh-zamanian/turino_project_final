"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Button from "@/components/ui/atoms/Button";
import { userAccountSchema } from "@/core/schema";
import { useUpdateUserBankAccount } from "@/core/services/mutations";
import EditIcon from "@/public/icons/icons/EditIcon";

function UserAccountInfoForm({ data }) {
      const { mobile, email } = data//destructure user data
      const [isEditing, setIsEditing] = useState(false);//edit mode
      const { mutate, isPending } = useUpdateUserBankAccount();//mutate new or edit info


      const {
            register,
            handleSubmit,
            reset,
            setValue,
            formState: { errors },
      } = useForm({
            resolver: yupResolver(userAccountSchema),
      });
      // Function to handle edit button 
      const handleEditClick = () => {
            setIsEditing(true);
            setValue("email", email || "");
      };
          // Function to handle cancel button
    const handleCancelClick = () => {
      setIsEditing(false);
      reset();
  };


      // Function to submit form 
      const submitHandler = (formData) => {
            if (isPending) return; // Prevent submission if pending
            mutate(formData, {
                  onSuccess: (response) => {
                        toast.success(response?.data?.message);
                        setIsEditing(false); // Exit edit mode on success
                  },
                  onError: (error) => {
                        toast.error("مشکلی پیش آمده است مجدد تلاش کنید.");
                  },
            });
      };


      return (
            <form onSubmit={handleSubmit(submitHandler)} className='mb-8 md:mb-0 grid grid-cols-1  border border-borderDivColor rounded-xl'>
                  <h2 className="text-[1.6rem] leading-[2.48rem] text-primary p-[1rem]">اطلاعات حساب کاربری</h2>
                  <div className="grid grid-cols-1 gap-5 p-[1rem] md:grid-cols-6  ">
                        {/* mobile number */}
                        <p className="md:col-start-1 md:col-span-2 flex items-center justify-between">
                              <span className="text-[1.45rem]">شماره موبایل</span>
                              <span className="text-[1.45rem] ">{mobile}</span>
                        </p>
                        {/* email address */}
                        <div className="md:col-start-5 md:col-span-2 flex flex-col">
                              {isEditing ? (
                                          <input
                                                {...register("email")}
                                                placeholder="آدرس ایمیل"
                                                maxLength={80}
                                                className="border rounded-[0.5rem] p-[0.8rem] w-full md:w-[25rem] h-[4.5rem] text-left placeholder:text-right"
                                                />

                              ) : (<p className="flex items-center justify-between">

                                    <span className="text-[1.45rem]">ایمیل</span>
                                    <span>{email || "-"}</span>
                              </p>)}
                              <span className="text-red-600 h-[1rem] p-0 text-[1rem]">
                                    {!!errors?.email && errors?.email?.message}
                              </span>

                        </div>
                  </div>
                  <div className="border-t p-[1rem] flex justify-end ">
                        {isEditing ? (
                              <div className=" grid grid-cols-2 gap-4">

                                    <Button label="تایید" status="profileBtn" type="submit" />
                                    <Button label="انصراف" status="cancelBtn"  onClick={handleCancelClick} />

                              </div>
                        ) : (
                              <button type="button" onClick={handleEditClick} className="text-blue-500 flex items-center gap-2">
                                    <EditIcon />
                                    <span className="text-[#009ECA]"> ویرایش اطلاعات</span>
                              </button>
                        )}
                  </div>
            </form>
      )
}

export default UserAccountInfoForm;