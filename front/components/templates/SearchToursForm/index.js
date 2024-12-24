"use client"
import Button from "@/components/ui/atoms/Button";
import { DateToIso, renderUniqueOptions } from "@/core/utils/hepler";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";


function SearchToursForm({ data }) {
      const { register, handleSubmit, control } = useForm();
      const submitHandler = data => console.log(data);
      return (
            <form onSubmit={handleSubmit(submitHandler)} className="bg-red-300 w-[40rem] md:w-[87.4rem] m-[5rem] md:p-[0.5rem] md:border md:rounded-full flex flex-col  items-center  md:flex-row">
                  <div className="flex flex-row items-center justify-between gap-5 md:gap-0">
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
                              render={({ field:{ onChange } }) => (
                                    <DatePicker
                                          accentColor="#28A745"
                                          round="x2"
                                          inputClass="w-[30rem] h-[4.7rem]"
                                          onChange={(e) =>
                                                onChange({
                                                  startDate: DateToIso(e.from),
                                                  endDate: DateToIso(e.to),
                                                })
                                              }                                          range
                                       
                                    />
                              )}
                        />




                  </div>

                  <Button status="search" label="جستجو" type="submit" />
            </form>
      )
}

export default SearchToursForm