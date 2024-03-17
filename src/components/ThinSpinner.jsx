import { motion } from 'framer-motion'
function ThinSpinner() {
  return (
    <motion.div className=' container flex-col flex items-center justify-center min-h-screen mx-auto max-w-xl  bg-black bg-opacity-30 fixed top-0 z-40 -translate-x-4'>
      <div className='h-10 w-10 animate-spin rounded-full border-2 border-transparent border-t-2 border-t-indigo-700 '>

      </div>
    </motion.div>
  )
}

export default ThinSpinner
