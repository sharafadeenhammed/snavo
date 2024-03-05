


import { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Screen from '../components/Screen'
import pageAnimation from '../data/pageAnimation'
import routesName from '../data/routesName'
import ToastMessage from '../components/ToastMessage'

import history from "../assets/images/quantify/book-history.png"
import vip from "../assets/images/profile_vip.png"
import crown from "../assets/images/profile_crown.png"

import homeNoticeMore from "../assets/images/home_notice_more.png"
import copy from "../assets/images/copy.png"
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
function Profile() {
  const navigate = useNavigate();
  const [ showToast, setShowToast ] = useState(false);
  const [ toastMessage, setToastMessage ] = useState("");
  const uid = 2219980;
  function copyUid() {
    navigator.clipboard.writeText(uid)
    setToastMessage("Copy successfully");
    setShowToast(true);
  }
  return (
    <Screen
      {...pageAnimation}
    >
      <AnimatePresence>
        {
          showToast ?
            (<ToastMessage
              message={toastMessage}
              showToast={showToast}
              handleRemoveToast={() => setShowToast(false)}
            />) : null
        }
      </AnimatePresence>
      <div className=" px-3 py-4 mb-5 rounded-xl relative w-full min-h-full bg-white">
        <div className='flex mb-4'>
          <p className='text-2xl font-bold mr-4'>+234****5364</p>
          <div className=' relative'>
            <img src={vip} alt="" />
            <p className="absolute top-1.5 right-3 text-xl font-bold">
              VIP0
            </p>
          </div>
        </div>
        <p className='text-slate-400'>
          UUID: {uid} <img className='inline h-5' onClick={copyUid} src={copy} />
        </p>
      </div>

      {/* profile stats */}
      <div className="mb-5 w-full px-5 py-7 rounded-xl bg-white">
        <div className="flex justify-between mb-3 items-center" >
          {/* balance */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              3.12
            </p>
            <p className="text-slate-400 text-center font-normal">
              Balance
            </p>
          </div>

          {/* available funds */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              3.12
            </p>
            <p className="text-slate-400 text-center font-normal">
              Available <br /> funds
            </p>
          </div>

          {/* total income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.12
            </p>
            <p className="text-slate-400 text-center font-normal">
              Total <br /> income
            </p>
          </div>
        </div>


        <div className="flex justify-between mb-3 items-center" >
          {/* Today's commission */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.00
            </p>
            <p className="text-slate-400 text-center font-normal">
              Today's <br /> commission
            </p>
          </div>

          {/*Today's income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.03
            </p>
            <p className="text-slate-400 text-center font-normal">
              Today's <br /> income
            </p>
          </div>

          {/* Yesterday's income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.06
            </p>
            <p className="text-slate-400 text-center font-normal">
              Yesterday's <br /> income
            </p>
          </div>
        </div>

        <div className="flex justify-between mb-3 items-center" >
          {/* Quantitative benefits */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.12
            </p>
            <p className="text-slate-400 text-center font-normal">
              Quantitative <br /> benefits
            </p>
          </div>

          {/*This month's income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.12
            </p>
            <p className="text-slate-400 text-center font-normal">
              This month's <br /> income
            </p>
          </div>

          {/* Last month's income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.06
            </p>
            <p className="text-slate-400 text-center font-normal">
              Last month's  <br />income
            </p>
          </div>
        </div>


      </div>





      {/* profile links */}
      <div
        className=" rounded-xl relative w-full min-h-full bg-white pt-5 pb-5">

        {/* other links */}
        <div className="w-full">
          {/* company profile */}
          <div onClick={() => navigate(routesName.COMPANY_PROFILE)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="  inline-block h-6 w-6" src={info} alt="" />
              </div>
              <p className="font-normal text-lg" >Company Profile</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* platform rules */}
          <div onClick={() => navigate(routesName.COMPANY_RULES)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6" src={message} alt="" />

              </div>
              <p className="font-normal text-lg" >Platform Rules</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* common problems */}
          <div onClick={() => navigate(routesName.COMMON_PROBLEM)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6" src={question} alt="" />
              </div>
              <p className="font-normal text-lg" >Common Problems</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* security center */}
          <div onClick={() => navigate(routesName.SECURITY_CENTER)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={shield} alt="" />
              </div>
              <p className="font-normal text-lg" >Security Center</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* funding details */}
          <div
            onClick={() => navigate(routesName.FUNDING_DETAILS)}
            className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={memo} alt="" />
              </div>
              <p className="font-normal text-lg" >Funding Details</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* invite friends */}
          <div onClick={() => navigate(routesName.INVITE_FRIENDS)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={userlove} alt="" />
              </div>
              <p className="font-normal text-lg" >Invite Friends</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* my team */}
          <div onClick={() => navigate(routesName.MY_TEAM)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={users} alt="" />
              </div>
              <p className="font-normal text-lg" >My Team</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* quantization tutorial */}
          <div onClick={() => navigate(routesName.QUANTIZIZATION)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-100 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={book} alt="" />
              </div>
              <p className="font-normal text-lg" >Quantization Tutorial</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>

        </div>
        <div className=" mt-2 w-full px-2">
          <button className="text-white text-lg font-semibold bg-indigo-700 cursor-pointer rounded-lg w-full py-3">Sign out</button>
        </div>
      </div>
    </Screen>
  )
}

export default Profile