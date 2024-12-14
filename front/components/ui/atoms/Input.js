import clsx from 'clsx'
import React from 'react'

function Input({ placeholder, title, type }) {
  return (
    <input type={type} placeholder={placeholder} className={clsx(
      " flex items-center justify-center font-normal transition-default hover:opacity-75",
      {
        "placeholder:text-[1.2rem] md:placeholder:text-[1.4rem] rounded-[0.5rem] border border-1 p-[0.8rem] w-full flex-2 h-[4rem] md:w-[25.5rem] md:h-[4.5rem]": title === 'profileInput',
        'w-[full] h-[4rem] placeholder:text-[1.4rem] border border-1 p-[0.8rem] rounded-[0.5rem] ': title === 'profilInputFull',
        'h-[2.9rem] w-[9.9rem] rounded-[0.4rem] text-white  bg-primary text-[1.5rem]': title === 'profileInputNumber',

      }
    )} />
    // <input type={type} placeholder={placeholder} className=' trext-[1.4rem] md:text-[1.6rem] border border-solid border-1 border-borderColor p-[0.8rem] rounded-[0.5rem]' />
  )
}




export default Input