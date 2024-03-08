

import { useState } from "react"
import Screen from "../components/Screen";
import ThinSpinner from "../components/ThinSpinner";
import MinerCard from "../components/MinerCard";
import pageAnimation from "../data/pageAnimation";
import routesName from "../data/routesName";
import { useNavigate } from "react-router-dom"
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import headerImg from "../assets/images/quantify/quantify_top_inset.png"
import minerLogo from "../assets/images/miner-logo.png"
import { AnimatePresence, motion } from "framer-motion";
import MinerCommonProblemCard from "../components/MinerCommonProblemCard";
import commonProblem from "../data/minerCommonProblem"


function Miner() {
  const navigate = useNavigate()
  const [ showIllustrate, setShowIllustrate ] = useState(false)
  return (
    <Screen
      {...pageAnimation}
      objectStyle={{
        padding: 0,
        marginTop: 0,
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
      }}
    >
      <div className="h-80 w-full relative mb-5">
        <img className=" h-full inline-block object-cover" src={headerImg} />
        <div onClick={() => navigate(-1)} className=" px-3 flex items-center absolute top-5 left-0 ">
          <FaAngleLeft color="ffffff" size={40} className="mr-2" />
          <p className="text-white text-xl">Funds in custody</p>
        </div>
        <div className="px-3 flex items-center absolute top-20 left-0 ">
          <p className="text-white text-3xl">0.00 <span className="text-xl font-semibold">USDT</span></p>
        </div>
        <div className="px-3 border-t-2 border-b-2 border-l-2 rounded-l-3xl  flex items-center absolute top-16 right-0 ">
          <p onClick={() => setShowIllustrate(true)} className="text-white text-2xl">Illustrate</p>
          <FaAngleRight color="ffffff" size={40} className="ml-1" />
        </div>
        <div className="text-white absolute top-36 left-0 flex justify-between items-start w-full">
          <div className="w-1/3 text-center">
            <p>
              Estimated Earnings Today
            </p>
            <p className="text-green-500 text-xl font-semibold">0.00</p>
          </div>
          <div className="w-1/3 text-center">
            <p>
              Cumulative income
            </p>
            <p className="text-white text-xl font-semibold">0.00</p>
          </div>
          <div className="w-1/3 text-center ">
            <p >
              Orders in Escrow
            </p>
            <p className="text-white text-xl font-semibold">0</p>
          </div>
        </div>
        <div className="w-full px-5 absolute bottom-5 left-0 bg-transparent">
          <div onClick={() => navigate(routesName.MINER_ORDERS)} className="border-2 border-white rounded-xl py-3 flex justify-center">
            <p className="text-white text-xl font-semibold">Order details</p>
          </div>
        </div>
      </div>

      <div className="px-5 w-full">
        {/* <MinerCard /> */}
        <MinerCard />

        <MinerCard />
      </div>

      <div className="w-full px-5">
        <p className="text-2xl font-semibold mb-5">Common problem</p>
        {commonProblem.map((data, index) => <MinerCommonProblemCard data={data} key={index} />)}
      </div>

      <AnimatePresence>
        {
          showIllustrate ?
            <motion.div

              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "linear" }}
              className=' backdrop-blur-sm bg-transparent container min-h-screen fixed top-0  w-full mx-auto max-w-lg z-40 b bottom-0 overflow-y-visible'>

              <div
                id="illustrate"
                onClick={(e) => {
                  e.target.id === "illustrate" && setShowIllustrate(false)
                }}
                className=" rounded-t-3xl h-full relative w-full pt-20">

                <div
                  className=" text-slate-400 text-lg py-5 px-5 pt-16  bottom-0 overflow-y-scroll left-0 w-full absolute h-5/6 rounded-t-3xl bg-white  scroolBar ">

                  <p className="mb-4 text-black font-bold text-3xl">
                    What is Snavo Cloud Miner?
                  </p>
                  <p>

                    Snavo cloud mining machine is a tool product created by the company to help users quickly pledge on the chain to obtain rewards. By staking digital assets on the blockchain network, and obtaining rewards based on the POS (Proof of Stake) mechanism. In this mechanism, users entrust digital assets to nodes, and nodes exercise rights such as producing blocks and packaging transactions on the blockchain and receive rewards. Users share the rewards obtained by nodes in proportion to the number of locked positions.
                  </p>
                  <br />
                  <p className="mb-4 text-black font-bold text-3xl">
                    Product advantages
                  </p>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-black mr-3"></div>
                    <p className="text-black font-xl">Robust</p>
                  </div>
                  <p>
                    Snavo cloud mining machines can obtain relatively stable rewards from third parties, and the product term is diverse.
                  </p>
                  <br />
                  <p className="mb-4 text-black font-bold text-3xl">
                    Investing in interest-earning assets
                  </p>
                  <p>
                    Snavo cloud mining machine is to pledge your digital assets on the blockchain to support the operation of the blockchain network and get corresponding rewards.
                  </p>
                  <br />
                  <p className="mb-4 text-black font-bold text-3xl">
                    Income statement
                  </p>
                  <p>
                    After successful subscription on T day, the interest rate will start at 00:00 on T+1 day, and the interest will be settled at 02:00.
                  </p>

                  <p className="mb-4 text-black font-bold text-3xl">
                    Transaction description
                  </p>
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-black mr-3"></div>
                    <p className="text-black font-xl">Buying rules</p>
                  </div>
                  <p>Subscription is supported at any time.</p>
                  <br />
                  <p className="mb-4 text-black font-bold text-3xl">
                    Risk warning
                  </p>
                  <p>
                    If you redeem a regular product in advance, the system will deduct part of the income already obtained from the order.
                  </p>

                </div>
                <div className="flex px-3 justify-end py-5 items-center rounded-t-3xl absolute top-204 bg-white w-full">
                  <FaTimes size={30} onClick={() => setShowIllustrate(false)} />
                </div>

              </div>
            </motion.div> : null
        }
      </AnimatePresence>
    </Screen>
  )
}

export default Miner
