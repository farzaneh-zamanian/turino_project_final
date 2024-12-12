"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, PhoneIcon } from '@heroicons/react/24/outline';

import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import { getCookie } from '@/core/utils/cookie';
import { useGetUserProfile } from '@/core/services/queries';

const links = [
      { name: 'صفحه اصلی', href: '/', icon: HomeIcon },
      { name: 'خدمات گردشگری', href: '/tour-services', icon: DocumentDuplicateIcon },
      { name: 'درباره ما', href: '/about-us', icon: UserGroupIcon },
      { name: 'تماس با ما', href: '/contact-us', icon: PhoneIcon },
];

const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const pathname = usePathname();
      const accessToken = getCookie('accessToken'); // Check for access token
      const [isVisibleProfile, setIsVisibleUserProfile] = useState(false);

      const { data: userProfile, isError, isLoading } = accessToken ? useGetUserProfile() : { data: null, isError: false, isLoading: false };

      const isAuthenticated = Boolean(userProfile); // Determine authentication based on userProfile
      const mobileNumber = userProfile?.mobile;
      //! there is problem in scroll the page in desktop
      useEffect(() => {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
      }, [isMenuOpen]);


      if (isLoading) return <p>Loading...</p>; // Optional loading state
      if (isError) return <p>Error fetching user</p>




      return (
            <>
                  <MobileHeader links={links}
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        pathname={pathname}
                        isAuthenticated={isAuthenticated}
                        mobileNumber={mobileNumber}
                        isVisibleProfile={isVisibleProfile}
                        setIsVisibleUserProfile={setIsVisibleUserProfile}
                  />
                  <DesktopHeader
                        links={links}
                        pathname={pathname}
                        isAuthenticated={isAuthenticated}
                        mobileNumber={mobileNumber}
                        isVisibleProfile={isVisibleProfile}
                        setIsVisibleUserProfile={setIsVisibleUserProfile}
                  />
            </>
      );
};

export default Header;