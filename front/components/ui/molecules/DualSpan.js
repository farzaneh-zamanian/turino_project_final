import React from 'react'

function DualSpan({ title, value }) {
      return (
            <div className='flex flex-row items-center justify-between md:gap-10'>
                  <span className="text-[1.4rem] font-light leading-[2.17rem] text-textLightColor">{title}</span>
                  <span className='text-[1.4rem] text-valueColor font-normal'>{value}</span>
            </div>
      )
}

export default DualSpan