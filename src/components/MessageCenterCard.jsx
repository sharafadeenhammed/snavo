
import { useNavigate } from "react-router-dom"
import routesName from "../data/routesName"

function MessageCenterCard() {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`${routesName.MESSAGE_DETAILS}/id`)} className="w-full px-5 py-2 text-white border-b-2 border-b-slate-200 ">
      <p className="text-lg font-bold mb-1">Dear SNAVO global participants!</p>
      <p className="mb-2">Golden Week invitation bonus event (1) New users who register...</p>
      <p className="text-slate-400 text-xl">2024/0303 08:00</p>
    </div>
  )
}

export default MessageCenterCard
