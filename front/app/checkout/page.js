"use client"
import { DatePicker } from "zaman";
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@/components/ui/atoms/Button';
import { personalInformationSchema } from '@/core/schema';
import { useCheckout } from '@/core/services/mutations';
import { useGetBasket } from '@/core/services/queries';
import { DateToIso, flattenObject } from "@/core/utils/hepler";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


function CheckOutPage() {
      const router = useRouter();

      const { data, isPending } = useGetBasket();//get tour information
      const { mutate } = useCheckout();//mutate passenger and tour information
      // react hook form
      const {
            register,
            handleSubmit,
            control,
            formState: { errors },
      } = useForm({
            resolver: yupResolver(personalInformationSchema),
      });


      const submitHandler = (form) => {
            mutate(flattenObject(form), {
                  onSuccess: (response) => {
                        toast.success(response?.data?.message);
                        router.push("/payment?status=success");

                  },
                  onError: (error) => {
                        toast.error(`${error.message}`);

                  }
            })
      }


      if (isPending) return <p>...Loading</p>

 
      if (!data) return (
            <div className="flex flex-col gap-4 items-center justify-center my-[5rem]  w-6/12 h-[20rem] bg-accentButtonColor ">
                  <p className=' text-[2rem]'>سبد خرید شما خالی است</p>
                  <Link href="/" className='bg-secondary text-center w-[13.6rem] md:w-[17.5rem] md:h-[4.1rem] h-[3.8rem] rounded-[0.9rem]  '>
                        <span className='text-white  text-[1.4rem] md:text-[1.6rem] '>برو به صفحه اصلی </span>
                  </Link>

            </div>
      );

      return (
            <div className='grid grid-cols-4 w-full gap-5 my-[5rem]'>
                  <div className=' border-borderDivColor col-span-3 rounded-xl border'>
                        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col   rounded-2xl p-[1.5rem] gap-[1rem] md:h-[28rem]'>
                              <div>
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


                              </div>
                              <div className='border-borderDivColor col-span-1 rounded-xl border' >
                                    {data?.data?.title}
                                    {/* button actions */}
                                    <div className="flex items-center justify-end gap-2 md:border-t md:pt-[2rem]">
                                          <Button label="ثبت و خرید نهایی" status="profileBtn" type="submit" />

                                    </div>
                              </div>

                        </form>
                  </div>

            </div>

      )
}

export default CheckOutPage