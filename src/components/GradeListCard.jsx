import { FaAngleRight } from "react-icons/fa"

import crown from "../assets/images/profile_crown.png"

function GradeListCard({ data }) {
  return (
    <div className="w-full text-white rounded-lg bg-slate-900 my-3 py-5">
      <div className="w-full flex justify-between items-center px-2 ">
        <div className="relative">
          <p className=" rounded-2xl text-lg font-bold py-1 px-3 text-red-950 bg-amber-200 "> {data.title} </p>
          <img className="h-5 absolute -top-2 -right-3" src={crown} alt="" />
        </div>
        <div className="text-center">
          <p className="text-slate-400">Balance</p>
          <p className=" font-bold"> {data.balance}</p>
        </div>
        <div className="text-center">
          <p className="text-slate-400">Daily rate</p>
          <p className=" font-bold">{data.dailyRate} </p>
        </div>
        <div className="text-center">
          <p className="text-slate-400">Times</p>
          <p className=" font-bold">{data.times} </p>
        </div>
      </div>
      {
        data.body !== null ?
          <div className="w-full border-t-2 border-t-slate-800 mt-4">
            <p className=" px-5 py-2 text-slate-400">
              {data.body}
            </p>
          </div> : null
      }
    </div>
  )
}

export default GradeListCard
