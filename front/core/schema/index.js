//?  bank account schema


import { object, string } from "yup";


// bank account schema
const bankAcountSchema = object({
  shaba_code: string()
    // .required("شماره شبارا وارد کنید")
    .nullable() // Allow the field to be null or empty
  // .matches(/^IR\d{24}$/, "شماره شبا باید 24 رقم باشد و با IR شروع شود")
  ,
  debitCard_code: string()
    .required("لطفا شماره کارت را وارد کنید")
    .length(16, "شماره کارت باید ۱۶ رقم باشد")
    .matches(/^\d{16}$/, "شماره کارت باید 16 رقم باشد"),

  accountIdentifier: string()
    // .required("لطفا شماره حساب را وارد کنید")
    .nullable() // Allow the field to be null or empty
  // .min(8, "شماره حساب باید حداقل ۸ رقم باشد")
  // .max(16, "شماره حساب باید حداکثر ۱۶ رقم باشد")

  ,
});

const personalInformationSchema = object({
  name: string()
    .required("نام و نام خانوادگی را وارد کنید") // Required field message
    .min(3, "نام میتواند حداقل ۳ کاراکتر باشد") // Minimum length validation message
    .max(20, "نام میتواند حداکثر ۲۰ کاراکتر باشد") // Maximum length validation message
    .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, "نام تنها میتواند شامل حروف فارسی و انگلیسی باشد"),
  nationalCode: string()
    .required("لطفا کد ملی را وارد کنید")
    .length(10, "کد ملی باید ۱۰ رقم باشد")
    .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),
})

const userAccountSchema = object({
  email: string()
    .required("لطفا ایمیل را وارد کنید")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "لطفا ایمیل معتبر وارد کنید"
    )
})

export { bankAcountSchema, personalInformationSchema, userAccountSchema };
