import { useState } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import pageAnimation from "../data/pageAnimation";
import routesName from "../data/routesName";
import homeNoticeMore from "../assets/images/home_notice_more.png"
import { useNavigate } from "react-router-dom"
import infoError from "../assets/images/info_error.png"

function SecurityCenter() {
  const navigate = useNavigate()
  return (
    <Screen
      {...pageAnimation}>
      <div className='bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Security center</h1>
          </div>
        </div>
      </div>

      <div className="w-full">
        {/* transaction password */}
        <div onClick={() => navigate(routesName.SET_TRANSACTION_PASSWORD)} className="w-full p-5 flex text-base font-normal items-center justify-between border-b-2 border-b-slate-200" >
          <p className="">
            Transction password
          </p>
          <div className="flex items-center ">
            {/* show when not set */}
            <div className="flex text-red-500 items-center justify-center">
              <img className="inline-block mr-1" src={infoError} alt="" />
              <p>Not Set</p>
            </div>
            <img className="ml-3 h-5" src={homeNoticeMore} alt="" />
          </div>
        </div>
        {/* login password */}
        <div onClick={() => navigate(routesName.UPDATE_LOGIN_PASSWORD)} className="w-full p-5 flex text-xl font-normal items-center justify-between border-b-2 border-b-slate-200" >
          <p className="">
            Login password
          </p>
          <div className="flex items-center ">
            <img className="ml-3 h-5" src={homeNoticeMore} alt="" />
          </div>
        </div>
        {/* set mail */}
        <div onClick={() => navigate(routesName.SET_MAIL)} className="w-full p-5 flex text-base font-normal items-center justify-between border-b-2 border-b-slate-200" >
          <p className="">
            Mail
          </p>
          <div className="flex items-center ">
            {/* show when not set */}
            <div className="flex text-red-500 items-center justify-center">
              <img className="inline-block mr-1" src={infoError} alt="" />
              <p>Unbound</p>
            </div>
            <img className="ml-3 h-5" src={homeNoticeMore} alt="" />
          </div>
        </div>


      </div>

    </Screen>
  )
}

export default SecurityCenter
