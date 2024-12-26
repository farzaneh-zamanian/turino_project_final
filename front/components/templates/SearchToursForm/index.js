"use client"

import { DatePicker } from "zaman";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import Button from "@/components/ui/atoms/Button";
import { useGetSearchedTours, useGetTours } from "@/core/services/queries";
import { DateToIso, flattenObject, renderUniqueOptions } from "@/core/utils/hepler";


function SearchToursForm({ data }) {
      const [query, setQuery] = useState("");//state of query(originId,destination,startDate,endDate)

      const { register, handleSubmit, control } = useForm();

      useEffect(() => {
            refetch();
      }, [query]);

      const submitHandler = (form) => {
            // refetch()
            setQuery(flattenObject(form));//flat object
      };
      const { data: dataTour, isPending, refetch } = useGetSearchedTours(query);

      console.log(dataTour)

      //      if(!dataTour){
      //       toast.error("متاسفانه در این تاریخ تور وجود ندارد")
      //      }

      return (
            <form onSubmit={handleSubmit(submitHandler)} className="w-[40rem] md:w-[87.4rem] m-[2rem] md:px-[2rem] md:border md:rounded-full flex flex-col  items-center  md:flex-row">
                  <div className="flex flex-row items-center justify-between gap-5">
                        <select defaultValue="" {...register("originId")} className="w-[16rem] h-[4.7rem] m-2 border rounded-2xl md:rounded-none  md:border-l-2 md:border-y-0 md:border-r-0">
                              <option value="" disabled>مبدا</option>
                              {/* Render Origin options */}
                              {renderUniqueOptions(data, 'origin')}
                        </select>
                        <select defaultValue=""  {...register("destinationId")} className="w-[16rem] h-[4.7rem] md:m-[1rem]  m-2 border rounded-2xl md:rounded-none  md:border-l-2 md:border-y-0 md:border-r-0">
                              <option value="" disabled>مقصد</option>
                              {/* Render Destination options */}
                              {renderUniqueOptions(data, 'destination')}
                        </select>
                        {/* integerate datePicker and react hook form */}
                        <Controller
                              control={control}
                              name="date"
                              render={({ field: { onChange } }) => (
                                    <DatePicker
                                          accentColor="#28A745"
                                          round="x2"
                                          inputClass="w-[30rem] h-[4.7rem] "
                                          onChange={(e) =>
                                                onChange({
                                                      startDate: DateToIso(e.from),
                                                      endDate: DateToIso(e.to),
                                                })
                                          } range

                                    />
                              )}
                        />
                  </div>
                  <Button status="search" label="جستجو" type="submit" />
            </form>
      )
}

export default SearchToursForm