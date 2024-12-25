"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "zaman";

import toast from "react-hot-toast";
import { useUpdateUserBankAccount } from "@/core/services/mutations";
import { personalInformationSchema } from "@/core/schema";
import EditIcon from "@/public/icons/icons/EditIcon";
import { DateToIso, flattenObject, getGenderInPersian } from "@/core/utils/hepler";
import Button from "@/components/ui/atoms/Button";
import { convertLength } from "@mui/material/styles/cssUtils";

function UserPersonalInfoForm({ data }) {
      const { firstName, lastName, gender, birthDate, nationalCode } = data;
      const [isEditing, setIsEditing] = useState(false);
      // mutation of update data
      const { mutate, isPending } = useUpdateUserBankAccount();


      const {
            register,
            handleSubmit,
            control,
            setValue,
            formState: { errors },
      } = useForm({
            resolver: yupResolver(personalInformationSchema),
      });

      // Function to submit form 
      const submitHandler = (form) => {
            const splitFullName = form.name.trim().split(" ");
            const firstName = splitFullName[0] || ""; // Get first name or empty string
            const lastName = splitFullName.slice(1).join(" ") || ""; // Get last name or empty string

            // Prepare the data to be sent
            const updatedData = {
                  ...form,
                  firstName,
                  lastName,
            };
            const flattenedData = flattenObject(updatedData)
            console.log(flattenedData)
            if (isPending) return; // Prevent submission if pending

            mutate(flattenedData, {
                  onSuccess: (response) => {
                        toast.success(response?.data?.message);
                        setIsEditing(false); // Optio
                  },
                  onError: (error) => {
                        toast.error(`مشکلی پیش آمده است لطفا مجدد تلاش کنید.: ${error.message}`);

                  }
            })
      };
      // Function to handle edit button 
      const handleEditClick = () => {
            setIsEditing(true);
            // Set form values to existing data for editing
            setValue("name", `${firstName} ${lastName}`); // Set the full name in the input
            setValue("nationalCode", nationalCode); // Set the national code
            setValue("gender", gender); // Set the gender
            setValue("birthDate", birthDate); // Set the birth date

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
                              <span>{label}:</span>
                              <span>{value || "-"}</span>
                        </p>
                  )}
                  <span className="text-red-600 h-[2rem] p-0">
                        {!!errors[name] && errors[name].message}
                  </span>
            </div>
      );




      return (
            <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem] md:h-[28rem]'>
                  <h2>اطلاعات شخصی</h2>
                  <div className="flex flex-row flex-wrap item-center justify-between gap-10">

                        {/* name and national code */}
                        {renderInputField("name", "نام و نام خانوادگی ", 30, firstName + " " + lastName)}
                        {renderInputField("nationalCode", "شماره ملی ", 10, nationalCode)}


                        {/* select birth date */}
                        {isEditing ? (<Controller
                              control={control}
                              name="birthDate"
                              render={({ field: { onChange } }) => (
                                    <DatePicker
                                          accentColor="#28A745"
                                          round="x2"
                                          inputClass="w-[25rem] h-[4.5rem] border  md:rounded-[0.5rem] "
                                          onChange={(e) =>
                                                onChange({
                                                      birthDate: (DateToIso(e.value)).split('T')[0],
                                                })

                                          }
                                    />
                              )}
                        />) : (
                              <p className="flex items-center gap-4">
                                    <span>تاریخ : </span>
                                    <span>{birthDate || "-"}</span>
                              </p>
                        )}



                        {/* select gender */}
                        {isEditing ? (<select defaultValue="" {...register("gender")} className="md:border md:rounded-[0.5rem] md:p-[0.8rem] w-[25rem] h-[4.5rem]">
                              <option value="" disabled >جنسیت</option>
                              <option value="male">مرد</option>
                              <option value="female">زن</option>
                        </select>) : (<p className="flex items-center gap-4">
                              <span>جنسیت : </span>
                              <span>{getGenderInPersian(gender) || "-"}</span>
                        </p>)}






                  </div>

                  {/* button actions */}
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