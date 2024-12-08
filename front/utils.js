// change vehicle name 
const getVehicleNameInPersian = (item) => {
      switch (item) {
            case "Bus":
                  return "اتوبوس"
            case "Van":
                  return "ون"
            case "SUV":
                  return "آفرود"
            case "Airplane":
                  return "هواپیما"
            default:
                  return item;
      }

}

// insurance
const getInsuranceStatus = (insurance) => {
      switch (insurance) {
            case true: return "بیمه دارد"
                  break;
            case false: return "بیمه ندارد"

            default:
                  return "وضعیت بیمه نامشخص"; // Return a default message if the value is not boolean
      }
}
export { getVehicleNameInPersian, getInsuranceStatus };
