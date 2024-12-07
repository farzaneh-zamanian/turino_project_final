import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Satisfaction component
const SatisfactionItem = ({ imageSrc, title, description }) => (
  <div className='flex items-center gap-8 w-full  bg-[#FCF5E9] p-4'>
    <Image src={imageSrc} width={60} height={60} alt={title} />
    <div className='text-right'>
      <h4 className='text-2xl'>{title}</h4>
      <p className='text-lg'>{description}</p>
    </div>
  </div>
);

// Footer links component
const FooterLink = ({ href, children }) => (
  <li className='hover:text-primary transition duration-300 ease-in-out'>
    <Link href={href} className='text-xl'>{children}</Link>
  </li>
);

const footerLinks = [
  { title: "درباره ما", href: "/" },
  { title: "تماس با ما", href: "/" },
  { title: "چرا تورینو", href: "/" },
  { title: "بیمه مسافرتی", href: "/" },
];

const customerServiceLinks = [
  { title: "پشتیبانی آنلاین", href: "/" },
  { title: "راهنمای خرید", href: "/" },
  { title: "راهنمای استرداد", href: "/" },
  { title: "پرسش و پاسخ", href: "/" },
];

function Footer() {
  return (
    <footer className='px-12 md:px-40 mx-auto'>
      {/* Customer Satisfaction Section */}
      <section>
        <div className='flex flex-col items-center gap-6 py-10 border border-slate-200 md:flex-row '>
          <SatisfactionItem
            imageSrc="/images/icons/satisfact.svg"
            title="بصرفه ترین قیمت"
            description="بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید."
          
          />
          <SatisfactionItem
            imageSrc="/images/icons/support.svg"
            title="پشتیبانی"
            description="پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما."
          />
          <SatisfactionItem
            imageSrc="/images/icons/satisfact.svg"
            title="رضایت کاربران"
            description="رضایت بیش از 10هزار کاربر از تور های ما."
          />
        </div>
      </section>

      {/* Footer Menu */}
      <section>
        <div className='py-10 md:flex justify-between'>
          <div className='flex items-center justify-between pb-10 md:gap-20'>
            <div>
              <h2>تورینو</h2>
              <nav>
                <ul className='flex flex-col'>
                  {footerLinks.map(({ title, href }) => (
                    <FooterLink key={title} href={href}>{title}</FooterLink>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <h2>خدمات مشتریان</h2>
              <nav>
                <ul className='flex flex-col'>
                  {customerServiceLinks.map(({ title, href }) => (
                    <FooterLink key={title} href={href}>{title}</FooterLink>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className='flex flex-row items-center justify-between md:flex-col'>
            <div>
              <Image src="/images/TorinoLogoPic.png" width={100} height={30} alt="Torino Logo" />
              <span className='text-lg md:py-10'>تلفن پشتیبانی: 7854-021</span>
            </div>

            <div className='flex gap-4 md:grid md:grid-cols-3 md:gap-10'>
              <Image src="/images/icons/aira.svg" width={35} height={38} alt="Aira" />
              <Image src="/images/icons/ecunion.svg" width={35} height={38} alt="EC Union" />
              <Image src="/images/icons/passenger-rights.svg" width={35} height={38} alt="Passenger Rights" />
              <Image src="/images/icons/samandehi.svg" width={35} height={38} alt="Samandehi" />
              <Image src="/images/icons/state-airline.svg" width={35} height={38} alt="State Airline" />
            </div>
          </div>
        </div>
      </section>

      <section className='border border-slate-200 text-titleColor'>
        <p className='text-center text-xl'>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </section>
    </footer>
  );
}

export default Footer;