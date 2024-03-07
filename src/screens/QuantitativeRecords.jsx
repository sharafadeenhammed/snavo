


import { useState } from 'react'
import Screen from '../components/Screen'
import { FaAngleRight } from 'react-icons/fa'
import Back from '../components/Back'
import pageAnimation from '../data/pageAnimation'
import link from "../assets/images/icon/link.png"
function QuantitativeRecords() {
  return (
    <Screen
      {...pageAnimation}
    >
      <div className='bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <div>
            <Back />
          </div>
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Quantitative record</h1>
          </div>
        </div>
      </div>
      {/* quantitative card */}
      <div className='w-full bg-white p-3 rounded-xl '>

        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between'>
            <img src={link} alt="" className='block mr-3 h-10' />
            <p className='text-lg font-semibold'>LINK/USDT</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-lg font-semibold mr-1 text-green-500'>Success</p>
            <FaAngleRight size={20} />
          </div>
        </div>

        <div className='flex  flex-col text-lg  mb-3'>
          <div className='flex w-full items-center justify-between'>
            <div>
              <p>Execute position</p>
              <p>0.35</p>
            </div>
            <div className='text-center'>
              <p>Buy platform</p>
              <p>Gemini</p>
            </div>
            <div className='text-right'>
              <p>Purchase price</p>
              <p>20.0413</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col text-lg  mb-3'>
          <div className='flex w-full items-center justify-between'>
            <div>
              <p>Time</p>
              <p>03/05 08:02:08</p>
            </div>
            <div className='text-center'>
              <p>Sales platform</p>
              <p>KuCoin</p>
            </div>
            <div className='text-right'>
              <p>Selling price</p>
              <p>20.8593</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col text-lg  mb-3'>
          <div className='flex w-full items-center justify-between'>
            <div className='w-1/3'>
              <p>Service charge</p>
              <p>0.03</p>
            </div>
            <div className=' w-1/3 text-center'>
              <p>Profit</p>
              <p className='text-green-500'>+0.03</p>
            </div>
            <div className=' w-1/3 text-right'>

            </div>
          </div>
        </div>


      </div>
    </Screen>
  )
}

export default QuantitativeRecords
