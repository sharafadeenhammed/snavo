import React from 'react'

function Screen({ children }) {
  return (
    <div className="container px-4 py-0.050  pt-20 border-x-2 border-slate-100 h-min mx-auto max-w-md bg-gray-50">

      {children}
    </div>
  )
}

export default Screen
