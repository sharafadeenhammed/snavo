

import { useState } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import ThinSpinner from "../components/ThinSpinner";
import pageAnimation from "../data/pageAnimation";
import routesName from "../data/routesName";
import noREcord from "../assets/images/no-record.png"
import { useNavigate } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa";


function TeamList() {
  const [ currentTab, setCurrentTab ] = useState("teamMembers");
  const navigate = useNavigate()
  return (
    <Screen
      objectStyle={{
        padding: 0,
        paddingTop: "50px"
      }}
      {...pageAnimation}>
      <div className='bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Team list</h1>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-white px-5 py-2">
        <div className="flex items-center mb-5">
          <p className={"mr-10 font-semibold text-lg cursor-pointer " + (currentTab === "teamMembers" ? "text-indigo-700" : "")} onClick={() => setCurrentTab("teamMembers")}>
            Team members
          </p>

          <p className={"font-semibold text-lg cursor-pointer " + (currentTab === "teamContribution" ? "text-indigo-700" : "")} onClick={() => {
            setCurrentTab("teamContribution")
          }
          }>
            Team contribution
          </p>
        </div>

        {currentTab === "teamMembers" ?
          < div className="w-full ">
            {/* team members */}
            <div className="flex items-center justify-between relative mb-5">
              <p className="text-lg">
                Registered people today: <span className="text-indigo-700">0</span>
              </p>
              <button className=" bg-white shadow rounded shadow-gray-200 flex items-center px-7 py-2">
                Level 1 <FaAngleDown className="ml-1" size={15} color="lightgray" />
              </button>
            </div>

            {/* table header */}
            <div className="bg-indigo-600 mb-2 text-white h-12 rounded-lg flex items-center w-full">
              <div className="w-1/4 text-center">Account</div>
              <div className="w-1/4 text-center">Level</div>
              <div className="w-1/4 text-center">Grade</div>
              <div className="w-1/4 text-center">Registration time</div>
            </div>

            {/* team item card */}
            <div className="bg-white mb-1 font-semibold  text-black px-2 rounded-lg flex items-center w-full">
              <div className="w-1/4 text-center">+234123456789</div>
              <div className="w-1/4 text-center">Level one</div>
              <div className="w-1/4 text-center">VIP0</div>
              <div className="w-1/4 text-center">12/12/2022</div>
            </div>
          </div> : null}


        {/* team contribution */}
        {
          currentTab === "teamContribution" ?
            <div className="w-full ">
              <div className="flex items-center justify-between relative mb-5">
                <p className="text-lg">
                  Cumulative income today: <span className="text-red-500">0.00</span>
                </p>
                <button className=" bg-white shadow rounded shadow-gray-200 flex items-center px-7 py-2">
                  Level 1 <FaAngleDown className="ml-1" size={15} color="lightgray" />
                </button>
              </div>

              {/* table header */}
              <div className="bg-indigo-600 mb-2 h-12 text-white px-2 rounded-lg flex items-center w-full">
                <div className="w-1/4 text-center">Account</div>
                <div className="w-1/4 text-center">Level</div>
                <div className="w-1/4 text-center">Account</div>
                <div className="w-1/4 text-center">income</div>
              </div>

              {/* team item card */}
              <div className="bg-white mb-1 font-semibold  text-black px-2 rounded-lg flex items-center w-full">
                <div className="w-1/4 text-center">+234123456789</div>
                <div className="w-1/4 text-center">Level 0</div>
                <div className="w-1/4 text-center">12:00</div>
                <div className="w-1/4 text-center">3.05</div>
              </div>

            </div> : null

        }


      </div>
    </Screen >
  )
}

export default TeamList
