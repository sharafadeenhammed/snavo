
function Coincard({ data, icon }) {
  return (
    <div className="p-x-4 w-full py-2 flex items-center justify-between">
      <div className="flex items-center">
        <img className="h-7 w-7 mr-1" src={icon.icon} alt="" />
        <p className=" text-sm font-bold ">{icon.shortName}</p>
      </div>

      <p className="font-bold text-lg text-indigo-700">{data.usd}</p>
      <p className="font-bold text-lg w-28 py-2 text-center text-indigo-700 bg-indigo-100 rounded ">{String(data.usd_24h_change).slice(0, 5)}%</p>

    </div>
  )
}

export default Coincard
