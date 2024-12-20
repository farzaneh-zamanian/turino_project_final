//* name
export const validateNameLastname = (value, name) => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  if (!value || value.trim() === "") {
    return `Please enter your ${capitalizedName}`;
  }

  if (value.length < 3 || value.length > 20) {
    return `${capitalizedName} must be between 4 and 20 characters`;
  }

  if (!/^[a-zA-Z ]+$/.test(value)) {
    return `${capitalizedName} must contain only letters and spaces`;
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
export const validateEmail = (value) => {
  if (!value) return "Please enter your email address";
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  if (!emailPattern.test(value)) return "Invalid email address.";
  return "";
};

//* telephone
export const isValidMobile = (value) => {
  if (!value) return "لطفا شماره موبایل خود را وارد کنید";
  const telephonePattern = /^09\d{9}$/;
  if (!telephonePattern.test(value)) return "لطفا شماره موبایل معتبر وارد کنید";
  return "";
};

// export const isValidMobile = (val) => {
//   let regex = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
//   return regex;
// };


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
    case "name":
      return validateNameLastname(value, name);
    case "family":
      return validateNameLastname(value, name);
    case "nationalCode":
      return valideNationlCode(value);
    case "email":
      return validateEmail(value);
    case "telephone":
      return validateTelephone(value);
    case "username":
      return validateUsername(value);
    case "password":
      return validatePassword(value);


    default:
      return "";
  }
}
