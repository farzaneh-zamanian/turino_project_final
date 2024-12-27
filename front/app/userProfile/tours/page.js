"use client";
import { useGetUserAllTours } from '@/core/services/queries';
import React from 'react';
import { convertToPersianDate, getOriginNameInPersian, getVehicleNameInPersian, isTourFinished } from '@/core/utils/hepler';
import AirplaneIcon from '@/public/icons/icons/AirplaneIcon';

const TourStatusBadge = ({ finished }) => (
  <span className={`rounded-3xl p-2 text-[1rem] ${finished ? 'bg-[#28A7454D] text-primary' : 'bg-[#D1B9004D] text-[#D1B900]'}`}>
    {finished ? 'سفر به اتمام رسید' : 'درحال برگزاری'}
  </span>
);

const TourDetails = ({ title, fleetVehicle, origin, destination, startDate, endDate, price }) => (
  <>
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='flex items-center gap-2 flex-1'>
        <span><AirplaneIcon /></span>
        <span>{title}</span>
      </div>
      <div className='flex items-center gap-2 flex-1'>
        <span><AirplaneIcon /></span>
        <span>سفر با {getVehicleNameInPersian(fleetVehicle)}</span>
      </div>
    </div>
    <div className='flex flex-col md:flex-row gap-4 mt-2'>
      <div className='flex items-center gap-2 flex-1'>
        <span><strong>{getOriginNameInPersian(origin.name)} به {getOriginNameInPersian(destination.name)}</strong></span>
        <span className='text-gray-400'>{convertToPersianDate(startDate)}</span>
      </div>
      <div className='flex items-center gap-2 flex-1'>
        <span><strong>تاریخ برگشت</strong></span>
        <span className='text-gray-400'>{convertToPersianDate(endDate)}</span>
      </div>
    </div>
    <div className='flex border-t pt-4 mt-4'>
      <div className='flex items-center gap-2 flex-1'>
        <span className='text-lg text-gray-400'>شماره تور</span>
        <span>1024589</span>
      </div>
      <div className='flex items-center gap-2 flex-1'>
        <span className='text-lg text-gray-400'>مبلغ قابل پرداخت</span>
        <span>{price} تومان</span>
      </div>
    </div>
  </>
);

function UserToursPage() {
  const { data, isPending } = useGetUserAllTours();

  if (isPending) return <p>Loading</p>;

  return (
    <div className='flex flex-col gap-5 border rounded-xl p-4 border-borderColor'>
      {data?.data?.map((tour) => {
        const { id, title, fleetVehicle, origin, destination, startDate, endDate, price } = tour;
        const finished = isTourFinished(endDate);

        return (
          <div key={id} className='border rounded-xl relative border-borderColor p-4'>
            <div className='text-left mb-2'>
              <TourStatusBadge finished={finished} />
            </div>
            <TourDetails 
              title={title}
              fleetVehicle={fleetVehicle}
              origin={origin}
              destination={destination}
              startDate={startDate}
              endDate={endDate}
              price={price}
            />
          </div>
        );
      })}
    </div>
  );
}

export default UserToursPage;