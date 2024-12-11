import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import AuthForm from '@/components/templates/authForm';

const DesktopHeader = ({ links }) => {
  const pathname = usePathname();

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

      {/* Registration Section */}
      {/* <div className="md:flex border border-solid border-primary px-5 rounded-xl">
        <Link href="/" className='text-primary flex'>
          <img src="/icons/user.svg" className='w-[24px]' />
          <span>ورود</span>
        </Link>
        <span className='px-2 text-primary'>|</span>
        <Link href="/" className='text-primary'>ثبت نام</Link>
      </div> */}
      <AuthForm/>

    </header>
  );
};

export default DesktopHeader;