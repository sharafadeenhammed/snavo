import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Screen from "../components/Screen";
import Back from "../components/Back";
import AppInput from "../components/AppInput";
import ToastMessage from "../components/ToastMessage";
import FundDetailItemCard from "../components/FundDetailItemCard";
import ThinSpinner from "../components/ThinSpinner";
import pageAnimation from "../data/pageAnimation";
import noRecord from "../assets/images/no-record.png"

function FundingDetails() {
  useEffect(() => {

  }, [])
  const [ fundDetail, setFundDetail ] = useState("reward")
  const [ data, setData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  async function fetchRewards() {
    setFundDetail("reward")
  }
  async function fetchDeposits() {
    setFundDetail("deposit")
  }
  async function fetchWithdraws() {
    setFundDetail("withdraw")
  }
  return (
    <Screen
      objectStyle={{
        paddingRight: 0,
        paddingLeft: 0
      }}
      {...pageAnimation}>
      {/* <ToastMessage message={toastMessge} showToast={showToast} handleRemoveToast={() => setShowToast(false)} /> */}
      <div className='bg-gray-50 py-1 px-3 z-40 fixed top-0  w-full mx-auto max-w-md'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Funding Details</h1>
          </div>
        </div>
      </div>
      <div className="px-3 w-full">
        <div className=" mb-5 border-2 border-slate-200 w-full flex rounded-lg justify-between" >
          <p
            onClick={fetchRewards}
            className={
              fundDetail === "reward" ?
                "text-center text-lg rounded-lg py-3 w-1/3 text-white bg-indigo-600" :
                "text-center text-lg rounded-lg py-3 w-1/3 text-black"
            }>
            Reward record
          </p>
          <p
            onClick={fetchDeposits}
            className={
              fundDetail === "deposit" ?
                "text-center text-lg rounded-lg py-3 w-1/3 text-white bg-indigo-600" :
                "text-center text-lg rounded-lg py-3 w-1/3 text-black"
            }>
            Deposit record
          </p>
          <p
            onClick={fetchWithdraws}
            className={
              fundDetail === "withdraw" ?
                "text-center text-lg rounded-lg py-3 w-1/3 text-white bg-indigo-600" :
                "text-center text-lg rounded-lg py-3 w-1/3 text-black"
            }>
            Withdraw...
          </p>
        </div>
      </div>

      {/* conten */}
      <div className="">
        <FundDetailItemCard />
      </div>
    </Screen>
  )
}

export default FundingDetails
