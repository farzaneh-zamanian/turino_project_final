import React from 'react'
import clsx from 'clsx';


function Button({ label, status, onClick }) {
  return (
    <button onClick={onClick} className={clsx(
      " flex items-center justify-center font-normal transition-default hover:opacity-75",
      {
        'w-[20rem] rounded-2xl text-[1.5rem]  text-white h-[4.7rem]  bg-primary': status === 'search',
        'h-[2.9rem] w-[9.9rem] rounded-[0.4rem] text-white  bg-primary text-[1.5rem]': status === 'reservation',
        'w-full p-[0.8rem] rounded-[0.6rem] text-[1.4rem] text-white  bg-primary ': status === 'submit',
        'w-[232px] h-[58px] rounded-[1.6rem] text-[2rem]  bg-accentButtonColor text-primary  ': status === 'accent',
        ' md:w-[15rem] h-[40px] rounded-md text-[1.6rem]  bg-primary text-white  ': status === 'profileBtn',
        'md:w-[15rem] h-[40px] rounded-md text-[1.6rem]  bg-white border-2 border-primary text-primary  ': status === 'cancelBtn',
      }
    )}>{label}</button>
  )
}

export default Button