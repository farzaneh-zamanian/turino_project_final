import React from 'react'
import clsx from 'clsx';



// <Button label="جستجو" type="search" />
// <Button label="رزرو" type="reservation" />
// <Button label="ارسال کد تایید" type="submit" />
// <button className="text-primary h-[4.1rem] border-solid px-8 rounded-[0.5rem]   ">انصراف</button>


function Button({ label, status }) {
  return (
    <button className={clsx(
      "text-white bg-primary flex justify-center font-normal transition-default hover:opacity-75",
      {
        'w-full rounded-[1.6rem] text-[1.5rem]': status === 'search',
        'h-[2.9rem] w-[9.9rem] rounded-[0.4rem] text-[1.5rem]': status === 'reservation',
        'w-full rounded-[0.6rem] text-[1.4]  ': status === 'submit',
      }
    )}>{label}</button>
  )
}

export default Button