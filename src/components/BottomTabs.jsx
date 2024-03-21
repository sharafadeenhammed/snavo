
import { Link, useLocation, useNavigate } from "react-router-dom"
import routesName from "../data/routesName"
import { FaHome, FaUsers, FaUser, FaRegChartBar, FaStopwatch, FaClock } from "react-icons/fa"
import useUserContext from "../hooks/useUserContext";
function BottomTabs() {
  const { user } = useUserContext();
  const iconSize = 25;
  const location = useLocation()
  const navigate = useNavigate();

  {
    return user?.user?._id !== undefined && user !== null ?
      (< div className=' container bg-slate-800 py-2 z-30 fixed bottom-0 w-full box-border max-w-lg px-2 left-1/2 -translate-x-1/2' >
        <div className=" cursor-pointer px-5 flex items-center w-full justify-between" >
          {/* home */}
          <div
            onClick={() => navigate(routesName.HOME)}
            className={" cursor-pointer flex flex-col items-center " + (location.pathname === routesName.HOME ? "text-indigo-600" : "text-slate-500")}>
            <div
              className="mb-1 "
            >
              <FaHome size={iconSize} />
            </div>
            <p className="text-sm font-semibold ">Home</p>
          </div>
          {/* quantify */}
          <div onClick={() => navigate(routesName.QUANTIFY)} className={" cursor-pointer flex flex-col items-center " + (location.pathname === routesName.QUANTIFY ? "text-indigo-600" : "text-slate-500")}>
            <div
              className="mb-1 "
            >
              <FaRegChartBar size={iconSize} />
            </div>
            <p className="text-sm font-semibold ">Harvest</p>
          </div>
          {/* team */}
          {/* <div onClick={() => navigate(routesName.MY_TEAM)} className={"cursor-pointer flex flex-col items-center " + (location.pathname === routesName.MY_TEAM ? "text-indigo-600" : "text-slate-500")}>
            <div
              className="mb-1 "
            >
              <FaUsers size={iconSize} />
            </div>
            <p className="text-sm font-semibold ">Team</p>
          </div> */}
          <div onClick={() => navigate(routesName.MINER)} className={"cursor-pointer flex flex-col items-center " + (location.pathname === routesName.MINER ? "text-indigo-600" : "text-slate-500")}>
            <div
              className="mb-1 "
            >
              <FaStopwatch size={iconSize} />
            </div>
            <p className="text-sm font-semibold ">Invest</p>
          </div>
          {/* profile */}
          <div onClick={() => navigate(routesName.PROFILE)} className={" cursor-pointer flex flex-col items-center " + (location.pathname === routesName.PROFILE ? "text-indigo-600" : "text-slate-500")}>
            <div
              className="mb-1 "
            >
              <FaUser size={iconSize} />
            </div>
            <p className="text-sm font-semibold ">Profile</p>
          </div>

        </div>
      </div >) : null
  }

}

export default BottomTabs
