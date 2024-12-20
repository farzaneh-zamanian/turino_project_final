"use client";


import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import React from 'react'

function PersianDatePicker() {
  
  
  //   <DatePicker
  //   calendar={persian}
  //   locale={persian_fa}
  //   format="YYYY/MM/DD"
  //   showOtherDays
  //   containerStyle={{
  //     width: "100%",
  //   }}
  //   render={
  //     <input
  //       // base={"true"}
  //       // bgcolor={"#ECECEC"}
  //       placeholder="از تاریخ" // "From Date" in Persian
  //       variant="Date"
  //       // width={"100%"}
  //       // height={"45px"}
  //       // borderradius={"13px"}
  //       className="mobile:hidden text-xs placeholder:text-xs placeholder:text-black"
  //     />
  //   }
  // />
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      format="YYYY/MM/DD"
      showOtherDays
      containerStyle={{
        width: "100%",
      }}
      render={
        <input
          placeholder=" تاریخ" // "From Date" in Persian
          type="text"
          className="border p-2 rounded w-full text-xs placeholder:text-xs placeholder:text-black"
        />
      }
    />
  );
}
  


export default PersianDatePicker



