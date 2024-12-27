
"use client"

import clsx from 'clsx';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

import UserProfile from '@/public/icons/icons/UserProfile';
import TourIcon from '@/public/icons/icons/TourIcon';
import TransactionIcon from '@/public/icons/icons/TransactionIcon';
import AuthProvider from '@/components/partial/providers/AuthProvider';


const links = [
      { name: 'پروفایل ', href: '/userProfile', icon: <UserProfile /> },
      { name: 'تورهای من ', href: '/userProfile/tours', icon: <TourIcon /> },
      { name: 'تراکنش ها ', href: '/userProfile/transaction', icon: <TransactionIcon /> },
];


function UserProfileLayout({ children }) {
      const pathname = usePathname();


      return (
            <AuthProvider>

                  <div className="container mx-auto py-12">
                        <div className="grid  grid-cols-1 gap-8 md:grid-cols-4" >
                              <div className='md:col-span-1  h-fit md:border md:border-borderDivColor  md:rounded-xl '>
                              <ul className=' flex flex-row  justify-evenly md:divide-y-2  md:flex-col  md:rounded-xl'>
                                    {links.map(({ name, href, icon }) => (
                                          <li key={name} className=' hover:text-primary  transition-default md:hover:bg-accentButtonColor '>
                                                <Link
                                                      href={href}
                                                      className={clsx(
                                                            'flex h-[48px] items-center justify-center gap-2  p-3 hover:text-primary  pr-[1rem] md:p-0 ',
                                                            { 'text-primary border-b border-primary md:border-none': pathname === href }
                                                      )}
                                                >
                                                      <span>{icon}</span>

                                                      <p className="text-[1.2rem] pr-[0.5rem]">{name}</p>
                                                </Link>
                                          </li>
                                    ))}
                              </ul>
                              </div>
                              <div className=' col-span-1  md:col-span-3 md:flex md:flex-col gap-[2rem]'>{children}</div>
                        </div>

                  </div>

            </AuthProvider>




      )
}

export default UserProfileLayout