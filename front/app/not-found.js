"use client"
import Button from '@/components/ui/atoms/Button'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';


function NotFoundPage() {
      const router = useRouter();
      // Action - back button
      const handleBackToHome = () => {
            router.push('/');
      }
      return (
            <div className='px-[3rem] flex flex-col items-center justify-center h-screen text-center  md:justify-between md:px-[10rem] md:flex-row-reverse '>
                  <Image src="/images/404NotFound.svg" width={322} height={322} className='w-[322px] h-[322px] md:w-[555px] md:h-[555px] ' />
                  <div>
                        <p className=' pb-[1.5rem] text-[2.4rem] font-semibold'>صفحه مورد نظر یافت نشد.</p>
                        <Button label="بازگشت" status="accent" onClick={handleBackToHome} />

                  </div>
            </div>
      )
}

export default NotFoundPage