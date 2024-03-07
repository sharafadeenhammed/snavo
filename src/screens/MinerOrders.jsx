


import Screen from '../components/Screen'
import Back from '../components/Back'
import pageAnimation from '../data/pageAnimation'

function MinerOrders() {
  return (
    <Screen
      {...pageAnimation}
    >
      <div className='bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" w-full flex items-center justify-between" >
          <div>
            <Back />
          </div>
          <h1 className='text-center text-2xl font-medium'>
            Escrow order
          </h1>
          <div onClick={() => navigate(routesName.QUANTITATIVE_RECORDS)}>
            <img className='h-8' src={history} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full text-center ">
        no  more
      </div>
    </Screen>
  )
}

export default MinerOrders
