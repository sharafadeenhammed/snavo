import { motion } from 'framer-motion'
function ThinSpinner() {
  return (
    <motion.div className=' container flex-col flex items-center justify-center min-h-screen mx-auto max-w-xl -translate-x-10 bg-black bg-opacity-75 pl-16 fixed top-0 z-40'>
      <div className='h-10 w-10 animate-spin rounded-full border-2 border-white border-t-2 border-t-indigo-700 '>

      </div>
    </motion.div>
  )
}

export default ThinSpinner
