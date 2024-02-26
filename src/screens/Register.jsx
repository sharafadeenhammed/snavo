import { useState, useEffect } from "react";
import { FaArrowLeft, FaHeadphones, FaGlobe, FaArrowRight, FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaEnvelope } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


// import } from "react-icons/ai"

import AppInput from "../components/AppInput";




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
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("captcha: ", captcha);
    const captchValidate = validateCaptcha(captcha)
    console.log(captchValidate)
    if (!captchValidate) return;
    console.log({ phone, password, confirmPassword, code });
  }
  return (
    <div className="container px-4 py-0.050  pt-20 border-x-2 border-slate-100 h-screen mx-auto max-w-md bg-gray-50">

      <div className='bg-gray-50 py-5 z-40 fixed top-0  w-full box-border mx-auto max-w-md'>
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
      <h1 className='text-center text-3xl font-medium mb-10'>Create Account</h1>
      {/* tagline */}
      <h1 className='text-2xl font-medium mb-2 text-indigo-600 '>
        Register your phone
      </h1>
      <form onSubmit={handleSubmit}>
        {/* input */}
        <div className='mb-5'>
          <AppInput value={phone} handleOnChange={(e) => setPhone(e.target.value)} LeftIcon={<p className="flex items-center text-indigo-600 font-bold text-lg mr-2">{countryCode} <FaArrowRight size={15} /> </p>} placeholder='Please enter phone number' type="tel" />

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
          <span className='text-indigo-600 font-medium text-lg' >To log in</span>
        </p>
        <p className='text-black'>
          By registering you agree <span className='text-indigo-600' > Terms of use </span> And <span className='text-indigo-600' > Privacy Policy </span>
        </p>
      </div>
    </div>
  )
}

export default Register
