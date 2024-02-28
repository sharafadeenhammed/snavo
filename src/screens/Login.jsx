import { useState } from "react";
import { FaArrowLeft, FaHeadphones, FaGlobe, FaArrowRight, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import AppInput from "../components/AppInput";
import CountryPicker from "../components/CountryPicker";
import routesName from "../data/routesName";


function Login() {
  const [ passwordType, setPasswordType ] = useState("password")
  const [ countryCode, setCountryCode ] = useState("+234")
  const [ openCountryPicker, setOpenCountryPicker ] = useState(false);
  const handleCountryChange = (idd) => {
    setCountryCode(idd)
    setOpenCountryPicker(false)
  }
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container px-4 py-0.050  border-x-2 border-slate-100 h-screen mx-auto max-w-lg bg-gray-50">
      <AnimatePresence>
        {openCountryPicker ? <CountryPicker showPicker={openCountryPicker} handleChange={handleCountryChange} handleClosePicker={() => setOpenCountryPicker(false)} /> : null}

      </AnimatePresence>
      <div className=' container bg-gray-50 py-5 z-30 fixed top-1 w-full box-border mx-auto max-w-lg'>
        <div className="justify-between flex items-center mr-10" >
          <div>
            <FaArrowLeft size={20} />
          </div>
          <div className='flex items-center'>
            <div className='mr-2 p-2 rounded-full bg-indigo-100'>
              <FaHeadphones size={20} color='#4f46e5' />
            </div>
            <div className='rounded-full bg-indigo-100 p-2'>
              <FaGlobe size={20} color='#4f46e5' />
            </div>
          </div>

        </div>
      </div>

      {/* header */}
      <h1 className='text-center text-3xl font-medium mb-20'>Login Please</h1>
      {/* tagline */}
      <h1 className='text-2xl font-medium mb-2 text-indigo-600 '>
        Phone login
      </h1>
      {/* input */}
      <div className='mb-5'>
        <AppInput LeftIcon={<p onClick={() => setOpenCountryPicker(true)} className="cursor-pointer flex items-center text-indigo-600 font-bold text-lg mr-2 bg-gray-50">{countryCode} <FaArrowRight size={15} /> </p>} placeholder='Please enter phone number' type="tel" />

        <AppInput LeftIcon={<FaLock size={20} className="mr-2" />} type={passwordType} placeholder='Please enter password' RightIcon={passwordType === "password" ? < FaEyeSlash color="lightgray" onClick={() => setPasswordType("text")} size={25} /> : <FaEye color="lightgray" onClick={() => setPasswordType("password")} size={25} />} />


        <input className='bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg' type='submit' value="Log in" />
      </div>

      <div className='flex justify-between'>
        <p className='text-black font-medium text-lg'>Don't you have an account?</p>
        <Link to={routesName.REGISTER} className='text-indigo-600 font-medium text-lg outline-none border-none' >To register</Link>
        <Link to={routesName.FORGOT_PASSWORD} className=' border-none outline-none text-indigo-600 font-medium text-lg'>Forgot the password?</Link>
      </div>
    </motion.div>
  )
}

export default Login
