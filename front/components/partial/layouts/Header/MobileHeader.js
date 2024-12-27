"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import AuthForm from '@/components/templates/authForm';
import HamburgerMenu from '@/public/icons/icons/HamburgerMenu';
import UserProfileDropdown from '@/components/templates/UserProfileDropdown';





const MobileHeader = ({ links,onClick, isMenuOpen, setIsMenuOpen, mobileNumber,
  setIsVisibleUserProfile, isVisibleProfile }) => {

  const pathname = usePathname();


  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const toggleUserProfileVisibility = () => {
    setIsVisibleUserProfile((isVisibleProfile) => !isVisibleProfile); // Toggle visibility
  }



  return (
    <>
      {/* Mobile Header */}
      <header className="block md:hidden px-[3rem] py-[1.5rem]">
        <div className='flex items-center justify-between'>
          <button onClick={toggleMenu}>
            <HamburgerMenu />
          </button>
          {mobileNumber ?
            (
              <UserProfileDropdown
                mobileNumber={mobileNumber}
                isVisibleProfile={isVisibleProfile}
                toggleUserProfileVisibility={toggleUserProfileVisibility}
                logOutHandler={onClick}
              />
            )
            : (
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
                      <p className='text-[1.6rem] font-normal'>{name}</p>
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