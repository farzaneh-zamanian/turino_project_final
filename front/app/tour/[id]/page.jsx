import Button from "@/components/atoms/Button";
import { api } from "@/configs/api";
import { getInsuranceStatus, getVehicleNameInPersian } from "@/utils";
import Image from "next/image";
import React from "react";

async function TourDetails(props) {
  let data;
  const { params } = props;

  try {
    const response = await api.get(`/tour/${params.id}`);
    data = await response.data;
  } catch (error) {
    console.error("Error fetching tour details:", error);
    return <div>Error loading tour details.</div>; // Handle error gracefully
  }
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
    { icon: "/images/icons/user-tick.svg", label: "تورلیدر از مبدا" },
    { icon: "/images/icons/map.svg", label: "برنامه سفر" },
    { icon: "/images/icons/medal-star.svg", label: "تضمین کیفیت" },
  ];
  const features = [
    {
      icon: "/images/icons/bus.svg",
      label: "حمل و نقل",
      value: getVehicleNameInPersian(fleetVehicle),
    },
    {
      icon: "/images/icons/users-profile.svg",
      label: "ظرفیت",
      value: `حداکثر ${availableSeats} نفر`,
    },
    {
      icon: "/images/icons/security.svg",
      label: "بیمه",
      value: getInsuranceStatus(insurance),
    },
  ];
  const featuresDesktop = [
    { icon: "/images/icons/entrance.svg", label: "مبدا", value: entrance },
    {
      icon: "/images/icons/departureDate.svg",
      label: "تاریخ رفت",
      value: startDate,
    },
    {
      icon: "/images/icons/returnDate.svg",
      label: " تاریخ برگشت ",
      value: endDate,
    },
    {
      icon: "/images/icons/bus.svg",
      label: "حمل و نقل",
      value: getVehicleNameInPersian(fleetVehicle),
    },
    {
      icon: "/images/icons/users-profile.svg",
      label: "ظرفیت",
      value: `حداکثر ${availableSeats} نفر`,
    },
    {
      icon: "/images/icons/security.svg",
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
                <div className="flex items-center gap-[1rem]">
                  <img
                    src={icon}
                    className="w-[1.6rem] h-[1.6rem]"
                    alt={label}
                  />
                  <p className="text-[1.6rem]">{label}</p>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="flex items-center justify-between">
            <Button label="رزرو و خرید" status="reservation" />
            <p className="text-priceColor">{price} تومان</p>
          </div>
        </div>
      </div>
      {/* desktop Features */}
      <div className=" hidden  md:flex justify-between items-center mt-[2rem] ">
        {featuresDesktop.map(({ icon, label, value }, index) => (
          <>
            <div key={index} className="flex flex-col ">
              <div className="flex items-center gap-[1rem]">
                <img src={icon} className="w-[1.6rem] h-[1.6rem]" alt={label} />
                <p className="text-[1.6rem]">{label}</p>
              </div>
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
