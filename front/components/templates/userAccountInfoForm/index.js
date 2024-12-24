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
      const { mobile, email } = data
      const [isEditing, setIsEditing] = useState(false);

      const { mutate, isPending } = useUpdateUserBankAccount();

      const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
      } = useForm({
            resolver: yupResolver(userAccountSchema),
      });
      // Function to handle edit button 
      const handleEditClick = () => {
            setIsEditing(true);
            setValue("email", email || ""); // Set email values to existing data for editing

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
            <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem] md:h-[20rem]'>
                  <h2>اطلاعات حساب کاربری</h2>
                  <div className="flex items-center justify-between">
                        <p className="flex gap-[2rem] flex-2">
                              <span>شماره موبایل</span>
                              <span>{mobile}</span>
                        </p>
                        <div className="flex items-center gap-2 flex-2">
                              {isEditing ? (<input
                                    {...register("email")}
                                    placeholder="آدرس ایمیل"
                                    maxLength={80}
                                    className="md:border md:rounded-[0.5rem] md:p-[0.8rem] w-[25rem] h-[4.5rem]"
                              />) : (<p className="flex items-center gap-4">
                                    <span>ایمیل</span>
                                    <span>{email || "-"}</span>
                              </p>)}

                              <span className="text-red-600 h-[2rem] p-0">
                                    {!!errors?.email && errors?.email?.message}
                              </span>


                        </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 md:border-t md:pt-[2rem]">
                        {isEditing ? (
                              <>
                                    <Button label="تایید" status="profileBtn" type="submit" />
                                    <Button label="انصراف" status="cancelBtn" onClick={() => setIsEditing(false)} />

                              </>
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