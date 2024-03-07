

import { color } from "framer-motion"
import { useState } from "react"
import { FaAngleDown, FaAngleRight } from "react-icons/fa"
function MinerCommonProblemCard({ data }) {

  const [ showContent, setShowContent ] = useState(false)
  return (
    <div className="w-ful my-10">
      <div onClick={() => setShowContent(!showContent)} className="w-full m-0 mb-5 px-2 flex items-baseline relative">
        <div className="h-3 w-3 bg-black mr-2"></div>
        <p className="text-xl">
          {data.title}
        </p>
        <div className="absolute right-0">
          {
            showContent ? <FaAngleDown size={30} color="darkgray" /> :
              <FaAngleRight size={30} color="darkgray" />
          }
        </div>
      </div>
      {
        showContent ?
          <p className="m-0 text-lg text-slate-500">
            {data.body}
          </p> : null
      }


    </div>
  )

}

export default MinerCommonProblemCard
