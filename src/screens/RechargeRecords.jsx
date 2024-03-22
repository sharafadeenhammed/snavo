

import { useState, useEffect } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import ThinSpinner from "../components/ThinSpinner";
import pageAnimation from "../data/pageAnimation";
import { AnimatePresence } from "framer-motion";
import NoRecord from "../components/NoRecord";
import * as recharge from "../api/recharge";
import useApi from "../hooks/useApi";
import moment from "moment";

function RechargeRecords() {

  const [ currentTab, setCurrentTab ] = useState("All");
  const [ isLoading, setIsLoading ] = useState(false)
  const [ data, setData ] = useState([]);
  const api = useApi(recharge.getRechageRecords);
  async function loadData() {
    setData([]);
    setIsLoading(true);
    const data = await api.callApi(currentTab);
    if (data.ok) setData(data.data.data);
    setIsLoading(false);
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
      <div className='bg-slate-800 text-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Deposit record
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-slate-800 text-white px-0 py-2">
        <div className=" bg-slate-800 py-3 px-4 w-full flex items-center justify-between mb-5">
          <p className={"mr-10 font-semibold text-base cursor-pointer " + (currentTab === "All" ? "text-indigo-700" : "")} onClick={() => setCurrentTab("All")}>
            All
          </p>

          <p className={"font-semibold text-base cursor-pointer " + (currentTab === "Success" ? "text-indigo-700" : "")} onClick={() => {
            setCurrentTab("Success")
          }
          }>
            Success
          </p>

          <p className={"font-semibold text-base cursor-pointer " + (currentTab === "Pending" ? "text-indigo-700" : "")} onClick={() => {
            setCurrentTab("Pending")
          }
          }>
            Pending
          </p>

          <p className={"font-semibold text-base cursor-pointer " + (currentTab === "Failed" ? "text-indigo-700" : "")} onClick={() => {
            setCurrentTab("Failed")
          }
          }>
            Failed
          </p>
        </div>
        <div className="w-full ">
          {
            isLoading ? <ThinSpinner /> : null
          }
          {
            data?.length > 0 && isLoading === false ? (
              <>
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full text-sm border-b-2 px-4 mb-2 border-b-slate-700 py-2 flex items-center justify-between">
                      <p className="w-1/4 text-left flex items-center">
                        <div className={`h-3 mr-1 w-3 rounded-full ${item.status === "Success" ? "bg-green-500" : ""} ${item.status === "Pending" ? "bg-yellow-500" : ""} ${item.status === "Failed" ? "bg-red-500" : ""}`}></div>
                        {item.status}

                      </p>
                      <p className="w-1/4 text-center">
                        {item.rechargeType}
                      </p>
                      <p className="w-1/4 text-center">
                        {parseFloat(item.amount).toFixed(2)}
                      </p>
                      <p className="w-1/4 text-right">
                        {moment(item.updatedAt).fromNow(true)}
                      </p>
                    </div>
                  )
                })}

                {/* <table className="w-full">
                  <thead>
                    <tr>
                      <th >Status</th>
                      <th >Recharge</th>
                      <th >Amount</th>
                      <th >Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr className="text-sm w-full border-b-2 mb-2 border-b-slate-700" key={index}>
                          <td >
                            <p className=" text-left flex items-center">
                              <div className={`h-3 mr-1 w-3 rounded-full ${item.status === "Success" ? "bg-green-500" : ""} ${item.status === "Pending" ? "bg-yellow-500" : ""} ${item.status === "Failed" ? "bg-red-500" : ""}`}></div>
                              {item.status}

                            </p>
                          </td>
                          <td >{item.rechargeType}</td>
                          <td >{parseFloat(item.amount).toFixed(2)}</td>
                          <td >{moment(item.updatedAt).format("YYYY-MM-DD")}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table> */}
              </>
            ) : isLoading === false ? <NoRecord /> : null

          }

        </div>



      </div>
    </Screen >
  )
}

export default RechargeRecords
