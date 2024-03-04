import { useState } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import pageAnimation from "../data/pageAnimation";
import homeNoticeMore from "../assets/images/home_notice_more.png"
import infoError from "../assets/images/info_error.png"

function SecurityCenter() {
  return (
    <Screen
      {...pageAnimation}>
      <div className='bg-gray-50 py-1 z-40 fixed top-0  w-full mx-auto max-w-md'>
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
        <div className="w-full p-5 flex text-xl font-normal items-center justify-between border-b-2 border-b-slate-200" >
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
        <div className="w-full p-5 flex text-xl font-normal items-center justify-between border-b-2 border-b-slate-200" >
          <p className="">
            Login password
          </p>
          <div className="flex items-center ">
            {/* show when not set */}
            {/* <div className="flex text-red-500 items-center justify-center">
              <img className="inline-block mr-1" src={infoError} alt="" />
              <p>Not Set</p>
            </div> */}
            <img className="ml-3 h-5" src={homeNoticeMore} alt="" />
          </div>
        </div>
        {/* set mail */}
        <div className="w-full p-5 flex text-xl font-normal items-center justify-between border-b-2 border-b-slate-200" >
          <p className="">
            Login password
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
