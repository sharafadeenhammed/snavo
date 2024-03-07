

import { useState } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import ThinSpinner from "../components/ThinSpinner";
import pageAnimation from "../data/pageAnimation";
import noREcord from "../assets/images/no-record.png"
import { useNavigate } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa";
import MessageCenterCard from "../components/MessageCenterCard";
import NoRecord from "../components/NoRecord";


function MessageCenter() {
  const [ currentTab, setCurrentTab ] = useState("notification");
  const navigate = useNavigate()
  return (
    <Screen
      objectStyle={{
        padding: 0,
        paddingTop: "50px"
      }}
      {...pageAnimation}>
      <div className='bg-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Message Center</h1>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-white px-0 py-2">
        <div className=" bg-gray-200 py-3 px-4 w-full flex items-center justify-between mb-5">
          <p className={"mr-10 font-semibold text-lg cursor-pointer " + (currentTab === "notification" ? "text-indigo-700" : "")} onClick={() => setCurrentTab("notification")}>
            Notification
          </p>

          <p className={"font-semibold text-lg cursor-pointer " + (currentTab === "systemNotification" ? "text-indigo-700" : "")} onClick={() => {
            setCurrentTab("systemNotification")
          }
          }>
            System notification
          </p>
        </div>

        {currentTab === "notification" ?
          <NoRecord /> : null}


        {/* team contribution */}
        {
          currentTab === "systemNotification" ?
            <MessageCenterCard /> : null

        }


      </div>
    </Screen >
  )
}

export default MessageCenter
