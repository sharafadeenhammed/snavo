import { motion } from "framer-motion";
import headerImage from "../assets/images/snavo_ann.png";
import { FaTimes } from "react-icons/fa";
function Announcement({ close }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      id="ann"
      onClick={(e) => {
        if (e.target.id === "ann") {
          close()
        }
      }} className=" px-6 h-screen max-w-lg fixed right-1/2 top-0 w-full bg-black bg-opacity-75 translate-x-1/2 z-50 ">
      <div
        id="ann1"
        onClick={(e) => {
          if (e.target.id === "ann1") {
            close()
          }
        }}
        className="relative px-32 p-20 w-full h-full flex items-center justify-center">
        <div className="bg-slate-800 text-white absolute pt-16 rounded-md">
          {/* <div className=" absolute -top-16  -left-1">
            <img src={headerImage} alt="" />
          </div> */}
          <p className="px-5 font-bold text-lg">
            Register as a new user and get <span className="text-red-500">3 USDT</span>

            <div className="mb-3"></div>
            (1) Invite subordinates to recharge 50USDT for the first time, and superiors can receive <span className="text-red-500">3USDT!</span>

            <div className="mb-3"></div>

            (2) Invite subordinates to recharge 100 USDT for the first time, and superiors can receive <span className="text-red-500">7 USDT!</span>

            <div className="mb-3"></div>

            (3) Please contact the product manager to receive the reward!



            <div className="mb-3"></div>

            &nbsp; Please consult ATMASLIFE online customer service for more details!
            <div className="mb-3"></div>
          </p>
          <div onClick={() => close()} className=" text-white absolute h-7 w-7 -bottom-8 left-1/2 flex items-center justify-center border-2 border-white rounded-full">
            <FaTimes />
          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default Announcement
