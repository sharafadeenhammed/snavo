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
      }} className=" sm:px-4 px-6 h-screen max-w-lg fixed right-1/2 top-0 w-full bg-black bg-opacity-75 translate-x-1/2 z-50 ">
      <div
        id="ann1"
        onClick={(e) => {
          if (e.target.id === "ann1") {
            close()
          }
        }}
        className="relative p-20 w-full h-full flex items-center justify-center">
        <div className="bg-white absolute pt-28 rounded-md">
          <div className="mb-20 absolute -top-16  -left-1">
            <img src={headerImage} alt="" />
          </div>
          <p className="px-5 font-bold text-lg">
            Register as a new user and get <span className="text-red-500">3 USDT</span>

            <br /><br />
            (1) Invite subordinates to recharge 50USDT for the first time, and superiors can receive <span className="text-red-500">3USDT!</span>

            <br /><br />

            (2) Invite subordinates to recharge 100 USDT for the first time, and superiors can receive <span className="text-red-500">7 USDT!</span>

            <br /><br />

            (3) Please contact the product manager to receive the reward!



            <br /><br />

            &nbsp; Please consult SNAVO online customer service for more details!
            <br /><br />
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
