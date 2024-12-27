"use client"

import { DatePicker } from "zaman";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import QueryString from "qs";


import Button from "@/components/ui/atoms/Button";
import { useGetSearchedTours } from "@/core/services/queries";
import { DateToIso, flattenObject, renderUniqueOptions } from "@/core/utils/hepler";
import useQuery from "@/core/hooks/query";


function SearchToursForm({ data }) {

      const router = useRouter();
      const { getQuery } = useQuery();
      const { register, handleSubmit, control , reset} = useForm();

      
      // const [query, setQuery] = useState("");//state of query(originId,destination,startDate,endDate)
      // const { data: dataTour, isPending, refetch } = useGetSearchedTours(query);
      // useEffect(() => {
      //       refetch();
      // }, [query]);

      // show default value od serach items
      useEffect(() => {
            const originId = getQuery("originId");
            const destinationId = getQuery("destinationId");
            if (originId && destinationId) reset({originId, destinationId})
          }, []);

      const submitHandler = (form) => {
            const query = QueryString.stringify(flattenObject(form));
            router.push(`/?${query}`);
      };

      return (
            <section>
                  <form onSubmit={handleSubmit(submitHandler)} className="w-[40rem] md:w-[87.4rem] m-[2rem] md:px-[2rem] md:border md:rounded-full flex flex-col  items-center  md:flex-row">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                              <div className="md:flex md:items-center">
                              <select defaultValue="" {...register("originId")} className="w-[16rem] h-[4.7rem] m-2 border rounded-2xl md:rounded-none  md:border-l-2 md:border-y-0 md:border-r-0">
                                    <option value="" disabled>مبدا</option>
                                    {/* Render Origin options tag */}
                                    {renderUniqueOptions(data, 'origin')}
                              </select>
                              <select defaultValue=""  {...register("destinationId")} className="w-[16rem] h-[4.7rem] md:m-[1rem]  m-2 border rounded-2xl md:rounded-none  md:border-l-2 md:border-y-0 md:border-r-0">
                                    <option value="" disabled>مقصد</option>
                                    {/* Render Destination options tag */}
                                    {renderUniqueOptions(data, 'destination')}
                              </select>
                              </div>
                     
                              {/* integerate datePicker and react hook form */}
                              <Controller
                                    control={control}
                                    name="date"
                                    render={({ field: { onChange } }) => (
                                          <DatePicker
                                                accentColor="#28A745"
                                                round="x2"
                                                inputClass="w-[30rem] h-[4.7rem] border rounded-2xl mb-[2rem] md:mb-0 md:border-none "
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
                        <Button status="search" label="جستجو" type="submit"  />
                  </form>
            </section>

      )
}

export default SearchToursForm