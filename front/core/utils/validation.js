//* name
export const isValidateFullName = (value) => {
  // const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  if (!value || value.trim() === "") {
    return "لطفا نام را وارد کنید ";
  }
  if (value.length < 3 || value.length > 20) {
    return "نام میتواند بین 3 تا 15 کاراکتر باشد ";
  }
  // if (!/^[a-zA-Z ]+$/.test(value)) {
  //   return "نام تنها میتواند شامل حروف باشد";
  // }
  // Regex to allow only Persian letters and spaces
  // if (!/^[\u0600-\u06FF\s]+$/.test(value)) {
  //   return "نام تنها میتواند شامل حروف فارسی باشد"; // "Name can only include Persian letters"
  // }

  // Regex to allow both Persian and English letters and spaces
  if (!/^[\u0600-\u06FFa-zA-Z\s]+$/.test(value)) {
    return "نام تنها میتواند شامل حروف فارسی و انگلیسی باشد"; // "Name can only include Persian and English letters"
  }


  return "";
};
export const isValidateFamily = (value) => {
  // const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  if (!value || value.trim() === "") {
    return "لطفا نام خانوادگی را وارد کنید ";
  }
  if (value.length < 3 || value.length > 20) {
    return "نام خانوادگی میتواند بین 3 تا 15 کاراکتر باشد ";
  }
  if (!/^[a-zA-Z ]+$/.test(value)) {
    return "نام خانوادگی تنها میتواند شامل حروف باشد";
  }

  return "";
};
//* last name
export const validateLastName = (value) => {
  if (!value) return "Please enter your last name";
  if (value.length < 3) return "Last name must be at least 4 characters";
  return "";
};
//* email address
export const isValidateEmail = (value) => {
  if (!value) return "لطفا ایمیل خود را وارد کنید";
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  if (!emailPattern.test(value)) return "لطفا ایمیل معتبر وارد کنید";
  return "";
};

//* telephone
export const isValidMobile = (value) => {
  if (!value) return "لطفا شماره موبایل خود را وارد کنید";
  const telephonePattern = /^09\d{9}$/;
  if (!telephonePattern.test(value)) return "لطفا شماره موبایل معتبر وارد کنید";
  return "";
};

//* national code
export const isValidNationalCode = (value) => {
  if (!value) return "لطفا کد ملی را وارد کنید";
  const nationalCodePattern = /^\d{10}$/;
  if (!nationalCodePattern.test(value)) return "لطفا کدملی  معتبر وارد کنید";
  return "";
};

export const isValidateAccountNumber = (value) => {
  if (!value || value.trim() === "") {
    return "لطفا شماره حساب را وارد کنید "; // "Please enter the account number"
  }
  if (!/^\d{10}$/.test(value)) {
    return "شماره حساب باید 10 رقم باشد"; // "Account number must be between 10 to 20 digits"
  }

  return "";
};

export const isValidateShabaCode = (value) => {
  if (!value || value.trim() === "") {
    return "لطفا شماره شبا را وارد کنید"; // "Please enter the Shaba code"
  }
  if (!/^IR\d{24}$/.test(value)) {
    return "شماره شبا باید 24 کاراکتر باشد و با IR شروع شود"; // "Shaba code must be 26 characters and start with IR"
  }

  return "";
};

export const isValidateDebitCardCode = (value) => {
  if (!value || value.trim() === "") {
    return "لطفا شماره کارت را وارد کنید"; // "Please enter the debit card number"
  }
  if (!/^\d{16}$/.test(value)) {
    return "شماره کارت باید 16 رقم باشد"; // "Debit card number must be 16 digits"
  }

  return "";
};



//* user name

export const validateUsername = (value) => {
  //alphanumeric, length
  if (!value || value.trim() === "") {
    return "نام کاربری نباید خالی باشد.";
  }
  if (value.length < 3 || value.length > 20) {
    return "نام کاربری باید بین 3 تا 20 کاراکتر باشد.";
  }
  if (!/^[a-zA-Z0-9]+$/.test(value)) {
    return "نام کاربری باید  شامل حروف و عدد باشد.";
  }

  // const regex = /^[a-zA-Z\d_]{4,16}$/;
  // const result = regex.test(value)
  // return result;
}

//* password
export const validatePassword = (value) => {
  if (!value || value.trim() === "") {
    return "پسورد نباید خالی باشد.";
  }
  // Check for minimum length
  if (value.length < 4) {
    return "پسورد باید حداقل بیشتز از 4 کاراکتر باشد ";
  }

  //   const regex = /^.{4,20}$/;
  // const result = regex.test(value)
  // return result;
}






export const validateInput = (name, value) => {
  switch (name) {
    case "mobile":
      return isValidMobile(value);
    case "email":
      return isValidateEmail(value);
    case "fullName":
      return isValidateFullName(value);
    case "nationalCode":
      return isValidNationalCode(value);

    case "shaba_code":
      return isValidateShabaCode(value);
    case "debitCard_code":
      return isValidateDebitCardCode(value);
    case "accountIdentifier":
      return isValidateAccountNumber(value);

    default:
      return "";
  }
}
