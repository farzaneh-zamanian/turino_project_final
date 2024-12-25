"use client"

import Button from '@/components/ui/atoms/Button'
import Headings from '@/components/ui/atoms/Headings'
import InputProfile from '@/components/ui/atoms/InputsProfile'
import DualSpan from '@/components/ui/molecules/DualSpan'
import { useGetUserData } from '@/core/services/queries'
import { validateInput } from '@/core/utils/validation'
import React, { useEffect, useState } from 'react'

import DatePicker, { toDateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from 'react-date-object'
import UserBankAccountForm from "@/components/templates/userBankAccountForm";
import UserAccountInfoForm from '@/components/templates/userAccountInfoForm'
import UserPersonalInfoForm from '@/components/templates/userPersonalInfoForm'


// Array for personal information inputs
const personalInputs = [
  { placeholder: "نام و نام خانوادگی", name: "fullName", type: "text" },
  { placeholder: "کدملی", name: "nationalCode", type: "text" },
];

// Array for payment information inputs
const paymentInputs = [
  { placeholder: "شماره حساب", name: "accountIdentifier", type: "text" },
  { placeholder: "شماره کارت", name: "debitCard_code", type: "text" },
  { placeholder: "شماره شبا", name: "shaba_code", type: "text" }
];

function Profile() {





  // Get user data
  const { data, isError, error, isLoading } = useGetUserData()


  // const changeHandler = (event) => {
  //   const { name, value } = event.target;
  //   const errorValidation = validateInput(name, value);
  //   setIsValidate((isValidate) => ({ ...isValidate, [name]: errorValidation }))

  //   // Handle full name input
  //   if (name === "fullName") {
  //     const arrFullName = value.trim().split(" ");
  //     const firstName = arrFullName[0]
  //     const lastName = arrFullName[1]
  //     setForm((prev) => ({
  //       ...prev,
  //       firstName: firstName || "", // Default to empty 
  //       lastName: lastName || "" // Default to empty 
  //     }));
  //   } 



  // }

  // const handleDateChange = (date) => {
  //   // Format the date to "YYYY-MM-DD" for database storage
  //   const formattedDate = date.format("YYYY-MM-DD");
  //   setForm((prev) => ({ ...prev, birthDate: formattedDate }));
  // };






  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log(form);
  //   // Add form submission logic here
  // };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;


  return (

    <>
      {/* user account form */}
      <UserAccountInfoForm data={data} />
      {/* user bank account form */}
      <UserBankAccountForm data={data} />
      {/* user prsonal account */}
      <UserPersonalInfoForm data={data} />


    </>

  )
}

export default Profile