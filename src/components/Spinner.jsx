
import { motion } from "framer-motion"
function Spinner() {
  return (
    <motion.div className=' container flex-col flex items-center justify-center min-h-screen mx-auto max-w-xl -translate-x-10 bg-white pl-16 fixed top-0 z-40'>
      <div className=' mb-4 h-20 w-20 animate-spin rounded-full border-8 border-white border-t-8 border-t-indigo-700 '>

      </div>
      <h2 className="text-3xl font-bold text-indigo-700">Loading...</h2>
    </motion.div>
  )
}

export default Spinner
