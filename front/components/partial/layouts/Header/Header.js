"use client"

import React, { useEffect, useState } from 'react';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, PhoneIcon } from '@heroicons/react/24/outline';

import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import { useGetUserData } from '@/core/services/queries';
import toast from 'react-hot-toast';

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

      const { data, isError, error, isLoading } = useGetUserData()
      mobileNumber = data?.mobile;

      // //! there is problem in scroll the page in desktop

      useEffect(() => {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
            return () => {
                  document.body.style.overflow = 'unset';
            };
      }, [isMenuOpen]);


      if (isLoading) return <p>Loading...</p>; // Optional loading state
      if (isError) {
            // toast.error(error.message);
            return <p>Something went wrong. Please try again later.</p>; // Fallback UI for errors
      }

      return (
            <>
                  <MobileHeader links={links}
                        isMenuOpen={isMenuOpen}
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
                  />
            </>
      );
};

export default Header;