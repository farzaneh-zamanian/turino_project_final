
const headerUserProfileItems = [
      // {
      //       href:"/",
      //       figure: {
      //             icon: { src: '/icons/userProfile.svg', width: 16, height: 16 },
      //             caption: { children: 'mobileNumber', className: 'text-[1.6rem] font-medium' },
      //             className: 'p-[0.5rem] rounded-full flex gap-2 ',
      //       },
      //       className: 'pr-[1rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.4rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1',
      // },
      {
            href:"/userProfile/profile",
            figure: {
                  icon: { src: '/icons/profile.svg', width: 16, height: 16 },
                  caption: { children: 'اطلاعات حساب کاربری', className: 'text-[1.2rem] md:text-[1.4rem] ' },
                  className: 'flex gap-2',
            },
            className: 'pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.6rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1',
      },
      {
            href:"/",
            figure: {
                  icon: { src: '/icons/logout.svg', width: 16, height: 16 },
                  caption: { children: 'خروج از حساب کاربری', className: 'text-[#D40000] text-[1.2rem] md:text-[1.4rem]' },
                  className: 'flex gap-2',
            },
            className: 'pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.6rem]',
      },
];



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


// Format the timer to mm:ss
const formatTheTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};


export { getVehicleNameInPersian, getInsuranceStatus, getOriginNameInPersian, formatTheTime, headerUserProfileItems };
