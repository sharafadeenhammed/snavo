

import { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


import Screen from '../components/Screen'
import Back from '../components/Back'
import ToastMessage from '../components/ToastMessage'
import pageAnimation from '../data/pageAnimation'
import routesName from '../data/routesName'
import usdt from "../assets/images/usdt.png"
import history from "../assets/images/quantify/book-history.png"



function WithdrawalMethod() {
  const navigate = useNavigate();
  return (
    <Screen
      objectStyle={{
        backgroundColor: "#ffffff"
      }}
      {...pageAnimation}
    >
      <div className=' bg-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" w-full flex items-center justify-between" >
          <div>
            <Back />
          </div>
          <h1 className='text-center text-2xl font-medium'>
            Withdrawal method
          </h1>
          <div onClick={() => navigate(routesName.WITHDRAW_RECORDS)}>
            <img className='h-8' src={history} alt="" />
          </div>
        </div>
      </div>

      <div
        onClick={() => navigate(routesName.WITHDRAW)}
        className="w-full cursor-pointer flex items-center justify-between  mb-14 mt-3 px-5 py-3 border-b-2 border-b-slate-200">
        <div className="flex items-center">
          <img className='block h-8  mr-3' src={usdt} alt="" />
          <p className='font-normal text-lg'>digital currency</p>
        </div>
        <div>
          <FaAngleRight size={25} color='gray' />
        </div>
      </div>
    </Screen>
  )
}

export default WithdrawalMethod
