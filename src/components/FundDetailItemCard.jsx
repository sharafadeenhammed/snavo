
function FundDetailItemCard({ data }) {
  return (
    <div className="w-full px-3  py-5 border-b-2 border-b-slate-200">
      <div className="flex justify-between">
        <p className="text-2xl font-normal">
          USDT
        </p>
        <p className="text-green-500 text-xl font-semibold">
          +3 USDT
        </p>
      </div>
      <p className="text-lg my-2">Sign up bonus</p>
      <p className="text-lg ">2024/03/Su 08:57:47</p>
    </div>
  )
}

export default FundDetailItemCard
