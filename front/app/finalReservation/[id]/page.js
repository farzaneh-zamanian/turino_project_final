"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { DatePicker } from "zaman";
import toast from "react-hot-toast";

import Button from '@/components/ui/atoms/Button';
import { personalInformationSchema } from '@/core/schema';
import { useGetUserTour } from '@/core/services/queries';
import { calculateDuration, DateToIso, flattenObject } from '@/core/utils/hepler';
import { useUpdatePassenger } from '@/core/services/mutations';

function FinalReservation(props) {

      const startDate = "2024-12-01T00:00:00.000Z";
      const endDate = "2024-12-05T00:00:00.000Z";
      const duration = calculateDuration(startDate, endDate);
      console.log(duration); // Output: "4 روز و 3 شب"
      
      const { params: { id } } = props;
      const { data:tourData, isPending } = useGetUserTour(id)
      console.log(tourData)
      const { mutate } = useUpdatePassenger();



      const {
            register,
            handleSubmit,
            control,
            formState: { errors },
      } = useForm({
            resolver: yupResolver(personalInformationSchema),
      });

      const submitHandler = (form) => {
            // if (isPending) return; // Prevent submission if pending
            mutate(flattenObject(form), {
                  onSuccess: (response) => {
                        toast.success(response?.data?.message);
                  },
                  onError: (error) => {
                        toast.error(`${error.message}`);

                  }
            })
      }




      return (
            <div className='grid grid-cols-4 w-full gap-5 my-[5rem]'>
                  <div className=' border-borderDivColor col-span-3 rounded-xl border'>
                        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col   rounded-2xl p-[1.5rem] gap-[1rem] md:h-[28rem]'>
                              <h2>مشخصات مسافر </h2>
                              <div className="flex flex-row flex-wrap item-center justify-between gap-10">

                                    {/* name and national code */}
                                    <div className="flex flex-col gap-2 flex-2">

                                          <input
                                                {...register("fullName")}
                                                placeholder="نام و نام خانوادگی "
                                                maxLength={30}
                                                className="md:border md:rounded-[0.5rem] md:p-[0.8rem] w-[25rem] h-[4.5rem]"
                                          />
                                          <span className="text-red-600 h-[2rem] p-0">
                                                {!!errors?.fullName && errors?.fullName?.message}
                                          </span>
                                    </div>
                                    <div className="flex flex-col gap-2 flex-2">
                                          <input
                                                {...register("nationalCode")}
                                                placeholder="کدملی"
                                                maxLength={10}
                                                className="md:border md:rounded-[0.5rem] md:p-[0.8rem] w-[25rem] h-[4.5rem]"
                                          />
                                          <span className="text-red-600 h-[2rem] p-0">
                                                {!!errors?.nationalCode && errors?.nationalCode?.message}
                                          </span>
                                    </div>

                                    {/* select birth date */}
                                    <Controller
                                          control={control}
                                          name="birthDate"
                                          render={({ field: { onChange } }) => (
                                                <DatePicker
                                                      accentColor="#28A745"
                                                      round="x2"
                                                      inputClass="w-[25rem] h-[4.5rem] border md:rounded-[0.5rem]"
                                                      onChange={(e) =>
                                                            onChange({
                                                                  birthDate: (DateToIso(e.value)).split('T')[0],
                                                            })
                                                      } />
                                          )}
                                    />



                                    {/* select gender */}
                                    <select defaultValue="" {...register("gender")} className="md:border md:rounded-[0.5rem] md:p-[0.8rem] w-[25rem] h-[4.5rem]">
                                          <option value="" disabled >جنسیت</option>
                                          <option value="male">مرد</option>
                                          <option value="female">زن</option>
                                    </select>

                              </div>

                              {/* button actions */}
                              <div className="flex items-center justify-end gap-2 md:border-t md:pt-[2rem]">
                                    <Button label="ثبت و خرید نهایی" status="profileBtn" type="submit" />

                              </div>
                        </form>
                  </div>
                  <div className='border-borderDivColor col-span-1 rounded-xl border' >
                        {tourData?.destination?.name}

                  </div>
            </div>
      )
}

export default FinalReservation