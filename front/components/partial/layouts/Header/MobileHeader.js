"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import AuthForm from '@/components/templates/authForm';
import HeaderUserProfileItems from '@/components/ui/organisms/HeaderUserProfileItems';
import { headerUserProfileItems } from '@/core/utils/hepler';


const MobileHeader = ({ links, isMenuOpen, setIsMenuOpen, isAuthenticated, mobileNumber,
  setIsVisibleUserProfile, isVisibleProfile }) => {
  const pathname = usePathname();//hook for get path

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const handleClick = () => {
    setIsVisibleUserProfile((isVisibleProfile) => !isVisibleProfile); // Toggle visibility
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="block md:hidden px-[3rem] py-[1.5rem]">
        <div className='flex items-center justify-between'>
          <Image src="/images/icons/hamburgerMenu.png" width={25} height={20} onClick={toggleMenu} className="cursor-pointer" />
          {/* <Image src="/images/icons/signInBtn.png" width={30} height={25} className='rounded-2.5' /> */}
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
                    className='bg-white absolute w-[15.7rem] md:w-[24.6rem] top-[4rem]  md:top-[6rem]  
        h-[13.22rem] rounded-[1.1rem] overflow-hidden' >
                    <li className=' pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.4rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1  '>
                      <div className=' p-[0.5rem] rounded-full bg-IconBgColor '>
                        <img src="/icons/userProfile.svg" className="w-[1.6rem] h-[1.6rem]" />
                      </div>
                      <p className='text-[1.4rem] font-medium'>{mobileNumber}</p>
                    </li>
                  </HeaderUserProfileItems>)}

              </div>
            )
            : (
              // if user is not logged in
              <AuthForm />

            )}

        </div>
      </header>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <>
          <div className='z-49 fixed top-0 right-0 w-full bg-[#363636] opacity-25 h-screen md:hidden' />
          <div className='z-50 fixed top-0 right-0 w-[20rem] h-screen pt-[2rem] pr-[1rem] bg-[#FFFFFF] md:hidden'>
            <nav>
              <ul className='flex flex-col items-start'>
                {links.map(({ name, href, icon: LinkIcon }) => (
                  <li key={name} className='hover:text-primary transition-default'>
                    <Link
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className={clsx(
                        'flex h-[48px] items-center justify-center gap-2 rounded-md p-3 hover:text-primary',
                        { 'text-primary': pathname === href }
                      )}
                    >
                      <LinkIcon className="w-6" />
                      <p className='text-[1.6rem]'>{name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MobileHeader;