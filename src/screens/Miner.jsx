

import { useState } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import ThinSpinner from "../components/ThinSpinner";
import pageAnimation from "../data/pageAnimation";
import routesName from "../data/routesName";
import noREcord from "../assets/images/no-record.png"
import { useNavigate } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa";
import headerImg from "../assets/images/quantify/quantify_top_inset.png"

function Miner() {
  return (
    <Screen
      {...pageAnimation}
      objectStyle={{
        padding: 0,
        paddingTop: "50px"
      }}
    >
      <div className="relative">
        <img src={headerImg} />
      </div>

    </Screen>
  )
}

export default Miner
