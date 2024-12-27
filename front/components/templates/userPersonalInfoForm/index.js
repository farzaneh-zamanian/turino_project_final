"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "zaman";
import toast from "react-hot-toast";

import { useUpdateUserBankAccount } from "@/core/services/mutations";
import { personalInformationSchema } from "@/core/schema";
import EditIcon from "@/public/icons/icons/EditIcon";
import { convertToPersianDate, DateToIso, flattenObject, getGenderInPersian } from "@/core/utils/hepler";
import Button from "@/components/ui/atoms/Button";

function UserPersonalInfoForm({ data }) {
      const { firstName, lastName, gender, birthDate, nationalCode } = data;
      const [isEditing, setIsEditing] = useState(false);
      const { mutate, isPending } = useUpdateUserBankAccount();


      const {
            register,
            handleSubmit,
            control,
            setValue,
            reset,
            formState: { errors },
      } = useForm({
            resolver: yupResolver(personalInformationSchema),
      });

      // Function to submit form 
      const submitHandler = (form) => {
            const [firstName, ...lastNameParts] = form.fullName.trim().split(" ");
            const lastName = lastNameParts.join(" ") || ""; // Join remaining parts for last name

            // data to be sent to server
            const updatedData = {
                  ...form,
                  firstName,
                  lastName,
            };

            if (isPending) return; // Prevent submission if pending
            mutate(flattenObject(updatedData), {
                  onSuccess: (response) => {
                        toast.success(response?.data?.message);
                        setIsEditing(false);
                  },
                  onError: (error) => {
                        toast.error(`مشکلی پیش آمده است لطفا مجدد تلاش کنید.: ${error.message}`);

                  }
            })
      };
      // Function to handle edit button 
      const handleEditClick = () => {
            setIsEditing(true);
            setValue("fullName", `${firstName} ${lastName}`); // Set the full name in the input
            setValue("nationalCode", nationalCode); // Set the national code
            setValue("gender", gender); // Set the gender
            setValue("birthDate", birthDate); // Set the birth date

      };
      // Function to handle cancel button
      const handleCancelClick = () => {
            setIsEditing(false);
            reset();
      };

      const renderInputField = (name, label, maxLength, value) => (
            <div>
                  {isEditing ? (
                        <input
                              {...register(name)}
                              placeholder={label}
                              maxLength={maxLength}
                              className="border rounded-[0.5rem] p-[0.8rem] w-full md:w-[20rem] h-[4.5rem] text-left placeholder:text-right"
                        />
                  ) : (
                        <p className="flex justify-between items-center md:gap-5">
                              <span className="text-[1.45rem]">{label}</span>
                              <span>{value || "-"}</span>
                        </p>
                  )}
                  <span className="text-red-600 h-[1rem] text-[1rem] p-0">
                        {!!errors[name] && errors[name].message}
                  </span>
            </div>
      );




      return (
            <form onSubmit={handleSubmit(submitHandler)} className='grid grid-cols-1  border border-borderDivColor rounded-xl'>
                  <h2 className="text-[1.6rem] leading-[2.48rem] text-primary p-[1rem]">اطلاعات  شخصی</h2>
                  <div className='flex flex-col gap-5 p-[1rem]  md:flex-row md:justify-between md:items-center  md:h-[10rem]'>

                        {/* name and national code */}
                        {renderInputField("fullName", "نام و نام خانوادگی ", 30, firstName + " " + lastName)}
                        {renderInputField("nationalCode", "شماره ملی ", 10, nationalCode)}


                        {/* select birth date */}
                        <Controller
                              control={control}
                              name="birthDate"
                              render={({ field: { onChange } }) => (
                                    isEditing ? (
                                          <DatePicker
                                                accentColor="#28A745"
                                                round="x2"
                                                inputClass="w-full md:w-[25rem] h-[4.5rem] border md:rounded-[0.5rem]"
                                                onChange={(e) =>
                                                      onChange({
                                                            birthDate: (DateToIso(e.value)).split('T')[0],
                                                      })

                                                } />
                                    ) : (
                                          <p className="flex justify-between items-center md:gap-5">
                                                <span className="text-[1.45rem]">تاریخ  </span>
                                                <span>{convertToPersianDate(birthDate) || "-"}</span>
                                          </p>
                                    )
                              )}
                        />



                        {/* select gender */}
                        {isEditing ? (<select defaultValue="" {...register("gender")} className="md:border md:rounded-[0.5rem] md:p-[0.8rem] w-[25rem] h-[4.5rem]">
                              <option value="" disabled >جنسیت</option>
                              <option value="male">مرد</option>
                              <option value="female">زن</option>
                        </select>) : (
                                          <p className="flex justify-between items-center md:gap-5">
                                    <span className="text-[1.45rem]">جنسیت  </span>
                                    <span>{getGenderInPersian(gender) || "-"}</span>
                              </p>)
                        }

                  </div>

                  {/* button actions */}
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
      )
}

export default UserPersonalInfoForm