
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

// Get persian  insurance
const getInsuranceStatus = (insurance) => {
      return typeof insurance === 'boolean'
            ? (insurance ? "بیمه دارد" : "بیمه ندارد")
            : "وضعیت بیمه نامشخص"; // Return a default message if the value is not boolean
}

// Get persian origin name
const originDestinationTranslations = {
      "Tehran": "تهران",
      "Sanandaj": "سنندج",
      "Sananndaj": "سنندج",
      "Isfahan": "اصفهان",
      "Madrid": "مادرید",
      "sulaymaniyahTour": "سلیمانیه",
      "Hewler": "هولر",
      "Mazandaran": "مازندران",
      "offRoad Center": "آفرود",
      "Italy": "ایتالیا",
};
const getOriginNameInPersian = (originName) => {
      return originDestinationTranslations[originName] || originName; // Return the default message
}

// get gender in persian
const getGenderInPersian = (gender) => {
      return gender === 'male' ? 'مرد' : 'زن';
}


// Format the timer to mm:ss
const formatTheTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// Get the origin and destination option in 
const renderUniqueOptions = (data, key) => {
      // Step 1: Create an array of objects with origin names and IDs
      const originArray = data.map(item => ({
            name: item[key].name,
            id: item[key].id
      }));
      // Step 2: Use Set to filter unique origin names
      const uniqueOriginsSet = new Set();
      const uniqueOrigins = originArray.filter(item => {
            if (!uniqueOriginsSet.has(item.name)) {
                  uniqueOriginsSet.add(item.name);
                  return true;
            }
            return false;
      });
      //Step 3: Use Set to create options
      return uniqueOrigins.map((item, index) => (
            <option key={index} value={item.id}>
                  {getOriginNameInPersian(item.name)}
            </option>
      ));
};

// Flatten objects
const flattenObject = (obj, delimiter = ".", prefix = "") => {
      const flattObject = Object.keys(obj).reduce((acc, k) => {
            const pre = prefix.length ? `${prefix}${delimiter}` : "";
            if (
                  typeof obj[k] === "object" &&
                  obj[k] !== null &&
                  Object.keys(obj[k]).length > 0
            )
                  Object.assign(acc, flattenObject(obj[k], delimiter, k));
            else acc[k] = obj[k];
            return acc;
      }, {});
      return flattObject;
};

// Converts the Date object into a string in the ISO format
const DateToIso = (date) => new Date(date).toISOString();

// Calculate the duration of day and night between start date and end date
function calculateDuration(startDate, endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Calculate the difference in milliseconds
      const differenceInMs = end - start;

      // Calculate the difference in days
      const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

      // Calculate nights (nights = days - 1)
      const nights = differenceInDays - 1;

      // Return the formatted string
      return `     ${differenceInDays}روز و ${nights}شب`
}


export {
      getVehicleNameInPersian,
      getInsuranceStatus,
      getOriginNameInPersian,
      formatTheTime,
      renderUniqueOptions,
      flattenObject,
      DateToIso, getGenderInPersian,
      calculateDuration
};
