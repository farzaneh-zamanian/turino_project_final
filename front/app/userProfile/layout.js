"use client"

import clsx from 'clsx';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const links = [
      { name: 'پروفایل ', href: '/userProfile/profile', icon: '/icons/user.svg' },
      { name: 'تورهای من ', href: '/userProfile/tours', icon: '/icons/tours.svg' },
      { name: 'تراکنش ها ', href: '/userProfile/transaction', icon: '/icons/transactions.svg' },
];


function UserProfileLayout({ children }) {
      const pathname = usePathname();

      return (
            <div className='md:flex md:flex-row md:mt-[2rem] md:gap-5'>

                  {/* Navigation links */}
                  <nav className='w-[28.4rem] h-[17rem] '>
                        <ul className=' flex flex-row  justify-between border-b md:flex-col md:border md:border-1 md:border-borderDivColor md:rounded-2xl  '>
                              {links.map(({ name, href, icon }) => (
                                    <li key={name} className=' hover:text-primary hover:border-b border-primary transition-default md:hover:bg-accentButtonColor  md:border-b md:border-borderDivColor'>
                                          <Link
                                                href={href}
                                                className={clsx(
                                                      'flex h-[48px] items-center justify-center gap-2  p-3 hover:text-primary  pr-[1rem] md:p-0 ',
                                                      { 'text-primary border-b border-primary md:border-none': pathname === href }
                                                )}
                                          >
                                                <Image src={icon} className="w-6 " width={16} height={16} />
                                                <p className="text-[1.2rem]">{name}</p>
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                  </nav>
                  {/* Contents */}
                  <div className='md:w-full'> {children}</div>
            </div>



      )
}

export default UserProfileLayout