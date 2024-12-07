import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Button from '../atoms/Button';

function Card({ tour }) {
      const { id, origin: { originId, name }, destination: { id: destId, name: destName }, startDate, endDate,
            title, fleetVehicle, price, availableSeats, insuranc, options, image } = tour
      // <Button label="جستجو" status="search" />
      // <Button label="رزرو" status="reservation" />
      // <Button label="ارسال کد تایید" status="submit" />
      // <button className="text-primary h-[4.1rem] border-solid px-8 rounded-[0.5rem]   ">انصراف</button>

      return (
            <>
                  <div class="group ml-[2rem] relative bg-white">
                        <img src={image} alt="Tour" className=" w-full rounded-md  object-cover group-hover:opacity-75 md:aspect-square lg:aspect-auto lg:h-80 transition-default" />
                        <div className="mt-4 flex flex-col justify-between">
                              <div className='border border-solid pb-[1rem] border-x-0 border-t-0 border-primary'>
                                    <h3 className="text-[1.5rem] font-semibold text-gray-700">
                                          <Link href={`tour/${id}`}>
                                                <span aria-hidden="true" class="absolute inset-0"></span>
                                                {title}
                                          </Link>
                                    </h3>
                                    <p className="mt-1 text-[1.2rem] text-gray-500">{destName}</p>
                              </div>
                              <div className='flex justify-between pt-[1rem] '>
                                    <p className="text-[1.3rem] font-medium text-gray-900">{price}تومان</p>
                                     <Button label="رزرو" status="reservation" />
                                     {/* <Button label="رزرو" type="reservation" onClick={handleReservation}/> */}

                              </div>
                        </div>
                  </div>
            </>

            // <div className="flex flex-cols  rounded-sm bg-blue-300 ">
            //       <img
            //             src={image}
            //             alt={title}
            //             className=" w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto md:aspect-square lg:h-80"
            //       />
            //       <div className='flex flex-cols '>
            //             <h3>{title}</h3>
            //             <p>options</p>

            //       </div>
            //       <div>
            //             <Button label="رزرو" type="reservation" />
            //             <span>{price}تومان</span>


            //       </div>
            // </div>




            // <div className="mt-4 flex justify-between">
            //       <div>
            //             <h3 className="text-sm text-gray-700">
            //                   <Link href={`/tours/${id}`}>
            //                         <span aria-hidden="true" className="absolute inset-0"></span>
            //                         {title}
            //                   </Link>
            //             </h3>
            //             <p className="mt-1 text-sm text-gray-500">{tour.color}</p>
            //       </div>
            //       <p className="text-sm font-medium text-gray-900">${price}</p>
            // </div> 
      );

}

export default Card