import React from 'react'

function IconDescriptionItem() {
      return (
            <Link href={href}>
                  <figure className='pr-[1.5rem] hover:bg-hoverBgColor  transition-default flex gap-2 items-center  h-[4.6rem] border border-solid border-[#0000001F] border-t-0 border-x-0 border-1'>
                        <Image src="/icons/profile.svg" width={16} height={16} />
                        <figcaption className='text-[1.4rem]'>اطلاعات حساب کاربری</figcaption>
                  </figure>
                  <p>{label}</p>
            </Link>)
}

export default IconDescriptionItem