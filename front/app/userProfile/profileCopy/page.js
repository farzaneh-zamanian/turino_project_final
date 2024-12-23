// "use client"
// import Button from '@/components/ui/atoms/Button'
// import Headings from '@/components/ui/atoms/Headings'
// import InputProfile from '@/components/ui/atoms/InputsProfile'
// import DualSpan from '@/components/ui/molecules/DualSpan'
// import { useGetUserData } from '@/core/services/queries'
// import { validateInput } from '@/core/utils/validation'
// import React, { useEffect, useState } from 'react'

// import DatePicker, { toDateObject } from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import DateObject from 'react-date-object'


// // Array for personal information inputs
// const personalInputs = [
//   { placeholder: "نام و نام خانوادگی", name: "fullName", type: "text" },
//   { placeholder: "کدملی", name: "nationalCode", type: "text" },
// ];

// // Array for payment information inputs
// const paymentInputs = [
//   { placeholder: "شماره حساب", name: "accountIdentifier", type: "text" },
//   { placeholder: "شماره کارت", name: "debitCard_code", type: "text" },
//   { placeholder: "شماره شبا", name: "shaba_code", type: "text" }
// ];

// function Profile() {
//   // STATE- user profile data
//   const [form, setForm] = useState({
//     "mobile": "",
//     "email": "",
//     "firstName": "",
//     "lastName": "",
//     "gender": "",
//     "birthDate": "",
//     "nationalCode": null,
//     "payment": {
//       "shaba_code": "",
//       "debitCard_code": "",
//       "accountIdentifier": ""
//     }
//   })
//   // STATE- error handling
//   const [isValidate, setIsValidate] = useState({
//     "mobile": "",
//     "email": "",
//     "firstName": "",
//     "lastName": "",
//     "gender": "",
//     "birthDate": "",
//     "nationalCode": "",
//     "payment": {
//       "shaba_code": "",
//       "debitCard_code": "",
//       "accountIdentifier": ""
//     }
//   })

//   // Get user data
//   const { data, isError, error, isLoading } = useGetUserData()

//   useEffect(() => {
//     if (data) {
//       setForm((form) => ({
//         ...form,
//         mobile: data.mobile,
//       }));
//     }
//   }, [data]);

//   const changeHandler = (event) => {
//     const { name, value } = event.target;
//     const errorValidation = validateInput(name, value);
//     setIsValidate((isValidate) => ({ ...isValidate, [name]: errorValidation }))

//     // Handle full name input
//     if (name === "fullName") {
//       const arrFullName = value.trim().split(" ");
//       const firstName = arrFullName[0]
//       const lastName = arrFullName[1]
//       setForm((prev) => ({
//         ...prev,
//         firstName: firstName || "", // Default to empty 
//         lastName: lastName || "" // Default to empty 
//       }));
//     }if(name ==="shaba_code" || name === "debitCard_code"|| name ==="accountIdentifier"){
      
//       setForm((prev) => ({
//         ...prev,
//         payment: {
//           ...prev.payment, // Spread the existing payment properties
//           [name]: value // Use square brackets to set the dynamic property
//         }      }));


//     }else {
//       setForm((prev) => ({
//         ...prev,
//         [name]: value
//       }));

//     }



//   }

//   const handleDateChange = (date) => {
//     // Format the date to "YYYY-MM-DD" for database storage
//     const formattedDate = date.format("YYYY-MM-DD");
//     setForm((prev) => ({ ...prev, birthDate: formattedDate }));
//   };






//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(form);
//     // Add form submission logic here
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error: {error.message}</div>;


//   return (
//     <div className='flex flex-col gap-[2rem] '>
//       <form onSubmit={submitHandler} className='flex flex-col gap-5 border border-borderDivColor rounded-2xl p-[1.5rem]'>
//         <Headings label="  اطلاعات حساب کاربری" type="h2" />
//         <div className='flex flex-col gap-5 md:flex-row justify-between'>
//           <DualSpan title="شماره موبایل" value={form.mobile} />
//           <div className='flex flex-row items-center justify-between gap-5 w-full'>
//             <div className='flex flex-col items-center justify-center'>
//               <InputProfile
//                 placeholder="آدرس ایمیل"
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={changeHandler}
//                 className="w-[30rem]"
//               />
//               <div className='text-red-700 h-[2rem]'>
//                 {isValidate.email && <span style={{ color: "red" }}>{isValidate.email}</span>
//                 }
//               </div>
//             </div>
//             <Button label="تایید" status="profileBtn" type="submit" />
//           </div>
//         </div>
//       </form>

//       <form onSubmit={submitHandler} className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem]'>
//         <div className='flex flex-col md:grid grid-cols-3 gap-5'>
//           {personalInputs.map((inputProps, index) => (<div className='flex flex-col'>

//             <InputProfile
//               key={index}
//               placeholder={inputProps.placeholder}
//               type={inputProps.type}
//               name={inputProps.name}
//               value={form[inputProps.name]}
//               onChange={changeHandler}
//             />

//             <div className='text-red-700 h-[2rem]'>
//               {isValidate[inputProps.name] && <span style={{ color: "red" }}>{isValidate[inputProps.name]}</span>
//               }
//             </div>





//           </div>
//           ))}
//           <DatePicker
//             calendar={persian}
//             locale={persian_fa}
//             format="YYYY/MM/DD"
//             showOtherDays
//             containerStyle={{
//               width: "100%",
//             }}
//             value={form.birthDate}
//             onChange={handleDateChange}

//             render={
//               <input
//                 name="birthDate"
//                 placeholder=" تاریخ" // "From Date" in Persian
//                 type="text"
//                 className="border rounded-[0.5rem] p-[0.8rem] w-full"
//                 readOnly
//               />
//             }
//           />

//           <select
//             name="gender"
//             value={form.gender}
//             onChange={changeHandler}
//             // className="placeholder:text-gray-400  rounded-[0.5rem] border  p-[0.8rem] w-full h-[4rem] "
//             className="border rounded-[0.5rem] p-[0.8rem] w-full "
//           >
//             <option value="" disabled selected className=""> جنسیت</option>
//             <option value="male">مرد</option>
//             <option value="female">زن</option>
//           </select>

//         </div>
//         <div className='flex items-center gap-5 '>
//           <Button label="انصراف" status="cancelBtn" />
//           <Button label="تایید" status="profileBtn" type="submit" />
//         </div>


//       </form>

//       <form onSubmit={submitHandler} className='flex flex-col border border-borderDivColor rounded-2xl p-[1.5rem] gap-[1rem]'>
//         <div className='flex flex-col md:grid grid-cols-3 gap-5'>
//           {paymentInputs.map((inputProps, index) => (<div className='flex flex-col'>
//             <InputProfile
//               key={index}
//               placeholder={inputProps.placeholder}
//               type={inputProps.type}
//               name={inputProps.name}
//               value={form.payment[inputProps.name]}
//               onChange={changeHandler}
//             />
//             <div className='text-red-700 h-[2rem]'>
//               {isValidate[inputProps.name] && <span style={{ color: "red" }}>{isValidate[inputProps.name]}</span>
//               }
//             </div>
//           </div>
//           ))}

//         </div>
//         <div className='flex items-center gap-5'>
//           <Button label="انصراف" status="cancelBtn" />
//           <Button label="تایید" status="profileBtn" type="submit" />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Profile