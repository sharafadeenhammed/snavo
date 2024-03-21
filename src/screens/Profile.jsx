


import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Screen from '../components/Screen'
import pageAnimation from '../data/pageAnimation'
import routesName from '../data/routesName'
import ToastMessage from '../components/ToastMessage'
import useUserContext from '../hooks/useUserContext'
import ThinSpinner from "../components/ThinSpinner"

import vip from "../assets/images/profile_vip.png"
import crown from "../assets/images/profile_crown.png"

import homeNoticeMore from "../assets/images/home_notice_more.png"
import copy from "../assets/images/copy.png"
import info from "../assets/images/leftpanel/info.png"
import message from "../assets/images/leftpanel/message.png"
import question from "../assets/images/leftpanel/question.png"
import shield from "../assets/images/leftpanel/shield.png"
import memo from "../assets/images/leftpanel/memo.png"
import userlove from "../assets/images/leftpanel/userlove.png"
import book from "../assets/images/leftpanel/book.png"
import quantifyData from '../data/quantifyData'

function Profile() {
  const navigate = useNavigate();
  const [ showToast, setShowToast ] = useState(false);
  const [ toastMessage, setToastMessage ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const { user, userDispatch } = useUserContext();
  function copyUid() {
    navigator.clipboard.writeText(user.uid)
    setToastMessage("Copy successfully");
    setShowToast(true);
  }

  function signOut() {
    setIsLoading(true);
    setTimeout(() => {
      userDispatch({ type: "CLEAR_USER" });
      navigate(routesName.LOGIN);
    }, 2000)
  }

  return (
    <Screen
      {...pageAnimation}
    >
      {isLoading ? <ThinSpinner /> : null}
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
      <div className=" text-white px-3 py-4 mb-5 rounded-xl relative w-full min-h-full bg-slate-800">
        <p className='text-3xl font-thin  mr-4 pl-2 mb-2'>
          Hello' {user?.user?.fullname} 👋
        </p>
        <div className=' px-1 text-white bg-slate-800 rounded-xl flex mb-2'>
          <p className='text-2xl font-bold mr-4'>
            {`${user?.user?.phone?.slice(0, 6)}**** ${user?.user?.phone?.slice(-3)}`}
          </p>
          <div className=' relative'>
            <img src={vip} alt="" />
            <p className="absolute top-1.5 right-3 text-xl font-bold">
              VIP{user?.user?.rank}
            </p>
          </div>
        </div>
        <div className='w-full pl-4'>

          <p className='text-slate-400'>
            UUID: {user?.user?.uid} <img className='inline h-5' onClick={copyUid} src={copy} />
          </p>
          <p className='text-slate-400'>
            Email: {user?.user?.email}
          </p>
        </div>
      </div>

      {/* profile stats */}
      <div className="mb-5 text-white bg-slate-900 w-full px-5 py-7 rounded-xl">
        <div className="flex justify-between mb-3 items-start" >
          {/* balance */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              {parseFloat(user?.user?.balance).toFixed(2)}
            </p>
            <p className="text-slate-400 text-center font-normal">
              Balance
            </p>
          </div>

          {/* available funds */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              {parseFloat(user?.user?.balance).toFixed(2)}
            </p>
            <p className="text-slate-400 text-center font-normal">
              Available <br /> funds
            </p>
          </div>

          {/* total income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              {user?.user?.totalIncome || "0.00"}
            </p>
            <p className="text-slate-400 text-center font-normal">
              investment <br /> income
            </p>
          </div>
        </div>


        <div className="flex justify-between mb-3 items-center" >
          {/* Today's commission */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              {user?.user?.investments?.length || 0}
            </p>
            <p className="text-slate-400 text-center font-normal">
              My <br /> investments
            </p>
          </div>

          {/*Today's income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              {user?.user?.refererCount}
            </p>
            <p className="text-slate-400 text-center font-normal">
              My <br /> referals
            </p>
          </div>

          {/* Yesterday's income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              {user?.user?.validReferCount}
            </p>
            <p className="text-slate-400 text-center font-normal">
              Valid <br /> referals
            </p>
          </div>
        </div>

        <div className="flex justify-between mb-3 items-center" >
          {/* Quantitative benefits */}
          {/* <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.12
            </p>
            <p className="text-slate-400 text-center font-normal">
              Quantitative <br /> benefits
            </p>
          </div> */}

          {/*This month's income */}
          {/* <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.12
            </p>
            <p className="text-slate-400 text-center font-normal">
              This month's <br /> income
            </p>
          </div> */}

          {/* Last month's income */}
          {/* <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.06
            </p>
            <p className="text-slate-400 text-center font-normal">
              Last month's  <br />income
            </p>
          </div> */}
        </div>
      </div>


      <div
        className="mb-5 w-full  rounded-xl bg-gradient-to-r from-slate-500 to-slate-900">
        <div className='px-3 py-3'>
          <p className='text-slate-400 font-normal text-xl mb-2'>Next level</p>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <p className='text-slate-400 font-semibold text-3xl' >VIP{`${user.user.rank < 6 ? user?.user?.rank + 1 : user?.user?.rank}`}</p>
              <img className='h-7' src={crown} />
            </div>
            <p className='text-slate-400'>Effective amount({`${quantifyData[ user?.user?.rank < 6 ? user?.user?.rank + 1 : user?.user?.rank ]?.data?.balance}`})</p>
          </div>
        </div>

        <div className='bg-slate-800 bg-opacity-20 px-3 py-3 text-white'>
          <div className="flex justify-between mb-3 items-center" >
            {/*Level one */}
            {/* <div className="flex items-center flex-col" >
              <p className="font-bold text-xl">
                1(0)
              </p>
              <p className="text-center font-normal">
                Level one
              </p>
            </div> */}

            {/*Secondary */}
            {/* <div className="flex items-center flex-col" >
              <p className="font-bold text-xl">
                0(0)
              </p>
              <p className=" text-center font-normal">
                Secondary
              </p>
            </div> */}

            {/* Level three */}
            {/* <div className="flex items-center flex-col" >
              <p className="font-bold text-xl">
                0(0)
              </p>
              <p className=" text-center font-normal">
                Level three
              </p>
            </div> */}
          </div>
        </div>
      </div>



      {/* profile links */}
      <div
        className=" text-white rounded-xl relative w-full bg-slate-900 pt-5 pb-5">

        {/* other links */}
        <div className="w-full">
          {/* company profile */}
          <div onClick={() => navigate(routesName.COMPANY_PROFILE)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-800 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="  inline-block h-6 w-6" src={info} alt="" />
              </div>
              <p className="font-normal text-lg" >Company Profile</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* platform rules */}
          <div onClick={() => navigate(routesName.COMPANY_RULES)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-800 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6" src={message} alt="" />

              </div>
              <p className="font-normal text-lg" >Platform Rules</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* common problems */}
          <div onClick={() => navigate(routesName.COMMON_PROBLEM)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-800 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6" src={question} alt="" />
              </div>
              <p className="font-normal text-lg" >Common Problems</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* security center */}
          <div onClick={() => navigate(routesName.SECURITY_CENTER)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-800 py-4 ">
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
            className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-800 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={memo} alt="" />
              </div>
              <p className="font-normal text-lg" >Funding Details</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* invite friends */}
          <div onClick={() => navigate(routesName.INVITE_FRIENDS)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-800 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={userlove} alt="" />
              </div>
              <p className="font-normal text-lg" >Invite Friends</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>
          {/* my team */}
          {/* <div onClick={() => navigate(routesName.MY_TEAM)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-800 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={users} alt="" />
              </div>
              <p className="font-normal text-lg" >My Team</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div> */}
          {/* quantization tutorial */}
          <div onClick={() => navigate(routesName.QUANTIZIZATION)} className="px-3 flex items-center justify-between w-full border-b-2 border-b-slate-800 py-4 ">
            <div className="flex items-center">
              <div className='mr-1 bg-indigo-200 p-2 rounded-full flex items-center justify-center'>
                <img className="inline-block h-6 w-6 mr-1" src={book} alt="" />
              </div>
              <p className="font-normal text-lg" >Investment Tutorial</p>
            </div>
            <img className="h-4" src={homeNoticeMore} alt="" />
          </div>

        </div>
        <div className=" mt-2 w-full px-2">
          <button
            onClick={signOut}
            className="text-white text-lg font-semibold bg-indigo-700 cursor-pointer rounded-lg w-full py-3">Sign out</button>
        </div>
      </div>
    </Screen>
  )
}

export default Profile
