import { motion } from 'framer-motion'
function ThinSpinner() {
  return (
    <motion.div className=' flex-col flex items-center justify-center bg-black bg-opacity-30  max-w-lg min-h-screen w-screen fixed top-0 right-1/2 z-50 translate-x-1/2 '>
      <div className='h-10 w-10 animate-spin rounded-full border-2 border-transparent border-t-2 border-t-indigo-700 '>

      </div>
    </motion.div>
  )
}

export default ThinSpinner
