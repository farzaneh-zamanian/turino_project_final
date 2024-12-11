import React from 'react'
import clsx from 'clsx';



// <Button label="جستجو" status="search" />
// <Button label="رزرو" status="reservation" />
// <Button label="ارسال کد تایید" status="submit" />
// <button className="text-primary h-[4.1rem] border-solid px-8 rounded-[0.5rem]   ">انصراف</button>


function Button({ label, status, onClick }) {
  return (
    <button onClick={onClick} className={clsx(
      " flex items-center justify-center font-normal transition-default hover:opacity-75",
      {
        'w-full rounded-[1.6rem] text-[1.5rem]  text-white  bg-primary': status === 'search',
        'h-[2.9rem] w-[9.9rem] rounded-[0.4rem] text-white  bg-primary text-[1.5rem]': status === 'reservation',
        'w-full p-[0.8rem] rounded-[0.6rem] text-[1.4rem] text-white  bg-primary ': status === 'submit',
        'w-[232px] h-[58px] rounded-[1.6rem] text-[2rem]  bg-accentButtonColor text-primary  ': status === 'accent',
      }
    )}>{label}</button>
  )
}

export default Button