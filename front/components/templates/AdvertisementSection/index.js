import CallIcon from '@/public/icons/icons/CallIcon'
import Link from 'next/link'

function AdvertisementSection() {
  return (
      <section className='w-[32.7rem] md:w-full my-[5rem]' >
      <div className='flex flex-col  md:flex-row   '>
        <div className='h-[12.8rem] md:h-[24rem] relative md:flex-auto bg-primary flex   justify-between rounded-t-2xl md:border-r-0 md:rounded-none md:rounded-tr-2xl md:rounded-br-2xl'>
          <div className='flex flex-col items-start gap-4 pr-[1.5rem] pt-[2rem]'>
            <h3 className='text-[2.2rem] md:text-[4.8rem] leading-[3.4rem] md:leading-[7.44rem] font-extrabold text-white'>خرید تلفیقی از <span className='text-secondary'>تورینو</span></h3>
            <h4 className='text-[1.4rem] md:text-[3.2rem] text-white  leading-[2.17rem] md:leading-[4.96rem]'>به هرجا که میخواهید!</h4>
          </div>
          <img src="/images/onlinePurchaseDesktop.png" className='hidden md:flex bottom-0 left-0 absolute ' />
          <img src="/images/onlinePurchasePic.png" className='md:hidden bottom-0 left-0 absolute ' />

        </div>
        <div className='md:flex-col md:justify-center md:flex-auto md:w-16 border rounded-b-2xl md:border-r-0 md:rounded-none md:rounded-tl-2xl md:rounded-bl-2xl flex items-center justify-evenly p-[1rem]'>
          <p className='flex items-center gap-4'>
            <span className='text-secondary text-[2rem] md:text-[2.8rem] font-bold'>021-1840</span>
            <span ><CallIcon/></span>
          </p>
          <Link href="/" className='bg-secondary text-center w-[13.6rem] md:w-[17.5rem] md:h-[4.1rem] h-[3.8rem] rounded-[0.9rem]  '>
            <span className='text-white  text-[1.4rem] md:text-[1.6rem] '>اطلاعات بیشتر</span>
             </Link>
        </div>
      </div>

    </section>
  )
}

export default AdvertisementSection