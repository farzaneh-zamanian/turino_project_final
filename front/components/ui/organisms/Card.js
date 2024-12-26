import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Button from '../atoms/Button';
import ReservationCard from '../molecules/ReservationCard';

function Card({ tour }) {
      const { id, title, price, image, options } = tour

      return (
            <>
                  <section class=" w-full relative bg-white">
                        <img src={image} className=" w-full object-cover group-hover:opacity-75 md:aspect-square lg:aspect-auto lg:h-80 transition-default" />
                        <div className=" flex flex-col justify-between border border-borderColor border-t-0 rounded-b-3xl">
                              <div className='pr-4 pb-[0.5rem]'>
                                    <h3 className="text-[1.5rem] font-semibold text-gray-700">
                                          <Link href={`/tour/${id}`} >
                                                {/* it will cover the entire area of the title, making it easier for users to click on the title */}
                                                <span aria-hidden="true" className="absolute inset-0">
                                                </span>
                                                <span className='text-[2.2rem]  font-normal'>{title}</span>
                                          </Link>
                                    </h3>
                                    {/* show options seperately */}
                                    <div className="flex text-[1.5rem] text-gray-500">
                                          {options.map((option, index) => (
                                                <span key={index}>
                                                      {option}
                                                      {index < options.length - 1 && <span className='px-[0.5rem]'>-</span>}
                                                </span>
                                          ))}
                                    </div>
                              </div>
                              <div className='flex items-center justify-between  border-t-2 py-[0.5rem] px-[1rem]'>
                                    <Button label="رزرو" status="reservation" />
                                    <p className="text-[1.3rem] font-medium text-gray-900 text-[#282828CC] flex items-center gap-2">
                                          <span className='text-priceColor text-[1.6rem]'>
                                                {price}
                                          </span>
                                          <span className='text-[1.2rem] '>تومان</span>
                                    </p>
                              </div>
                        </div>
                  </section>
            </>


      );

}

export default Card