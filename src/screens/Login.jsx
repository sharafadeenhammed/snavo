import { useState, useContext } from "react";
import { FaArrowLeft, FaHeadphones, FaGlobe, FaArrowRight, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import AppInput from "../components/AppInput";
import ThinSpinner from "../components/ThinSpinner"
import ToastMessage from "../components/ToastMessage"
import CountryPicker from "../components/CountryPicker";
import routesName from "../data/routesName";
import pageAnimation from "../data/pageAnimation";
import useApi from "../hooks/useApi";
import * as auth from "../api/auth";
import UserContext from "../context/user";
import useUserContext from "../hooks/useUserContext";


function Login() {
  const [ passwordType, setPasswordType ] = useState("password")
  const [ password, setPassword ] = useState("")
  const [ phone, setPhone ] = useState("")
  const [ countryCode, setCountryCode ] = useState("+1")
  const [ openCountryPicker, setOpenCountryPicker ] = useState(false);
  const [ showLoginMessage, setShowLoginMessage ] = useState(false);
  const api = useApi(auth.login);
  const navigate = useNavigate();
  const { user, userDispatch } = useUserContext();
  // console.log("user from login: ", user);
  // set password states
  const setPasswordState = (e) => {
    setPassword(e.target.value);
  }
  // set phone states
  const setPhoneState = (e) => {
    setPhone(e.target.value);
  }
  // set country code
  const handleCountryChange = (idd) => {
    setCountryCode(idd)
    setOpenCountryPicker(false)
  }

  // submit login form
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.callApi({ phone: `${countryCode}${phone}`, password });
    if (!response.ok) return
    setShowLoginMessage(true)
    setTimeout(() => {
      userDispatch({ type: "SET_USER", payload: response.data });
      navigate(routesName.HOME)
    }, 2500);
  }
  return (
    <motion.div
      {...pageAnimation}
      className="container px-4 py-0.050  border-x-2 border-slate-900 h-screen mx-auto max-w-lg bg-slate-800 text-white">
      <AnimatePresence>
        {openCountryPicker ? <CountryPicker showPicker={openCountryPicker} handleChange={handleCountryChange} handleClosePicker={() => setOpenCountryPicker(false)} /> : null}

      </AnimatePresence>
      <ToastMessage time={2000} message={api.data?.message} showToast={api.error} handleRemoveToast={() => api.setError(false)} />
      <ToastMessage time={2000} message={"logged in successfully"} showToast={showLoginMessage} handleRemoveToast={() => {
        setShowLoginMessage(false);
      }} />
      <AnimatePresence>
        {api.isLoading ? <ThinSpinner /> : null}
      </AnimatePresence>
      <div className=' container text-white bg-slate-800 py-5 z-30 fixed top-0 w-full box-border max-w-lg px-2 left-1/2 -translate-x-1/2'>
        <div className="justify-between flex items-center" >
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
      <form onSubmit={handleSubmit} className='mb-5'>
        <AppInput LeftIcon={<p onClick={() => setOpenCountryPicker(true)} className="cursor-pointer flex items-center text-indigo-600 font-bold text-lg mr-2 bg-gray-50">{countryCode} <FaArrowRight size={15} /> </p>} placeholder='Please enter phone number' type="tel" handleOnChange={setPhoneState} />

        <AppInput handleOnChange={setPasswordState} LeftIcon={<FaLock size={20} className="mr-2" />} type={passwordType} placeholder='Please enter password' RightIcon={passwordType === "password" ? < FaEyeSlash color="lightgray" onClick={() => setPasswordType("text")} size={25} /> : <FaEye color="lightgray" onClick={() => setPasswordType("password")} size={25} />} />


        <input className='bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg cursor-pointer' type='submit' value="Log in" />
      </form>

      <div className='flex justify-between'>
        <p className='text-white font-medium text-lg'>Don't you have an account?</p>
        <Link to={routesName.REGISTER} className='text-indigo-600 font-medium text-lg outline-none border-none' >To register</Link>
        <Link to={routesName.FORGOT_PASSWORD} className=' border-none outline-none text-indigo-600 font-medium text-lg'>Forgot the password?</Link>
      </div>
    </motion.div>
  )
}

export default Login
