import { AnimatePresence, motion } from "framer-motion"
import { FaCopy, FaUser } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

import homeNoticeMore from "../assets/images/home_notice_more.png"
import copy from "../assets/images/leftpanel/copy.png"
import recharge from "../assets/images/leftpanel/recharge.png"
import withdraw from "../assets/images/leftpanel/withdraw.png"
import info from "../assets/images/leftpanel/info.png"
import message from "../assets/images/leftpanel/message.png"
import question from "../assets/images/leftpanel/question.png"
import shield from "../assets/images/leftpanel/shield.png"
import memo from "../assets/images/leftpanel/memo.png"
import userlove from "../assets/images/leftpanel/userlove.png"
import users from "../assets/images/leftpanel/users.png"
import book from "../assets/images/leftpanel/book.png"
import routesName from "../data/routesName"


function LeftPanel({ hadleClosePanel, panelOpen = false }) {
  const navigate = useNavigate();
  return (
    <motion.div
      id="close-left-panel"
      className='container min-h-screen mx-auto max-w-lg bg-black bg-opacity-75 fixed top-0 bottom-0  z-40 overflow-auto'
      // className="container mx-auto fixed top-0 bottom-0 box-border left-50 z-40 h-full max-w-lg overflow-visible bg-black bg-opacity-75"
      onClick={(e) => {
        console.log("close panel", e.target.id)
        e.target.id === "close-left-panel" && hadleClosePanel()
      }}
      initial={{ x: "-20%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%", width: 0 }}
      transition={{ duration: 0.3 }} >

      <div
        className=" relative w-9/12 min-h-full bg-white pt-5 pb-5">
        {/* security center */}
        <div
          onClick={() => {
            // TODO: close panel and navigate to security center
            console.log("goto security center ")
          }}
          className="flex px-2 justify-between items-center mb-5">
          <div className="p-3 rounded-full border-2 border-slate-200">
            <FaUser color={"#4f46e5"} size={30} />
          </div>
          <div className=" flex flex-col items-center">
            <p>+23455****9034</p>
            <div className="flex items-center justify-center">
              <p className="mr-2">12363477 </p>
              <img
                className="cursor-pointer h-4"
                src={copy}
                onClick={() => {
                  navigator.clipboard.writeText("12363477")
                  alert("Copied!")
                }}
                color={"#4f46e5"} />
            </div>
          </div>
          <div>
            <img className="cursor-pointer" onClick={() => console.log("goto message center ")} src={homeNoticeMore} alt="" />
          </div>
        </div>
        {/* section 2 withdraw and recharge */}
        <div className="flex px-2 items-center justify-between w-full mb-5">
          <div className="w-6/12 mr-1 bg-indigo-600 px-3 py-2 rounded-lg flex items-center flex-col">
            <img className="h-10 inline-block mb-1 w-10" src={recharge} alt="recharge" />
            <p className="text-white font-bold text-sm">Recharge</p>
          </div>
          <div className="w-6/12 bg-indigo-600 px-3 py-2 rounded-lg flex items-center flex-col">
            <img className="inline-block mb-1 h-10 w-10" src={withdraw} alt="recharge" />
            <p className="text-white font-bold text-sm">Withdraw</p>
          </div>
        </div>
        {/* other links */}
        <div className="w-full">
          {/* company profile */}
          <div onClick={() => navigate(routesName.COMPANY_PROFILE)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <img className="inline-block h-6 w-6 mr-1" src={info} alt="" />
              <p className="font-normal text-lg" >Company Profile</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* platform rules */}
          <div onClick={() => navigate(routesName.COMPANY_RULES)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <img className="inline-block h-6 w-6 mr-1" src={message} alt="" />
              <p className="font-normal text-lg" >Platform Rules</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* common problems */}
          <div onClick={() => navigate(routesName.COMMON_PROBLEM)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <img className="inline-block h-6 w-6 mr-1" src={question} alt="" />
              <p className="font-normal text-lg" >Common Problems</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* security center */}
          <div className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <img className="inline-block h-6 w-6 mr-1" src={shield} alt="" />
              <p className="font-normal text-lg" >Security Center</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* funding details */}
          <div className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <img className="inline-block h-6 w-6 mr-1" src={memo} alt="" />
              <p className="font-normal text-lg" >Funding Details</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* invite friends */}
          <div className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <img className="inline-block h-6 w-6 mr-1" src={userlove} alt="" />
              <p className="font-normal text-lg" >Invite Friends</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* my team */}
          <div className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <img className="inline-block h-6 w-6 mr-1" src={users} alt="" />
              <p className="font-normal text-lg" >My Team</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* quantization tutorial */}
          <div className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <img className="inline-block h-6 w-6 mr-1" src={book} alt="" />
              <p className="font-normal text-lg" >Quantization Tutorial</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>

        </div>
        <div className=" my-10  sticky bottom-0 w-full px-2">
          <button className="text-white text-lg font-semibold bg-indigo-700 cursor-pointer rounded-lg w-full py-5">Sign out</button>
        </div>
      </div>

    </motion.div>
  )
}

export default LeftPanel