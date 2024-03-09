

import { useState, useEffect } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import ThinSpinner from "../components/ThinSpinner";
import pageAnimation from "../data/pageAnimation";
import noREcord from "../assets/images/no-record.png"
import { AnimatePresence } from "framer-motion";

import NoRecord from "../components/NoRecord";

function WithdrawalRecords() {

  const [ currentTab, setCurrentTab ] = useState("all");
  const [ isLoading, setIsLoading ] = useState(false)
  async function loadData() {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)

  }
  useEffect(() => {
    loadData()
  }, [ currentTab ])

  return (
    <Screen
      objectStyle={{
        padding: 0,
        paddingTop: "50px"
      }}
      {...pageAnimation}>
      <AnimatePresence>
        {isLoading ? <ThinSpinner /> : null}
      </AnimatePresence>
      <div className='bg-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Withdraw history
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-white px-0 py-2">
        <div className=" bg-gray-200 py-3 px-4 w-full flex items-center justify-between mb-5">
          <p className={"mr-10 font-semibold text-base cursor-pointer " + (currentTab === "all" ? "text-indigo-700" : "")} onClick={() => setCurrentTab("all")}>
            All
          </p>

          <p className={"font-semibold text-base cursor-pointer " + (currentTab === "review" ? "text-indigo-700" : "")} onClick={() => {
            setCurrentTab("review")
          }
          }>
            Under review
          </p>

          <p className={"font-semibold text-base cursor-pointer " + (currentTab === "success" ? "text-indigo-700" : "")} onClick={() => {
            setCurrentTab("success")
          }
          }>
            Success
          </p>

          <p className={"font-semibold text-base cursor-pointer " + (currentTab === "fail" ? "text-indigo-700" : "")} onClick={() => {
            setCurrentTab("fail")
          }
          }>
            Fail
          </p>
        </div>

        {currentTab === "all" ?
          <NoRecord /> : null}


        {/* team contribution */}
        {
          currentTab === "review" ?
            <NoRecord /> : null

        }
        {
          currentTab === "success" ?
            <NoRecord /> : null

        }
        {
          currentTab === "fail" ?
            <NoRecord /> : null

        }


      </div>
    </Screen >
  )
}

export default WithdrawalRecords
