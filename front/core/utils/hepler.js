

// const headerUserProfileItems = [
//       // {
//       //       href:"/",
//       //       figure: {
//       //             icon: { src: '/icons/userProfile.svg', width: 16, height: 16 },
//       //             caption: { children: 'mobileNumber', className: 'text-[1.6rem] font-medium' },
//       //             className: 'p-[0.5rem] rounded-full flex gap-2 ',
//       //       },
//       //       className: 'pr-[1rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.4rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1',
//       // },
//       {
//             href: "/userProfile/profile",
//             figure: {
//                   icon: { src: '/icons/profile.svg', width: 16, height: 16 },
//                   caption: { children: 'اطلاعات حساب کاربری', className: 'text-[1.2rem] md:text-[1.4rem] ' },
//                   className: 'flex gap-2',
//             },
//             className: 'pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.6rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1',
//       },
//       {
//             href: "/",
//             figure: {
//                   icon: { src: '/icons/logout.svg', width: 16, height: 16 },
//                   caption: { children: 'خروج از حساب کاربری', className: 'text-[#D40000] text-[1.2rem] md:text-[1.4rem]' },
//                   className: 'flex gap-2',
//             },
//             className: 'pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.6rem]',
//       },
// ];



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

      return uniqueOrigins.map((item, index) => (
            <option key={index} value={item.id}>
                  {getOriginNameInPersian(item.name)}
            </option>
      ));
};

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

const DateToIso = (date) => new Date(date).toISOString();

function calculateDuration(startDate, endDate) {
      // Parse the dates
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Calculate the difference in milliseconds
      const differenceInMs = end - start;

      // Calculate the difference in days
      const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

      // Calculate nights (nights = days - 1)
      const nights = differenceInDays - 1;

      // Return the formatted string
      return `    ${differenceInDays}روز${nights}شب`
      // return `${differenceInDays} روز و  شب`;
}

// Example usage
const startDate = "2024-12-01T00:00:00.000Z";
const endDate = "2024-12-05T00:00:00.000Z";
const duration = calculateDuration(startDate, endDate);
console.log(duration); // Output: "4 روز و 3 شب"

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
