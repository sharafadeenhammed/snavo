


import { useState, useEffect } from 'react'
import { QRCode } from 'react-qrcode-logo';

import Screen from '../components/Screen'
import Back from '../components/Back'
import ToastMessage from '../components/ToastMessage'
import pageAnimation from '../data/pageAnimation'
import copy from "../assets/images/copy.png"
import ThinSpinner from "../components/ThinSpinner"
import NoRecord from "../components/NoRecord"
import * as coin from "../api/coin"
import useApi from "../hooks/useApi"
import useUserContext from "../hooks/useUserContext"
import { useLocation } from 'react-router-dom';


function Recharge() {
  const [ toastMessage, setToastMessage ] = useState("");
  const [ showToast, setShowToast ] = useState(false);
  const [ rechargeAddress, setRechargeAddress ] = useState("")
  const [ chainName, setChainName ] = useState("TRC-20");
  const location = useLocation();
  const api = useApi(coin.getCoinAddress);

  async function getCoinAddress() {
    const response = await api.callApi({ coin: location.state.coinName });
    if (response.ok) {
      console.log(response.data.address);
      setRechargeAddress(response.data.address);
      setChainName(location.state.coinName);
    }
  }

  useEffect(() => {
    getCoinAddress();
  }, [])

  function copyLink() {
    if (!rechargeAddress) return;
    navigator.clipboard.writeText(rechargeAddress);
    setToastMessage("Copy successfully");
    setShowToast(true);
  }

  return (
    <Screen

      {...pageAnimation}
    >

      <ToastMessage message={toastMessage} showToast={showToast} handleRemoveToast={() => setShowToast(false)} />
      <div className='bg-slate-800 text-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <div>
            <Back />
          </div>
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Recharge </h1>
          </div>
        </div>
      </div>

      {api.isLoading ? <ThinSpinner /> : null}

      {rechargeAddress !== "" ?
        <div className='w-full bg-slate-800 text-white'>
          <p className='text-xl font-bold'>Chain name</p>
          <p className='ml-10 my-2 text-lg text-center w-28 bg-indigo-600 text-white p-2'>
            {chainName}
          </p>
          <div className=' my-3 flex flex-col  items-center'>
            <div className='p-5 border-2 border-indigo-500 mb-7'>
              <QRCode size={200} value={rechargeAddress || "null"} />
            </div>
            <p className='text-lg font-semibold'>
              Scan QR code transfer to recharge
            </p>
          </div>

          <div className='w-full px-1 mb-5' >
            <div className='flex flex-wrap px-1 py-3 w-full
        items-center justify-between bg-indigo-600 text-slate-100' >
              <p className=' text-base text-wrap text-left'>
                {rechargeAddress}
              </p>
              <div className=''>
                <img className='h-5 cursor-pointer block' onClick={copyLink} src={copy} alt="" />
              </div>
            </div>
          </div>



          <div className='text-lg px-10 font-medium'>
            <p className='text-indigo-600 text-lg'>
              <span className='font-bold'>Notice:</span>
              <br />
              1. The deposit address is USDT-TRC20, please check carefully before depositing.
              <br />
              2. The minimum recharge amount is 30USDT, and the amount below 30USDT will not be credited.
              <br />
              3. After the recharge is successful, it will automatically reach the account within 3-5 minutes.
              <br />
              4. You need to obtain the latest recharge address every time you recharge, please do not save the recharge address multiple times
              <br />
            </p>
          </div>
        </div> : !api.isLoading && <NoRecord />}
    </Screen>
  )
}

export default Recharge
