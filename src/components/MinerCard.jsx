
import routesName from "../data/routesName";
import { useNavigate } from "react-router-dom"
import minerLogo from "../assets/images/miner-logo.png"
function MinerCard() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full text-white py-8" >
      <div className="w-full rounded-lg py-8 px-2 bg-slate-900">
        <div className="flex mb-5">
          <img className="h-10 block mr-2" src={minerLogo} alt="" />
          <p className="font-semibold text-2xl">AI mining machine</p>
        </div>

        <div className="mb-3 flex justify-between items-start w-full">
          <div className="w-1/3 text-center">
            <p>
              Quota
            </p>
            <p className="text-green-500 text-xl font-semibold">0.00</p>
          </div>
          <div className="w-1/3 text-center">
            <p>
              Daily rate of return
            </p>
            <p className=" text-xl font-semibold">2.00%</p>
          </div>
          <div className="w-1/3 text-center ">
            <p >
              Cycle
            </p>
            <p className=" text-xl font-semibold">7(days)</p>
          </div>
        </div>
        <button
          onClick={() => navigate(routesName.MINER_DETAILS)}
          className="w-full outline-none border-none py-3 bg-indigo-500 text-white rounded-xl">
          To buy
        </button>
      </div>
    </div>
  )
}

export default MinerCard
