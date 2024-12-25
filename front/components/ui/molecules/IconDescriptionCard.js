import React from 'react'

function IconDescriptionCard({ label, icon }) {
  return (
    <div className="flex items-center gap-[1rem]">
      {icon}
      <p className="text-[1.6rem]">{label}</p>
    </div>


  )
}

export default IconDescriptionCard