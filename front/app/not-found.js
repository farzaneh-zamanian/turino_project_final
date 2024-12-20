import Image from 'next/image'
import React from 'react'
import Link from 'next/link';


function NotFoundPage() {

      return (
            <div className='px-[3rem] flex flex-col items-center justify-center h-screen text-center  md:justify-between md:px-[10rem] md:flex-row-reverse '>
                  <Image src="/images/404NotFound.svg" width={322} height={322} className='md:w-[555px] md:h-[555px] ' />
                  <div>
                        <p className=' pb-[1.5rem] text-[2.4rem] font-semibold'>صفحه مورد نظر یافت نشد.</p>
                        <Link href="/" label="بازگشت" className='rounded-xl px-[2rem] py-[1rem] text-white bg-primary' >بازگشت</Link >
                  </div>
            </div>
      )
}

export default NotFoundPage


