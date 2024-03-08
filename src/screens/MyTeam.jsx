

import { useEffect, useState } from "react"

import Screen from "../components/Screen";
import Back from "../components/Back";
import ToastMessage from "../components/ToastMessage";
import ThinSpinner from "../components/ThinSpinner";
import pageAnimation from "../data/pageAnimation";
import { FaArrowDown, FaAngleDown } from "react-icons/fa";
import routesName from "../data/routesName";
import { useNavigate } from "react-router-dom";
function MyTeam() {
  const [ toastMessage, setToastMessage ] = useState("");
  const [ showToast, setShowToast ] = useState(false);
  const navigate = useNavigate();
  return (
    <Screen
      {...pageAnimation}>
      <ToastMessage message={toastMessage} showToast={showToast} handleRemoveToast={() => setShowToast(false)} />
      <div className='bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              My team</h1>
          </div>
        </div>
      </div>
      {/* section one */}
      <div className="bg-white rounded-lg p-3 mb-7">
        <div className="flex justify-between items-center mb-5">
          <p className="text-xl font-bold">Team Data Overview</p>
          <div className="p-1  flex items-center border-2 border-slate-200 rounded">
            <p className="text-xl font-bold mr-10"> All</p>
            <FaAngleDown size={30} color="#6B7280" />
          </div>
        </div>

        <div className="flex py-4  justify-between items-center border-b-2 border-b-slate-200" >
          {/* registered members */}
          <div className="flex items-center flex-col" >
            <p className="text-slate-400 text-center font-normal text-xl">
              Registered
              <br />
              member
            </p>
            <p className="font-bold text-2xl">
              0
            </p>

          </div>
          {/* valid members */}
          <div className="flex items-center flex-col" >
            <p className="text-slate-400 text-center font-normal text-xl">
              Valid
              <br />
              member
            </p>
            <p className="font-bold text-2xl">
              0
            </p>

          </div>
          {/* team income */}
          <div className="flex items-center flex-col" >
            <p className="text-slate-400 text-center font-normal text-xl">
              Team
              <br />
              income
            </p>
            <p className="font-bold text-2xl">
              0.00
            </p>

          </div>
        </div>
        {/* cumulative team size */}
        <div className="flex py-5 justify-between items-center" >
          <p className="text-slate-400 text-base">
            Cumulative team size: <span className="text-black">0</span>
          </p>

          <p onClick={() => navigate(routesName.TEAM_LIST)} className="text-indigo-600 cursor-pointer text-lg">
            View team list
          </p>
        </div>
      </div>
      {/* section two */}
      <div className="bg-white rounded-lg p-3">
        <div className="flex justify-between items-center mb-5">
          <p className="text-xl font-bold">
            The last three generations of data
          </p>
          <div className="p-1  flex items-center border-2 border-slate-200 rounded">
            <p className="text-xl font-bold mr-10"> All</p>
            <FaAngleDown size={30} color="#6B7280" />
          </div>
        </div>

        {/* first generation data */}
        <div className="w-full">
          <p className="text-indigo-600 text-xl font-semibold">
            Generation data
          </p>

          <div className="flex py-7 justify-between items-center border-b-2 border-b-slate-200" >
            {/* Team commision */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                18%
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Team
                <br />
                commission
              </p>
            </div>

            {/* registered members */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Registered
                <br />
                member
              </p>
            </div>

            {/* valid members */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Valid
                <br />
                member
              </p>
            </div>

            {/* team income */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0.00
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Team
                <br />
                income
              </p>
            </div>
          </div>
        </div>

        {/* second generation data */}
        <div className="w-full">
          <p className="text-indigo-600 text-xl font-semibold">
            Second generation data
          </p>

          <div className="flex py-7 justify-between items-center border-b-2 border-b-slate-200" >
            {/* Team commision */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                6%
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Team
                <br />
                commission
              </p>
            </div>

            {/* registered members */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Registered
                <br />
                member
              </p>
            </div>

            {/* valid members */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Valid
                <br />
                member
              </p>
            </div>

            {/* team income */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0.00
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Team
                <br />
                income
              </p>
            </div>
          </div>
        </div>

        {/* third geberation data */}
        <div className="w-full">
          <p className="text-indigo-600 text-xl font-semibold">
            Three generation data
          </p>

          <div className="flex py-7 justify-between items-center" >
            {/* Team commision */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                6%
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Team
                <br />
                commission
              </p>
            </div>

            {/* registered members */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Registered
                <br />
                member
              </p>
            </div>

            {/* valid members */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Valid
                <br />
                member
              </p>
            </div>

            {/* team income */}
            <div className="flex items-center flex-col" >
              <p className="font-bold text-2xl">
                0.00
              </p>
              <p className="text-slate-400 text-center font-normal text-base">
                Team
                <br />
                income
              </p>
            </div>
          </div>
        </div>


      </div>

    </Screen>
  )
}

export default MyTeam
