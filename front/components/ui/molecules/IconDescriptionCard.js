import React from 'react'

function IconDescriptionCard({ label, icon }) {
  return (
    <div className="flex items-center gap-[1rem]">
      <img src={icon} className="w-[1.6rem] h-[1.6rem]" alt={label} />
      <p className="text-[1.6rem]">{label}</p>
    </div>


  )
}

export default IconDescriptionCard