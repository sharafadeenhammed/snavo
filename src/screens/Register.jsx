import { useState, useEffect } from "react";
import { FaHeadphones, FaGlobe, FaArrowRight, FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaEnvelope } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import AppInput from "../components/AppInput";
import CountryPicker from "../components/CountryPicker";
import Back from "../components/Back";
import routesName from "../data/routesName";




function Register() {
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])
  const [ passwordType, setPasswordType ] = useState("password");
  const [ confirmPasswordType, setConfirmPasswordType ] = useState("password");
  const [ phone, setPhone ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ code, setCode ] = useState("EJFDS");
  const [ captcha, setCaptcha ] = useState("")
  const [ countryCode, setCountryCode ] = useState("+234")
  const [ openCountryPicker, setOpenCountryPicker ] = useState(false);

  const handleCountryChange = (idd) => {
    setCountryCode(idd)
    setOpenCountryPicker(false)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("captcha: ", captcha);
    const captchValidate = validateCaptcha(captcha)
    console.log(captchValidate)
    if (!captchValidate) return;
    console.log({ phone, password, confirmPassword, code });
  }
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container px-4 py-0.050  pt-20 border-x-2 border-slate-100 h-screen mx-auto max-w-lg bg-gray-50">
      <AnimatePresence>
        {openCountryPicker ? <CountryPicker showPicker={openCountryPicker} handleChange={handleCountryChange} handleClosePicker={() => setOpenCountryPicker(false)} /> : null}

      </AnimatePresence>

      <div className='bg-gray-50 py-5 z-40 fixed top-0  w-full box-border mx-auto max-w-md'>
        <div className="justify-between flex items-center mr-10" >
          <div>
            <Back />
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
      <h1 className='text-center text-3xl font-medium mb-10'>Create Account</h1>
      {/* tagline */}
      <h1 className='text-2xl font-medium mb-2 text-indigo-600 '>
        Register your phone
      </h1>
      <form onSubmit={handleSubmit}>
        {/* input */}
        <div className='mb-5'>
          <AppInput value={phone} handleOnChange={(e) => setPhone(e.target.value)} LeftIcon={<p onClick={() => setOpenCountryPicker(true)} className=" cursor-pointer flex items-center text-indigo-600 font-bold text-lg mr-2">{countryCode} <FaArrowRight size={15} /> </p>} placeholder='Please enter phone number' type="tel" />

          <AppInput value={password} handleOnChange={(e) => setPassword(e.target.value)} LeftIcon={<FaLock size={20} className="mr-2" />} type={passwordType} placeholder='Please enter password' RightIcon={passwordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setPasswordType("password")} size={25} />} />

          <AppInput value={confirmPassword} handleOnChange={(e) => setConfirmPassword(e.target.value)} LeftIcon={<FaLock size={20} className="mr-2" />} type={confirmPasswordType} placeholder='Enter password again' RightIcon={confirmPasswordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setConfirmPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setConfirmPasswordType("password")} size={25} />} />

          <AppInput LeftIcon={<FaEnvelope className="mr-2" size={20} />} disabled value={code} />


          <AppInput value={captcha} handleOnChange={(e) => setCaptcha(e.target.value)} LeftIcon={<FaShieldAlt className="mr-2" size={30} />} placeholder="Please enter verification code" RightIcon={<LoadCanvasTemplateNoReload className="bg-slate-400" />} />

          <input className='bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg' type='submit' value="Register" />

        </div>
      </form>
      <div className="pb-5">
        <p className='text-black mb-10  text-lg'>
          Already have an account? &nbsp;
          <Link to={routesName.LOGIN} className=' outline-none border-none text-indigo-600 font-medium text-lg' >To log in</Link>
        </p>
        <p className='text-black'>
          By registering you agree <Link to="/agreement" className='outline-none border-none text-indigo-600' > Terms of use </Link> And <Link to="/privacy" className='outline-none border-none text-indigo-600' > Privacy Policy </Link>
        </p>
      </div>
    </motion.div>
  )
}

export default Register
