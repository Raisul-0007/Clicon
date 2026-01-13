import React from 'react'

const loading = () => {
  return (
    <div className="flex justify-center flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce"></div>
          <div
            className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>
  )
}

export default loading
