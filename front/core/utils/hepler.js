

// Get persian vehicle name 
const vehicleTranslations = {
      "Bus": "اتوبوس",
      "Van": "ون",
      "SUV": "آفرود",
      "Airplane": "هواپیما"
};

const getVehicleNameInPersian = (item) => {
      return vehicleTranslations[item] || item; // Return the translation or the original item if not found
}

// insurance
const getInsuranceStatus = (insurance) => {
      return typeof insurance === 'boolean'
            ? (insurance ? "بیمه دارد" : "بیمه ندارد")
            : "وضعیت بیمه نامشخص"; // Return a default message if the value is not boolean
}

// Get persian origin name

const originDestinationTranslations = {
      "Tehran": "تهران",
      "Sanandaj": "سنندج",
      "Isfahan": "اصفهان",
      "Madrid": "مادرید",
      "sulaymaniyahTour": "سلیمانیه",
      "Hewler": "هولر",
      "Mazandaran": "مازندران",
      "offRoad Center": "آفرود",
      " Italy": "ایتالیا",
};
const getOriginNameInPersian = (originName) => {
      return originDestinationTranslations[originName] || originName; // Return the default message
}



export { getVehicleNameInPersian, getInsuranceStatus, getOriginNameInPersian };
