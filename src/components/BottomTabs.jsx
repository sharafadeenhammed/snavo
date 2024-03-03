
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import routesName from "../data/routesName"
import { FaHome } from "react-icons/fa"
function BottomTabs() {
  const iconSize = 20;
  return (
    <div className='bg-gray-50 py-1 z-40 fixed top-0  w-full mx-auto max-w-md'>
      <div className="flex justify-between items-center">
        <NavLink
          to={routesName.HOME}
          className="flex items-center justify-center"
          activeClassName="text-blue-500"
        >
          <FaHome size={iconSize} />
        </NavLink>
      </div>
    </div>
  )
}

export default BottomTabs
