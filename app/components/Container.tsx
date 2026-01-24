import React from 'react'

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
   <div className={`max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
