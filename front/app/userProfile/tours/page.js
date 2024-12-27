"use client"
import { useGetUserAllTours } from '@/core/services/queries';
import React from 'react'
import moment from 'moment-jalaali';
import { convertToPersianDate } from '@/core/utils/hepler';




function UserToursPage() {
  const { data, isPending } = useGetUserAllTours();
  // const { tourData } = data;
  // const { destination, origin, price, datartDate, endDate } = tourData;
  // console.log(data)

  const dateString = "2024-12-27T07:06:11.379Z";
  const persianDate = convertToPersianDate(dateString);
  console.log(persianDate); // 

  if (isPending) return <p>Loading</p>;

  return (
    <div>
      <div className='border rounded-xl'>
        <div>
          <div>

          </div>
          <div></div>
        </div>

      </div>
      {data?.data?.map((tour) => (
        <p key={tour.id}>{tour.title}</p>
      ))}
    </div>
  );
}

export default UserToursPage