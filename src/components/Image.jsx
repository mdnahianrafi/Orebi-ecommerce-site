import React from 'react'

const Image = ({className,imgSrc,imgAlt}) => {
  return (
    <div>
      <img className={`${className}`} src={imgSrc} alt={imgAlt} />
    </div>
  )
}

export default Image
