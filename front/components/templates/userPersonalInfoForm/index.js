"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "zaman";

import toast from "react-hot-toast";
import { useUpdateUserBankAccount } from "@/core/services/mutations";
import { personalInformationSchema } from "@/core/schema";
import EditIcon from "@/public/icons/icons/EditIcon";

function UserPersonalInfoForm({ data }) {
      const { firstName, lastName, gender, birthDate, nationalCode } = data;
      const [isEditing, setIsEditing] = useState(false);
      // mutation of update data
      const { mutate, isPending } = useUpdateUserBankAccount();


      const {
            register,
            handleSubmit,
            setValue,
            formState: { errors },
      } = useForm({
            resolver: yupResolver(personalInformationSchema),
      });

      // Function to submit form 
      const submitHandler = (data) => {
            console.log(data)
      };
      // Function to handle edit button 
      const handleEditClick = () => {
            setIsEditing(true);
            // Set form values to existing data for editing

      };

      const renderInputField = (name, label, maxLength, value) => (
            <div>
                  {isEditing ? (
                        <input
                              {...register(name)}
                              placeholder={label}
                              maxLength={maxLength}
                              className="md:border md:rounded-[0.5rem] md:p-[0.8rem] w-[25rem] h-[4.5rem]"
                        />
                  ) : (
                        <p className="flex items-center gap-4">
                              <span>{label}</span>
                              <span>{value || "-"}</span>
                        </p>
                  )}
                  <span className="text-red-600 h-[2rem] p-0">
                        {!!errors[name] && errors[name].message}
                  </span>
            </div>
      );




      return (
            <form className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem] md:h-[24rem]'>
                  <h2>اطلاعات شخصی</h2>
                  <div>
                        {renderInputField("name", "نام و نام خانوادگی ", 30, name)}
                        {renderInputField("nationalCode", "شماره ملی ", 10, nationalCode)}
                        <DatePicker onChange={(e) => console.log(e.value)} />



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

export default UserPersonalInfoForm