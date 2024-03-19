import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Screen from '../components/Screen'
import Back from '../components/Back'
import GradeListCard from '../components/GradeListCard'
import ToastMessage from '../components/ToastMessage'
import pageAnimation from '../data/pageAnimation'
import rechargeGrades from '../data/rechargeGradeList'
import routesName from '../data/routesName'

import history from "../assets/images/quantify/book-history.png"

import usdt from "../assets/images/usdt.png"
import { FaAngleRight } from 'react-icons/fa'


function RechargeMethod() {
  const navigate = useNavigate();
  const [ coinName, setCoinName ] = useState("USDT");
  return (
    <Screen
      {...pageAnimation}
    >
      <div className=' bg-slate-800 text-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" w-full flex items-center justify-between" >
          <div>
            <Back />
          </div>
          <h1 className='text-center text-2xl font-medium'>
            Recharge method
          </h1>
          <div onClick={() => navigate(routesName.RECHARGE_RECORDS)}>
            <img className='h-8' src={history} alt="" />
          </div>
        </div>
      </div>
      {/* section one */}
      <p className='text-xl text-slate-500'>Choose</p>
      <div
        onClick={() => navigate(routesName.RECHARGE, { state: { coinName: coinName } })}
        className="w-full text-white cursor-pointer flex items-center justify-between rounded-lg bg-slate-900 shadow mb-14 mt-3 px-5 py-3">
        <div className="flex items-center">
          <img className='block h-8  mr-2' src={usdt} alt="" />
          <p className='font-semibold text-lg'>Pay</p>
        </div>
        <div>
          <FaAngleRight size={25} color='gray' />
        </div>
      </div>


      {/* section two */}
      <p className='text-xl text-slate-500'>Grade list</p>

      {
        rechargeGrades.map((item, index) => (
          <GradeListCard data={item} key={index} />

        ))
      }
    </Screen>
  )
}

export default RechargeMethod
