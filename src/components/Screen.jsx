import React from 'react'
import { motion } from "framer-motion"

function Screen({ style = "", children, objectStyle, ...others }) {
  return (
    <motion.div
      style={objectStyle}
      {...others}
      className={"container relative px-4 pb-20  pt-20 border-x-2 border-slate-100 min-h-screen mx-auto max-w-lg bg-gray-200" + style}>
      {children}
    </motion.div>
  )
}

export default Screen
