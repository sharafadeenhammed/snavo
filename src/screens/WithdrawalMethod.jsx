

import { useState } from 'react'
import { FaAngleRight, FaCoins, FaMoneyBillWave } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


import usdt from "../assets/images/usdt.png"
import history from "../assets/images/quantify/book-history.png"
import Screen from '../components/Screen'
import Back from '../components/Back'
import ToastMessage from '../components/ToastMessage'
import pageAnimation from '../data/pageAnimation'
import routesName from '../data/routesName'
import AppInput from "../components/AppInput"
import ThinSpinner from '../components/ThinSpinner'
import useApi from '../hooks/useApi'
import useUserContext from '../hooks/useUserContext'
import * as withdraw from "../api/withdraw";



function WithdrawalMethod() {
  const navigate = useNavigate();
  const [ address, setAddress ] = useState("")
  const [ amount, setAmount ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false);
  const [ coin, setCoin ] = useState("USDT");
  const [ showToast, setShowToast ] = useState(false)
  const [ message, setMessage ] = useState("")
  const { user } = useUserContext();
  const api = useApi(withdraw.applyForWithdrawal);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      address,
      amount,
      description,
      coin
    }
    // TODO: call api
    const response = await api.callApi(data);
    setIsLoading(false);
    setMessage(response.data.message);
    setShowToast(true);
    setIsLoading(false);
    setTimeout(() => {
      navigate(routesName.WITHDRAW_RECORDS)
    }, 6300)
  }
  return (
    <Screen
      {...pageAnimation}
    >
      <ToastMessage time={6000} handleRemoveToast={() => setShowToast(false)} message={message} showToast={showToast} />

      {isLoading ? <ThinSpinner /> : null}
      <div className=' bg-slate-800 text-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
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
        // onClick={() => navigate(routesName.WITHDRAW)}
        className="w-full cursor-pointer flex items-center justify-between  mb-14 mt-3 px-5 py-3 text-white border-b-2 border-b-slate-700">
        <div className="flex items-center">
          <img className='block h-8  mr-3' src={usdt} alt="" />
          <p className='font-normal text-lg'>{coin}</p>
        </div>
        <div>
          {/* <FaAngleRight size={25} color='gray' /> */}
        </div>
      </div>
      {
        isLoading ? <ThinSpinner /> : null
      }

      <form className='mt-10 text-white' onSubmit={handleSubmit} >
        <p className='mb-5 font-bold text-sm'>Available balance: <span className='text-slate-300'>{parseFloat(user.user.balance).toFixed(2)} {coin}</span></p>
        <AppInput
          LeftIcon={<FaCoins className='mr-2 inline-block' color='#644fdd' size={20} />}
          handleOnChange={(e) => setAddress(e.target.value)}
          placeholder={coin + " Address"}
          value={address}
          type={"text"}
        />
        <AppInput
          handleOnChange={(e) => setAmount(e.target.value)}
          placeholder={"Amount"}
          value={amount}
          type="number"
          LeftIcon={<FaMoneyBillWave className='mr-2 inline-block' color='darkgreen' size={20} />}
        />
        <AppInput
          handleOnChange={(e) => setDescription(e.target.value)}
          placeholder={"description"}
          value={description}
          type="text"
          LeftIcon={<FaMoneyBillWave className='mr-2 inline-block' color='black' size={20} />}
        />
        <input
          className='bg-indigo-600 mt-5 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none border-none text-white text-lg cursor-pointer' type='submit' value="Apply For Withdraw" />
      </form>
    </Screen>
  )
}

export default WithdrawalMethod
