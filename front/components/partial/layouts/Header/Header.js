"use client"

import React, { useEffect, useState } from 'react';

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, PhoneIcon } from '@heroicons/react/24/outline';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import { useGetUserData } from '@/core/services/queries';
import { clearAccessToken } from '@/core/utils/cookie';

const links = [
      { name: 'صفحه اصلی', href: '/', icon: HomeIcon },
      { name: 'خدمات گردشگری', href: '/tour-services', icon: DocumentDuplicateIcon },
      { name: 'درباره ما', href: '/about-us', icon: UserGroupIcon },
      { name: 'تماس با ما', href: '/contact-us', icon: PhoneIcon },
];

const Header = () => {
      let mobileNumber = false;

      const [isMenuOpen, setIsMenuOpen] = useState(false);//dropDown state
      const [isVisibleProfile, setIsVisibleUserProfile] = useState(false);

      const { data } = useGetUserData()
      mobileNumber = data?.mobile;


      const logOutHandler = () => {
            console.log("logout")
            clearAccessToken()
            router.push("/")
      }


      useEffect(() => {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
            return () => {
                  document.body.style.overflow = 'unset';
            };
      }, [isMenuOpen]);



      return (
            <>
                  <MobileHeader links={links}
                        isMenuOpen={isMenuOpen}
                        onClick={logOutHandler}
                        setIsMenuOpen={setIsMenuOpen}
                        mobileNumber={mobileNumber}
                        isVisibleProfile={isVisibleProfile}
                        setIsVisibleUserProfile={setIsVisibleUserProfile}
                  />
                  <DesktopHeader
                        links={links}
                        mobileNumber={mobileNumber}
                        isVisibleProfile={isVisibleProfile}
                        setIsVisibleUserProfile={setIsVisibleUserProfile}
                        onClick={logOutHandler}
                  />
            </>
      );
};

export default Header;