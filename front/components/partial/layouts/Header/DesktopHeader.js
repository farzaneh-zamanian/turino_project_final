"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

import AuthForm from '@/components/templates/authForm';
import UserProfileDropdown from '@/components/templates/UserProfileDropdown';





const DesktopHeader = ({ links, mobileNumber, isVisibleProfile, setIsVisibleUserProfile }) => {
  const pathname = usePathname();
  const router = useRouter()

  // toggle drop down menu
  const toggleUserProfileVisibility = () => {
    setIsVisibleUserProfile((isVisibleProfile) => !isVisibleProfile); // Toggle visibility
  }
  const logOutHandler = () => {
    console.log("logout")
    // Clear tokens and redirect to home
    // localStorage.removeItem('accessToken');
    // localStorage.removeItem('refreshToken');
    router.push("/")
  }

  return (
    <header className=" px-[10rem] py-[2rem] hidden md:flex items-center justify-between">
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
      {mobileNumber ? (
        <UserProfileDropdown
          mobileNumber={mobileNumber}
          isVisibleProfile={isVisibleProfile}
          toggleUserProfileVisibility={toggleUserProfileVisibility}
          logOutHandler={logOutHandler}
        />
      ) : (
        <AuthForm />
      )}




    </header>
  );
};

export default DesktopHeader;