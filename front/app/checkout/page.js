"use client"
import { DatePicker } from "zaman";
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Button from '@/components/ui/atoms/Button';
import { personalInformationSchema } from '@/core/schema';
import { useCheckout } from '@/core/services/mutations';
import { useGetBasket } from '@/core/services/queries';
import { calculateDuration, DateToIso, flattenObject } from "@/core/utils/hepler";


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

            <>
                  <div className="container mx-auto py-12">
                        <div  >
                              <form onSubmit={handleSubmit(submitHandler)} className="grid  grid-cols-1 gap-8 md:grid-cols-4" >
                                    <div className=" border border-borderDivColor rounded-xl md:col-span-3 p-[1rem] ">

                                          <h2 className="text-[1.6rem] leading-[2.48rem] text-primary p-[1rem]">مشخصات مسافر  </h2>
                                          <div className="md:flex justify-between gap-5">
                                                <div className="flex flex-col gap-2">

                                                      <input
                                                            {...register("fullName")}
                                                            placeholder="نام و نام خانوادگی "
                                                            maxLength={30}
                                                            className="border rounded-[0.5rem] p-[0.8rem] w-full md:w-[20rem] h-[4.5rem] text-left placeholder:text-right"
                                                      />
                                                      <span className="text-red-600 h-[1rem] text-[1rem] p-0">
                                                            {!!errors?.fullName && errors?.fullName?.message}
                                                      </span>
                                                </div>
                                                <div className="flex flex-col gap-2 ">
                                                      <input
                                                            {...register("nationalCode")}
                                                            placeholder="کدملی"
                                                            maxLength={10}
                                                            className="border rounded-[0.5rem] p-[0.8rem] w-full md:w-[20rem] h-[4.5rem] text-left placeholder:text-right"
                                                      />
                                                      <span className="text-red-600 h-[1rem] text-[1rem] p-0">
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
                                                                  inputClass="w-full md:w-[25rem] h-[4.5rem] border md:rounded-[0.5rem]"
                                                                  onChange={(e) =>
                                                                        onChange({
                                                                              birthDate: (DateToIso(e.value)).split('T')[0],
                                                                        })

                                                                  } />

                                                      )}
                                                />
                                                <select defaultValue="" {...register("gender")} className="md:border md:rounded-[0.5rem] md:p-[0.8rem] w-[25rem] h-[4.5rem]">
                                                      <option value="" disabled >جنسیت</option>
                                                      <option value="male">مرد</option>
                                                      <option value="female">زن</option>
                                                </select>
                                          </div>


                                    </div>
                                    <div className="border border-borderDivColor rounded-xl md:col-span-1 p-[1rem] ">
                                          <div className="flex items-center justify-between">
                                                <span className="text-[2.4rem]"> 
                                                      {data?.data?.title}
                                                </span>
                                                <span className="text-[1.4rem] text-gray-500">{calculateDuration(data?.data?.startDate, data?.data?.endDate)}</span>

                                          </div>
                                          <div className="flex items-center justify-between">
                                                <span className="text-[1.4rem] text-valueColor">قیمت نهایی</span>
                                                <span className="text-[1.4rem]">
                                                      {data?.data?.price}تومان
                                                </span>
                                          </div>
                                          <div className="flex items-center justify-center border-t pt-[1rem]">
                                                <Button label="ثبت نهایی" status="profileBtn" type="reservation" />

                                          </div>

                                    </div>

                              </form>
                        </div>
                  </div>

            </>


      )
}

export default CheckOutPage