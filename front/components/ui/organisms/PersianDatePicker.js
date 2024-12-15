"use client";

import React, { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";
import dayjs from "@/utils/dayjsConfig";

export default function PersianDatePicker() {
  const [value, setValue] = useState(dayjs().calendar("jalali"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="py-4">
        <DatePicker
          label="تاریخ را انتخاب کنید"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <input {...params} className="border p-2 rounded w-full" />}
        />
        {value && (
          <p className="mt-4 text-lg">
            تاریخ انتخاب شده: {value.calendar("jalali").format("YYYY/MM/DD")}
          </p>
        )}
      </div>
    </LocalizationProvider>
  );
}
