import { useState } from 'react'
import { QRCode } from 'react-qrcode-logo';
import { FaAngleRight } from 'react-icons/fa'


import Screen from '../components/Screen'
import Back from '../components/Back'
import ToastMessage from '../components/ToastMessage'
import pageAnimation from '../data/pageAnimation'
import copy from "../assets/images/copy.png"

function Withdraw() {
  const [ toastMessage, setToastMessage ] = useState("");
  const [ showToast, setShowToast ] = useState(false);


  return (
    <Screen
      {...pageAnimation}
    >
      <div className='bg-slate-800 text-white py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <div>
            <Back />
          </div>
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Digital Currency Withdrawal </h1>
          </div>
        </div>
      </div>
    </Screen>
  )
}

export default Withdraw
