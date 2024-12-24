
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
      { name: 'پروفایل ', href: '/userProfile/profile', icon: <UserProfile /> },
      { name: 'تورهای من ', href: '/userProfile/tours', icon: <TourIcon /> },
      { name: 'تراکنش ها ', href: '/userProfile/transaction', icon: <TransactionIcon /> },
];


function UserProfileLayout({ children }) {
      const pathname = usePathname();


      return (
            <AuthProvider>
                  <div className=' md:mt-[2rem] md:gap-5 md:p-10 md:grid md:grid-cols-4 '>

                        {/* Navigation links */}
                        <nav className='w-[28.4rem] h-[17rem] md:col-span-1 md:border md:border-1 md:border-borderDivColor md:rounded-2xl ' >
                              <ul className=' flex flex-row divide-y-2  md:flex-col '>
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
                        </nav>
                        {/* Contents */}
                        <div className='md:w-full col-span-3 md:flex md:flex-col gap-[2rem]'>{children}</div>
                  </div>
            </AuthProvider>




      )
}

export default UserProfileLayout