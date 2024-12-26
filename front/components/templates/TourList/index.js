import Card from '@/components/ui/organisms/Card'
import React from 'react'

function ToursList({ data }) {

  // Check if the data array is empty
  if (!data.length) {
    return (
      <div className="flex items-center justify-center my-[5rem]  w-6/12 h-[10rem] bg-accentButtonColor ">
        <p className=' text-[2rem]'>.نتیجه ای یافت نشد</p>
      </div>
    );
  }

  // Render the data if it's not empty
  return (
    <section>
      <div className="py-16  sm:py-24 ">
        <h2 className="text-[2rem] md:text-[3.2rem] font-normal leading-[6rem] tracking-tight">همه تورها</h2>
        <div className="  grid grid-cols-1 gap-[5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
          {data?.map((tourItem) => (
            <Card key={tourItem.id} tour={tourItem} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToursList