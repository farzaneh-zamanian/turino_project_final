import IconDescriptionCard from "@/components/ui/molecules/IconDescriptionCard";
import ReservationCard from "@/components/ui/molecules/ReservationCard";
import { api } from "@/core/configs/api";
import {
  getInsuranceStatus,
  getOriginNameInPersian,
  getVehicleNameInPersian,
} from "@/core/utils/hepler";
import Image from "next/image";
import React from "react";

async function TourDetails(props) {
  let data;
  let error = null;

  const { params } = props;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/${params.id}`);
  
    if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
    }
    data = await res.json();

    
  } catch (err) {
    console.error('Error fetching data:', err);
    // throw new Error('Internal Server Error');

    error = err; // Store the error for later use
  
    
  }
    // Show loading state while data is being fetched

    // Show error message if there's an error
    if (error) return <div>Erroryyyy: {error.message} {error.status}</div>;
  
  

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
    { icon: "/icons/user-tick.svg", label: "تورلیدر از مبدا" },
    { icon: "/icons/map.svg", label: "برنامه سفر" },
    { icon: "/icons/medal-star.svg", label: "تضمین کیفیت" },
  ];
  const features = [
    {
      icon: "/icons/bus.svg",
      label: "حمل و نقل",
      value: getVehicleNameInPersian(fleetVehicle),
    },
    {
      icon: "/icons/users-profile.svg",
      label: "ظرفیت",
      value: `حداکثر ${availableSeats} نفر`,
    },
    {
      icon: "/icons/security.svg",
      label: "بیمه",
      value: getInsuranceStatus(insurance),
    },
  ];
  const featuresDesktop = [
    {
      icon: "/icons/entrance.svg",
      label: "مبدا",
      value: getOriginNameInPersian(entrance),
    },
    {
      icon: "/icons/departureDate.svg",
      label: "تاریخ رفت",
      value: startDate,
    },
    {
      icon: "/icons/returnDate.svg",
      label: " تاریخ برگشت ",
      value: endDate,
    },
    {
      icon: "/icons/bus.svg",
      label: "حمل و نقل",
      value: getVehicleNameInPersian(fleetVehicle),
    },
    {
      icon: "/icons/users-profile.svg",
      label: "ظرفیت",
      value: `حداکثر ${availableSeats} نفر`,
    },
    {
      icon: "/icons/security.svg",
      label: "بیمه",
      value: getInsuranceStatus(insurance),
    },
  ];

  return (
    <div className="mx-auto mt-[2rem] md:rounded-md md:border md:border-solid md:border-borderColor md:p-[2rem] ">
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
            <span>5 روز و 4 شب</span>
          </div>

          {/* Options */}
          <div className="flex justify-between md:gap-10">
            {options.map(({ icon, label }, index) => (
              <div key={index} className="flex items-center gap-[1rem]">
                <img src={icon} className="w-[1.4rem] h-[1.4rem]" alt={label} />
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

          {/* Action */}
          <ReservationCard
            label="رزرو و خرید "
            status="reservation"
            price={price}
            classNames="text-priceColor"
          />
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
  );
}

export default TourDetails;
