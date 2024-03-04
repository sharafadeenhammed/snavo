
import { Link, useLocation } from "react-router-dom"
import routesName from "../data/routesName"
import { FaHome, FaUsers, FaUser, FaRegChartBar, FaStopwatch, FaClock } from "react-icons/fa"
function BottomTabs() {
  const iconSize = 30;
  const location = useLocation()
  return (
    // <div className="" >
    //   {/* <Link to={routesName.HOME} > */}
    //   <FaHome size={40} color="#4f46e5" />
    //   {/* </Link> */}
    // </div>
    <div className=' container bg-white py-5 z-30 fixed bottom-0 w-full box-border max-w-lg px-2 left-1/2 -translate-x-1/2'>
      <div className=" px-5 flex items-center w-full justify-between" >
        {/* home */}
        <div className={" cursor-pointer flex flex-col items-center " + (location.pathname === routesName.HOME ? "text-indigo-600" : "text-slate-200")}>
          <Link
            to={routesName.HOME} className="mb-1 "
          >
            <FaHome size={iconSize} />
          </Link>
          <p className="text-lg font-semibold ">Home</p>
        </div>
        {/* quantify */}
        <div className={" cursor-pointer flex flex-col items-center " + (location.pathname === routesName.QUANTIFY ? "text-indigo-600" : "text-slate-500")}>
          <Link
            to={routesName.QUANTIFY} className="mb-1 "
          >
            <FaRegChartBar size={iconSize} />
          </Link>
          <p className="text-lg font-semibold ">Quantify</p>
        </div>
        {/* team */}
        <div className={"cursor-pointer flex flex-col items-center " + (location.pathname === routesName.TEAM ? "text-indigo-600" : "text-slate-500")}>
          <Link
            to={routesName.TEAM} className="mb-1 "
          >
            <FaUsers size={iconSize} />
          </Link>
          <p className="text-lg font-semibold ">Team</p>
        </div>
        <div className={"cursor-pointer flex flex-col items-center " + (location.pathname === routesName.MINER ? "text-indigo-600" : "text-slate-500")}>
          <Link
            to={routesName.MINER} className="mb-1 "
          >
            <FaStopwatch size={iconSize} />
          </Link>
          <p className="text-lg font-semibold ">Miner</p>
        </div>
        {/* profile */}
        <div className={" cursor-pointer flex flex-col items-center " + (location.pathname === routesName.PROFILE ? "text-indigo-600" : "text-slate-500")}>
          <Link
            to={routesName.PROFILE} className="mb-1 "
          >
            <FaUser size={iconSize} />
          </Link>
          <p className="text-lg font-semibold ">Mine</p>
        </div>

      </div>
    </div>
  )
}

export default BottomTabs
