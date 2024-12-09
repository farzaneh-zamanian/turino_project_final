"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, PhoneIcon } from '@heroicons/react/24/outline';

const links = [
      { name: 'صفحه اصلی', href: '/', icon: HomeIcon },
      { name: 'خدمات گردشگری', href: '/tour-services', icon: DocumentDuplicateIcon },
      { name: 'درباره ما', href: '/about-us', icon: UserGroupIcon },
      { name: 'تماس با ما', href: '/contact-us', icon: PhoneIcon },
];

const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const pathname = usePathname();
      //! there is problem in scroll the page in desktop
      useEffect(() => {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
      }, [isMenuOpen]);

      // useEffect(() => {
      //       // Check if the screen width is less than 768 pixels (mobile)
      //       if (window.innerWidth < 500) {
      //             document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
      //       }
      // }, [isMenuOpen]);

      return (
            <>
                  <MobileHeader links={links} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pathname={pathname} />
                  <DesktopHeader links={links} pathname={pathname} />
            </>
      );
};

export default Header;