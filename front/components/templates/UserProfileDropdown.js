import ArrowDown from '@/public/icons/icons/ArrowDown'
import LogOut from '@/public/icons/icons/LogOut'
import UserLogin from '@/public/icons/icons/UserLogin'
import UserProfile from '@/public/icons/icons/UserProfile'
import UserProfilePage from '@/public/icons/icons/UserProfilePage'
import Link from 'next/link'
import React from 'react'

function UserProfileDropdown ({ mobileNumber, isVisibleProfile, toggleUserProfileVisibility, logOutHandler }) {
  return (
      <div className='relative border border-primary rounded-lg w-[18rem] h-[4.4rem] flex flex-col items-center'>
      <div onClick={toggleUserProfileVisibility} className='cursor-pointer text-primary flex justify-center items-center gap-1'>
        <UserLogin />
        <span className='text-[1.2rem] md:text-[1.8rem]'>{mobileNumber}</span>
        <ArrowDown />
      </div>
      {isVisibleProfile && (
        <div className='bg-white absolute md:w-[24.6rem] md:top-[6rem] w-[17.5rem] top-[4rem] h-[13.22rem] rounded-[1.1rem] overflow-hidden'>
          <div className='pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.4rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1'>
            <div className='p-[0.5rem] rounded-full bg-IconBgColor'>
              <UserProfile />
            </div>
            <span className='md:text-[1.6rem]  text-[1.4rem] font-medium'>{mobileNumber}</span>
          </div>
          <Link href="/userProfile/profile" className='pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.6rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1'>
            <UserProfilePage />
            <span className='md:text-[1.6rem] text-[1.4rem] font-medium'> اطلاعات حساب کاربری</span>
          </Link>
  
          <Link href="/" onClick={logOutHandler} className='pr-[1.5rem] hover:bg-hoverBgColor transition-default flex gap-2 items-center h-[4.6rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1'>
            <LogOut />
            <span className=' md:text-[1.6rem] text-[1.4rem] font-medium'> خروج از حساب کاربری</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserProfileDropdown