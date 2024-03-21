
import Screen from '../components/Screen'
import Back from '../components/Back'
import pageAnimation from '../data/pageAnimation'

import minerLogo from "../assets/images/miner-logo.png"
function MinerDetails() {
  return (
    <Screen
      {...pageAnimation}
      objectStyle={{
        padding: 0,
      }}
    >
      <div className='bg-indigo-600 py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2 '>
        <div className=" w-full flex items-center justify-between" >
          <div>
            <Back color="#ffffff" />
          </div>
          <h1 className='text-center text-2xl text-white font-medium'>
            Details
          </h1>
          <div onClick={() => navigate(routesName.QUANTITATIVE_RECORDS)}>
            <img className='h-8' src={history} alt="" />
          </div>
        </div>
      </div>

      <div className="mb-0 w-full pt-24 text-center text-white bg-indigo-600 ">
        <div className=' w-full px-5 flex items-center justify-between mb-10'>
          <div className='flex items-center'>
            <img className=' block rounded-lg h-16 mr-3' src={minerLogo} alt="" />
            <p className=' font-normal text-xl'>
              ATMASLIFE INVESTMENT
              <br />
              machine
            </p>
          </div>
          <p className='text-right font-normal text-xl'>
            ROI
            <br />
            <span className='text-orange-400'>2.00%</span>
          </p>

        </div>

        <div className=' py-5 px-5 w-full flex items-center justify-between bg-opacity-20 bg-blue-500'>
          <p className='text-2xl font-normal'>
            7(Day)
            <br />
            <span className='text-slate-400 text-lg'>ROI cycle</span>
          </p>
          <p className='text-2xl font-normal'>
            100.00
            <br />
            <span className='text-slate-400 text-lg'>Single minimum</span>
          </p>
          <p className='text-2xl font-normal'>
            1000.00
            <br />
            <span className='text-slate-400 text-lg'>Single most</span>
          </p>
        </div>
      </div>

      {/* content */}
      <div className='w-full min-h-screen bg-slate-800 px-5 pt-5'>

        <div className='  bg-slate-900 mb-10 w-full px-3 py-5 rounded-lg'>
          <div className='flex items-start justify-between'>
            <p className='text-lg text-center text-slate-400  font-normal'>
              Dividend time
              <br />
              <span className='text-lg text-white'>Daily</span>
            </p>
            <p className='text-lg text-center text-slate-400  font-normal'>
              ROI funds
              <br />
              <span className='text-lg text-white'>Return due</span>
            </p>
            <p className='text-lg text-center text-slate-400  font-normal'>
              Early redemption
              <br />
              <span className='text-lg text-white'>55.00%</span>
            </p>
          </div>
        </div>

        <div className='bg-slate-900 mb-5 min-h-full w-full px-10 py-5 rounded-lg'>
          <div className='flex items-end justify-between'>
            <p className='text-base text-start text-slate-400  font-normal'>
              Estimated <br /> income(USDT)
              <br />
              <span className=' text-indigo-600'>0.00</span>
            </p>
            <p className='text-base text-end text-slate-400  font-normal'>
              Available assets(USDT)
              <br />
              <span className=' text-white'>3.12</span>
            </p>
          </div>
        </div>

        <div className='bg-slate-900 text-white mb-5 min-h-full w-full px-5 py-5 rounded-lg'>
          <p className='text-xl mb-5'>Escrow amount</p>
          <div className='rounded-lg relative flex w-full border-2 border-slate-300'>
            <input placeholder='0.00' pla className=' text-lg rounded-lg w-full outline-none text-black  placeholder-slate-300 h-full px-2 py-3' type="text" />

            <div className=' bg-white flex items-center -translate-y-1/2 absolute right-0 pr-10 top-1/2 text-slate-400 font-semibold text-lg'>
              <p className='px-4 border-r-2  border-r-slate-300 mr-2 '>USDT</p>
              <p className=' underline  text-indigo-700 cursor-pointer'>All</p>

            </div>
          </div>
        </div>

        <button className='bg-indigo-600 text-xl text-white w-full py-3 rounded-xl'>
          Apply for subscription
        </button>

      </div>
    </Screen>
  )
}

export default MinerDetails
