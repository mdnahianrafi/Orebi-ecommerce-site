import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`mx-auto max-w-headerContainer ${className}`}>{children}</div>
  )
}

export default Container
