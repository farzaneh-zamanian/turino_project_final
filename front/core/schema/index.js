//?  bank account schema


import { object, string } from "yup";


// bank account schema
const bankAcountSchema = object({
  shaba_code: string()
    .required("شماره شبارا وارد کنید")
    // .length(24, "شماره شبا باید 24 رقم باشد")
    .matches(/^IR\d{24}$/, "شماره شبا باید 24 رقم باشد و با IR شروع شود")
  ,
  debitCard_code: string()
    .required("لطفا شماره کارت را وارد کنید")
    .length(16, "شماره کارت باید ۱۶ رقم باشد")
    .matches(/^\d{16}$/, "شماره کارت باید 16 رقم باشد"),

  accountIdentifier: string()
    .required("لطفا شماره حساب را وارد کنید")
    // .matches(/^\d{10}$/, "شماره حساب باید 10 رقم باشد")
    .min(8, "شماره حساب باید حداقل ۸ رقم باشد")
    .max(16, "شماره حساب باید حداکثر ۱۶ رقم باشد")

  ,
});

export { bankAcountSchema };
