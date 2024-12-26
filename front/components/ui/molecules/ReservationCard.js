import React from 'react'
import Button from '../atoms/Button'

function ReservationCard({ label, status, price, classNames }) {
      return (
            <div className='flex items-center justify-between  border-t-2 py-[0.5rem] px-[1rem]'>
                  <Button label={label} status={status} />
                  <p className={classNames}>{price} تومان</p>
            </div>
            
      )
}

export default ReservationCard