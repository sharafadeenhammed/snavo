import { useEffect, useState } from "react"

import Screen from "../components/Screen";
import Back from "../components/Back";
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
      <div className='bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Funding Details</h1>
          </div>
        </div>
      </div>
      <div className="px-3 w-full">
        <div className=" mb-5 border-2 border-slate-300 w-full flex rounded-lg justify-between" >
          <p
            onClick={fetchRewards}
            className={
              fundDetail === "reward" ?
                "text-center text-base rounded-lg py-3 w-1/3 text-white bg-indigo-600" :
                "text-center text-base rounded-lg py-3 w-1/3 text-black"
            }>
            Reward record
          </p>
          <p
            onClick={fetchDeposits}
            className={
              fundDetail === "deposit" ?
                "text-center text-base rounded-lg py-3 w-1/3 text-white bg-indigo-600" :
                "text-center text-base rounded-lg py-3 w-1/3 text-black"
            }>
            Deposit record
          </p>
          <p
            onClick={fetchWithdraws}
            className={
              fundDetail === "withdraw" ?
                "text-center text-base rounded-lg py-3 w-1/3 text-white bg-indigo-600" :
                "text-center text-base rounded-lg py-3 w-1/3 text-black"
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
