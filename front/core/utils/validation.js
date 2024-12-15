const isValidMobile = (val) => {
  let regex = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
  return regex;
};

export { isValidMobile };




// export const validateInput = (name, value) => {
//   switch (name) {
//         case "mobile":
//               return validateUsername(name, value);
//         case "password":
//               return validatePassword(name, value);
//         default:
//               return "";
//   }
// }
