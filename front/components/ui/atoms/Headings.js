import clsx from 'clsx'
import React from 'react'

function Headings({ label, type }) {
  return (
    <h2 className={clsx(
      "font-normal text-headingsColor leading-[2.48rem] text-right",
      {
        'text-[1.6rem]': type === 'h2',
        '': type === 'h3',
        // 'w-full p-[0.8rem] rounded-[0.6rem] text-[1.4rem] text-white  bg-primary ': status === 'h4',
      }
    )}>{label}</h2>
  )
}

export default Headings