import IconDescriptionCard from "@/components/ui/molecules/IconDescriptionCard";
import TourReservationButton from "@/components/ui/organisms/TourReservationButton";
import { serverFetch } from "@/core/services/http";
import {
  calculateDuration,
  getInsuranceStatus,
  getOriginNameInPersian,
  getVehicleNameInPersian,
} from "@/core/utils/hepler";
import BusVehicle from "@/public/icons/icons/BusVehicle";
import DepartureDate from "@/public/icons/icons/DepartureDate";
import MapIcon from "@/public/icons/icons/MapIcon";
import MedalStarIcon from "@/public/icons/icons/MedalStarIcon";
import OriginIcon from "@/public/icons/icons/OriginIcon";
import SecurityIcon from "@/public/icons/icons/SecurityIcon";
import UsersProfileIcon from "@/public/icons/icons/UsersProfileIcon";
import UserTickIcon from "@/public/icons/icons/UserTickIcon";

// page title
export const metadata = {
  title: "Tour details",
  description: "Tourism tour booking",
  keywords: "tour, offroad,travel",

};

// SSR page
async function TourDetails({ params }) {
  // fetching tour data according tour id
  const data = await serverFetch(`/tour/${params.id}`, null, {
    cache: "no-store",
  });

  const {
    image,
    title,
    fleetVehicle,
    availableSeats,
    insurance,
    price,
    startDate,
    endDate,
    origin: { name: entrance },
  } = data;

  const options = [
    { icon: <UserTickIcon />, label: "تورلیدر از مبدا" },
    { icon: <MapIcon />, label: "برنامه سفر" },
    { icon: <MedalStarIcon />, label: "تضمین کیفیت" },
  ];
  const features = [
    {
      icon: <BusVehicle />,
      label: "حمل و نقل",
      value: getVehicleNameInPersian(fleetVehicle),
    },
    {
      icon: <UsersProfileIcon />,
      label: "ظرفیت",
      value: `حداکثر ${availableSeats} نفر`,
    },
    {
      icon: <SecurityIcon />,
      label: "بیمه",
      value: getInsuranceStatus(insurance),
    },
  ];
  const featuresDesktop = [
    {
      icon: <OriginIcon />,
      label: "مبدا",
      value: getOriginNameInPersian(entrance),
    },
    {
      icon: <DepartureDate />,
      label: "تاریخ رفت",
      value: startDate.split("T")[0],
    },
    {
      icon: <DepartureDate />,
      label: " تاریخ برگشت ",
      value: endDate.split("T")[0],
    },
    {
      icon: <BusVehicle />,
      label: "حمل و نقل",
      value: getVehicleNameInPersian(fleetVehicle),
    },
    {
      icon: <UsersProfileIcon />,
      label: "ظرفیت",
      value: `حداکثر ${availableSeats} نفر`,
    },
    {
      icon: <SecurityIcon />,
      label: "بیمه",
      value: getInsuranceStatus(insurance),
    },
  ];

  return (
    <>
      <div className="md:w-full mx-auto mt-[2rem] md:rounded-md md:border md:border-solid md:border-borderColor md:p-[2rem] ">
        <div className="flex flex-col mx-auto md:flex md:flex-row md:gap-10 ">
          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg md:w-[30rem] h-[20rem]"
            layout="responsive"
          />
          {/* Description */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center md:flex-col md:items-start">
              <h2 className="text-[2.4rem] font-bold">{title}</h2>
              <span>{calculateDuration(startDate, endDate)}</span>
            </div>
            {/* Options */}
            <div className="flex justify-between md:gap-10">
              {options.map(({ icon, label }, index) => (
                <div key={index} className="flex items-center gap-[1rem]">
                  {icon}
                  <p className="text-textLightColor text-[1.3rem]">{label}</p>
                </div>
              ))}
            </div>
            {/* mobile Features */}
            <div className="flex justify-between md:hidden">
              {features.map(({ icon, label, value }, index) => (
                <div key={index} className="flex flex-col">
                  <IconDescriptionCard label={label} icon={icon} />
                  <p>{value}</p>
                </div>
              ))}
            </div>

            {/* client side action button*/}
            <div className='flex items-center justify-between pt-[1rem] '>
              <TourReservationButton tourId={params.id} />
              <p className="text-priceColor">{price} تومان</p>
            </div>

          </div>
        </div>
        {/* desktop Features */}
        <div className=" hidden  md:flex justify-between items-center mt-[2rem] ">
          {featuresDesktop.map(({ icon, label, value }, index) => (
            <>
              <div key={index} className="flex flex-col ">
                <IconDescriptionCard label={label} icon={icon} />
                <p>{value}</p>
              </div>
              {index < featuresDesktop.length - 1 && (
                <span className="border border-solid h-[6rem] border-borderColor"></span>
              )}
            </>
          ))}
        </div>
      </div>

    </>

  );
}

export default TourDetails;
