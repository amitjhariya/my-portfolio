import React from 'react'

function Centered({children}) {
  return (
    <div className="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="relative px-6 lg:px-8">
          <div className="max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            {children}
          </div>
        </div>
      </div>
  )
}

export default Centered