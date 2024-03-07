import routesName from "../data/routesName"
function ActionCard({ data, onClick }) {
  const newPath = {
    recharge: routesName.RECHARGE
  }
  return (
    <div onClick={() => onClick && onClick(data.path)} className="flex h-full flex-col items-center justify-center">
      <img className="inline-block h-14 w-14 mb-2" src={data.image} alt="" />
      <p className=" text-slate-600 font-bold text-sm text-center">{data.text}</p>
    </div>

  )
}

export default ActionCard
