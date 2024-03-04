
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
function ToastMessage({ message, showToast = false, handleRemoveToast }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleRemoveToast()
    }, 5000)
    return () => {
      clearTimeout(timeout)
    }
  })
  return (
    <AnimatePresence>
      {
        showToast == true ?
          (<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='container h-screen  bg-opacity-0 py-5 z-50 fixed bottom-0 w-full box-border max-w-lg px-2 left-1/2 -translate-x-1/2 flex justify-center items-center'>
            <div className=" max-w-80 rounded-lg p-5 bg-black bg-opacity-75 flex items-center justify-center" >
              <h1 className='w-full text-center text-white'>
                {message}
              </h1>
            </div>
          </motion.div>) : null
      }
    </AnimatePresence>
  )
}

export default ToastMessage
