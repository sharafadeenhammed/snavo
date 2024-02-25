import { useState } from "react";
import { FaArrowLeft, FaHeadphones, FaGlobe, FaArrowRight, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

import AppInput from "../components/AppInput";



function Login() {
  const [ passwordType, setPasswordType ] = useState("password")
  const [ countryCode, setCountryCode ] = useState("+234")
  return (
    <div className="container px-4 py-0.050  border-x-2 border-slate-100 h-screen mx-auto max-w-md bg-gray-50">
      <div className='bg-gray-50 py-5 z-50 fixed top-1 w-full box-border mx-auto max-w-md'>
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
        <AppInput LeftIcon={<p className="flex items-center text-indigo-600 font-bold text-lg mr-2 bg-gray-50">{countryCode} <FaArrowRight size={15} /> </p>} placeholder='Please enter phone number' type="tel" />

        <AppInput LeftIcon={<FaLock size={30} className="mr-2" />} type={passwordType} placeholder='Please enter password' RightIcon={passwordType === "password" ? < FaEyeSlash color="lightgray" onClick={() => setPasswordType("text")} size={25} /> : <FaEye color="lightgray" onClick={() => setPasswordType("password")} size={25} />} />


        <input className='bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg' type='submit' value="Log in" />
      </div>

      <div className='flex justify-between'>
        <p className='text-black font-medium text-lg'>Don't you have an account?</p>
        <p className='text-indigo-600 font-medium text-lg' >To register</p>
        <p className='text-indigo-600 font-medium text-lg'>Forgot the password?</p>
      </div>
    </div>
  )
}

export default Login
