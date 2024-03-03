
function Coincard({ data, icon }) {
  return (
    <div className="p-x-4 w-full py-2 flex items-center justify-between">
      <div className="flex items-center">
        <img className="h-7 w-7 mr-1" src={icon.icon} alt="" />
        <p className=" text-lg font-bold ">{icon.shortName}</p>
      </div>

      <p className="font-bold text-xl text-indigo-700">{data.usd}</p>
      <p className="font-bold text-xl w-32 py-2 text-center text-indigo-700 bg-indigo-100 rounded ">{String(data.usd_24h_change).slice(0, 5)}%</p>

    </div>
  )
}

export default Coincard
