import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Button from '../atoms/Button';
import ReservationCard from '../molecules/ReservationCard';

function Card({ tour }) {
      const { id, origin: { originId, name }, destination: { id: destId, name: destName }, startDate, endDate,
            title, fleetVehicle, price, availableSeats, insuranc, options, image } = tour

      return (
            <>
                  <div class="ml-[2rem] relative bg-white border border-solid rounded-md  border-borderColor p-[1rem]">
                        <img src={image} alt="Tour" className=" w-full rounded-md  object-cover group-hover:opacity-75 md:aspect-square lg:aspect-auto lg:h-80 transition-default" />
                        <div className="mt-4 flex flex-col justify-between">
                              <div className='border border-solid pb-[1rem] border-x-0 border-t-0 border-borderColor'>
                                    <h3 className="text-[1.5rem] font-semibold text-gray-700">
                                          {/* <Link href={`tour/${id}`} > */}
                                          <Link href={`/tour/${id}`} >
                                                {/* it will cover the entire area of the title, making it easier for users to click on the title */}
                                                <span aria-hidden="true" className="absolute inset-0">

                                                </span>
                                                {title}

                                          </Link>
                                    </h3>
                                    <p className="mt-1 text-[1.2rem] text-gray-500">{destName}</p>
                              </div>
                              <ReservationCard label="رزرو" status="reservation" price={price} classNames="text-[1.3rem] font-medium text-gray-900" />
                              {/* <div className='flex justify-between pt-[1rem] '>
                                    <Button label="رزرو" status="reservation" />
                                    <p className="text-[1.3rem] font-medium text-gray-900">{price} تومان</p>

                              </div> */}
                        </div>
                  </div>
            </>


      );

}

export default Card