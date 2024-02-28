import React from 'react'
import { motion } from "framer-motion"

function Screen({ style = "", children, ...others }) {
  return (
    <motion.div
      {...others}
      className={"container px-4 pb-20  pt-20 border-x-2 border-slate-100 min-h-screen mx-auto max-w-lg bg-gray-50" + style}>
      {children}
    </motion.div>
  )
}

export default Screen
