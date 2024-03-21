
import { motion } from "framer-motion"
function Spinner() {
  return (
    <motion.div className=' w-screen max-w-lg mx-auto flex-col flex items-center justify-center h-screen bg-slate-800 fixed top-0 right-1/2 z-50 translate-x-1/2 '>
      <div className=' mb-4 h-20 w-20 animate-spin rounded-full border-8 border-transparent border-t-8 border-t-indigo-700 '>

      </div>
      <h2 className="text-3xl font-bold text-indigo-700">Loading...</h2>
    </motion.div>
  )
}

export default Spinner
