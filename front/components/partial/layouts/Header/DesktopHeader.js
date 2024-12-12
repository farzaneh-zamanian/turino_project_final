import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import AuthForm from '@/components/templates/authForm';
import HeaderUserProfileItems from '@/components/ui/organisms/HeaderUserProfileItems';
import { headerUserProfileItems } from '@/core/utils/hepler';


const DesktopHeader = ({ links, isAuthenticated, mobileNumber, isVisibleProfile, setIsVisibleUserProfile }) => {
  const pathname = usePathname();

  const handleClick = () => {
    setIsVisibleUserProfile((isVisibleProfile) => !isVisibleProfile); // Toggle visibility
  }
  return (
    <header className="px-[10rem] py-[2rem] hidden md:flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <Image src="/images/TorinoLogoPic.png" alt="Logo" width={146} height={44} />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className='flex flex-row gap-10'>
          {links.map(({ name, href, icon: LinkIcon }) => (
            <li key={name} className='hover:text-primary transition-default'>
              <Link
                href={href}
                className={clsx(
                  'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 hover:text-primary',
                  { 'text-primary': pathname === href }
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Registration */}
      {isAuthenticated ?

        (
          <div className='relative w-[18rem] h-[4.4rem] flex flex-col items-center ' >

            {/* If user is logged in*/}
            <div onClick={handleClick} className=' cursor-pointer text-primary flex justify-center items-center gap-1'>
              <img src="/icons/user.svg" className='w-[1.4rem] md:w-[2.4rem]' />
              <span className='text-[1.2rem]  md:text-[1.8rem]'>{mobileNumber}</span>
              <img src="/icons/arrow-down.svg" className='w-[1.4rem] md:w-[2.4rem]' />
            </div>

            {/* User profile info */}
            {isVisibleProfile && (
              <HeaderUserProfileItems items={headerUserProfileItems}
                className='bg-white absolute w-[24.6rem] top-[6rem] 
                h-[13.22rem] rounded-[1.1rem] overflow-hidden' onClick={() => setIsVisibleUserProfile(false)} >
                <div className=' pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.4rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1  '>
                  <div className=' p-[0.5rem] rounded-full bg-IconBgColor '>
                    <Image src="/icons/userProfile.svg" width={16} height={16} />
                  </div>
                  <span className='text-[1.6rem] font-medium'>{mobileNumber}</span>
                </div>
              </HeaderUserProfileItems>)}

          </div>
        )
        : (
          // if user is not logged in
          <AuthForm />

        )}


    </header>
  );
};

export default DesktopHeader;