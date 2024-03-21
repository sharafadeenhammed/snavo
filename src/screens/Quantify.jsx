
import { useState } from 'react'
import { Slide } from "react-slideshow-image"
import { FaLock, FaLockOpen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import 'react-slideshow-image/dist/styles.css'

import Screen from '../components/Screen'
import Back from '../components/Back'
import ToastMessage from '../components/ToastMessage'
import Announcement from '../components/Announcement'
import pageAnimation from '../data/pageAnimation'
import quantifyData from '../data/quantifyData'
import routesName from '../data/routesName'
import useUserContext from '../hooks/useUserContext'

import history from "../assets/images/quantify/book-history.png"
import topInset from "../assets/images/quantify/quantify_top_inset.png"
import vipDiamond from "../assets/images/quantify/vip-diamond.png"


function Quantify() {
  const textClass = "text-xl font-semibold mb-5"
  const [ currentItem, setCurrentItem ] = useState(0)
  const [ showAnnouncement, setShowAnnouncement ] = useState(true);
  const navigate = useNavigate()
  const { user } = useUserContext();
  return (
    <Screen
      {...pageAnimation}
    >
      <AnimatePresence>
        {
          showAnnouncement ? < Announcement close={() => setShowAnnouncement(false)} /> : null

        }

      </AnimatePresence>
      <div className=' bg-slate-800 text-white py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" w-full flex items-center justify-between" >
          <div>
            <Back />
          </div>
          <h1 className='text-center text-2xl font-medium'>
            Investment trading
          </h1>
          <div onClick={() => navigate(routesName.QUANTITATIVE_RECORDS)}>
            <img className='h-8' src={history} alt="" />
          </div>
        </div>
      </div>
      {/* section one */}
      <div className='relative mb-5' >
        <img className='block h-48 w-full object-cover rounded-xl' src={topInset} alt="" />
        <div className='absolute flex flex-col justify-between px-3 py-5 top-0 left-0 bg-transparent w-full h-full'>
          <p className='text-white font-normal text-2xl'>
            Funds
          </p>
          <p className='text-white font-normal text-3xl'>
            {parseFloat(user.user.balance).toFixed(2)} <span className='text-lg font-semibold'>USDT</span>
          </p>
          <div className='w-full flex justify-between '>
            <p
              onClick={() => navigate(routesName.QUANTITATIVE_RECORDS)}
              className='text-white font-normal text-xl border-2 border-white px-10 py-1 rounded-3xl ' >
              Details
            </p>
            {/* <p onClick={() => navigate(routesName.MY_TEAM)} className='text-white font-normal text-xl border-2 border-white px-10 py-1 rounded-3xl ' >
              Team
            </p> */}
          </div>
        </div>
      </div>

      {/* section two */}
      <div className="mb-5 text-white w-full px-5 py-7 rounded-xl bg-slate-900">
        <div className="flex py-7 justify-between items-center" >
          {/* todays earning */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.06
            </p>
            <p className="text-slate-400 text-center font-normal">
              Today's earning
            </p>
          </div>

          {/* monthly income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.09
            </p>
            <p className="text-slate-400 text-center font-normal">
              Monthly income
            </p>
          </div>

          {/* total income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.09
            </p>
            <p className="text-slate-400 text-center font-normal">
              Total income
            </p>
          </div>
        </div>

        {/* second row */}
        <div className="flex py-7 justify-between items-center" >
          {/* todays team */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.00
            </p>
            <p className="text-slate-400 text-center font-normal">
              Today's team
            </p>
          </div>

          {/* team of the month */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.09
            </p>
            <p className="text-slate-400 text-center font-normal">
              Team of the month
            </p>
          </div>

          {/* team income */}
          <div className="flex items-center flex-col" >
            <p className="font-bold text-xl">
              0.09
            </p>
            <p className="text-slate-400 text-center font-normal">
              Team income
            </p>
          </div>
        </div>
        <div className=' w-full flex justify-center'>
          <p
            className="text-indigo-600 cursor-pointer text-xl px-5 py-3 rounded-3xl bg-indigo-100">
            Initiate Trading Bot
          </p>

        </div>
      </div>

      {/* section three */}
      <div className='w-full text-white flex my-5 items-center'>
        <img className='h-8' src={vipDiamond} alt="" />
        <p className='ml-2 font-semibold text-xl'>Investment level</p>
      </div>
      <div className='w-full px-2 mb-5'>
        <Slide
          slidesToShow={1}
          infinite={false}
          autoplay={false}
          canSwipe={true}
          arrows={false}
          pauseOnHover={false}
          onChange={(oldIndex, newIndex) => {
            setCurrentItem(newIndex)
          }}
          duration={3000}
          transitionDuration={400}
          easing="linear"
        >
          {
            quantifyData.map((item, index) => (
              <div
                className="relative flex justify-center"
                key={index}
              >
                <div className='absolute top-5 left-10'>
                  {
                    user.user.rank === index ?
                      <FaLockOpen size={20} color='#ffffff' /> :
                      <FaLock size={20} color='#ffffff' />
                  }
                </div>
                <img
                  className="inline-block w-11/12 rounded-xl"
                  src={item.image}
                />
              </div>
            ))
          }

        </Slide>
      </div>

      {/* quatization level */}
      <div className='w-full text-white bg-slate-900 p-5 rounded-xl mb-5'>
        <p className='font-bold text-2xl mb-5 '>
          {quantifyData[ currentItem ].data.header}
        </p>
        <div className="flex justify-between text-xl">
          <p className='text-slate-500'>Balance</p>
          <p className=' font-normal '>
            {quantifyData[ currentItem ].data.balance}
          </p>
        </div>
        {
          quantifyData[ currentItem ].data.notice && <p className='text-slate-500'>{quantifyData[ currentItem ].data.notice}</p>
        }
      </div>

      {/* benefits */}
      <div className='w-full text-white bg-slate-900 py-5 px-7 rounded-xl'>
        <p className='font-bold text-2xl mb-5 '>
          {quantifyData[ currentItem ].data.benefits.header}
        </p>
        <div className="flex justify-between text-xl">
          <p className='text-slate-500'>
            Minimum Quantization Quantity
          </p>
          <p className=' font-normal  '>
            {quantifyData[ currentItem ].data.benefits.minQuantity}
          </p>
        </div>
        <div className="flex justify-between text-xl">
          <p className='text-slate-500'>
            Maximum Quantization Quantity
          </p>
          <p className=' font-normal '>
            {quantifyData[ currentItem ].data.benefits.maxQuantity}
          </p>
        </div>
        <div className="flex justify-between text-xl">
          <p className='text-slate-500'>
            Quantification times per day
          </p>
          <p className=' font-normal '>
            {quantifyData[ currentItem ].data.benefits.quantPerDay}
          </p>
        </div>
        <div className="flex justify-between text-xl">
          <p className='text-slate-500'>
            Daily rate
          </p>
          <p className=' font-normal text-xl '>
            {quantifyData[ currentItem ].data.benefits.dailyRate}
          </p>
        </div>
      </div>
    </Screen >
  )
}

export default Quantify
