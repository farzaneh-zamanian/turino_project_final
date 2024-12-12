import React from 'react'
import LinkItem from '../molecules/LinkItem'





const HeaderUserProfileItems = ({ items, className ,children, onClick}) => {
  return (
    <div className={className}>
      {children}
      {items.map((item, index) => (
        <LinkItem
          key={index}
          href={item.href}
          figure={item.figure}
          className={item.className}
          onClick={onClick}
        />
      ))}
    </div>
  )
}

export default HeaderUserProfileItems