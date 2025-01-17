import React from 'react'

const Badge = ({className,badgeName}) => {
  return (
    <div className={`font-dm font-bold text-white text-sm py-3 px-[30px] bg-black w-[90px]  ${className}`}>{badgeName}</div>
  )
}

export default Badge 