import { useState } from "react";
import { FaArrowRight, FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaEnvelope } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";


import AppInput from "../components/AppInput";
import Back from "../components/Back";
import CountryPicker from "../components/CountryPicker";
import pageAnimation from "../data/pageAnimation";
import ThinSpinner from "../components/ThinSpinner";
import * as auth from "../api/auth"
import useApi from "../hooks/useApi"
import ToastMessage from "../components/ToastMessage";


function ForgotPassword() {
  const [ passwordType, setPasswordType ] = useState("password");
  const [ confirmPasswordType, setConfirmPasswordType ] = useState("password");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ code, setCode ] = useState("");
  const [ countryCode, setCountryCode ] = useState("+1");
  const [ recoveryType, setRecoveryType ] = useState("phone");
  const [ reqestCodeText, setRequestCodeText ] = useState("Send verification code")
  const [ countDown, setCountDown ] = useState(10);
  const [ openCountryPicker, setOpenCountryPicker ] = useState(false);
  const [ message, setMessage ] = useState("");
  const [ showToast, setShowToast ] = useState(false);
  const requestTokenApi = useApi(auth.requestPasswordResetToken)
  const handleCountryChange = (idd) => {
    setCountryCode(idd)
    setOpenCountryPicker(false)
  }
  async function handleSubmit(e) {
    e.preventDefault();
  }

  async function requestCode() {
    if (reqestCodeText !== "Send verification code") return;
    console.log("requesting code...");
    setCountDown(10);
    const data = {
      channel: recoveryType === "phone" ? "phone" : "email",
      to: recoveryType === "phone" ? countryCode + phone : email,
    }
    const response = await requestTokenApi.callApi(data);
    setShowToast(true);
    setMessage(response.data.message);
    setRequestCodeText("Send verification code");
    if (!response.ok) return;
    const timeOut = setInterval(() => {
      setCountDown((initial) => initial - 1);
      setRequestCodeText(`Send verification code in ${countDown}s`);
      console.log(countDown);
      if (countDown <= 0) {
        console.log("interval cleared...")
        clearInterval(2000);
        setCountDown(10);
        setRequestCodeText("Send verification code");
      }
    }, 2000)

  }


  return (
    <motion.div
      {...pageAnimation}
      className="container px-4 py-0.050  pt-20 border-x-2 border-slate-900 h-screen mx-auto max-w-lg  bg-slate-800 text-white">
      <AnimatePresence>
        {openCountryPicker ? <CountryPicker showPicker={openCountryPicker} handleChange={handleCountryChange} handleClosePicker={() => setOpenCountryPicker(false)} /> : null}

      </AnimatePresence>

      {showToast ? <ToastMessage message={message} showToast={showToast} handleRemoveToast={() => setShowToast(false)} /> : null}

      {requestTokenApi.isLoading ? <ThinSpinner /> : null}

      <div className=' container  bg-slate-800 text-white  py-5 z-30 fixed top-0 w-full box-border max-w-lg px-2 left-1/2 -translate-x-1/2'>
        <div className=" flex items-center" >
          <div>
            <Back />
          </div>
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Forget the password</h1>
          </div>

        </div>
      </div>

      {/* header */}
      {/* tagline */}
      <h1 className='text-2xl font-medium mb-10 '>
        <span className={recoveryType === "phone" ? "text-indigo-600 cursor-pointer" : "cursor-pointer text-white"} onClick={() => setRecoveryType("phone")} >Find your phone</span> &nbsp; <span onClick={() => setRecoveryType("email")} className={recoveryType === "email" ? "text-indigo-600 cursor-pointer" : "cursor-pointer text-white"}> Email recovery </span>
      </h1>
      <form onSubmit={handleSubmit}>
        {/* input */}
        <div className='mb-5'>
          {recoveryType === "phone" ?
            (<>
              <h1 className='text-xl mb-2 text-white '>
                Phone number
              </h1>
              <AppInput value={phone} handleOnChange={(e) => setPhone(e.target.value)} LeftIcon={<p onClick={() => setOpenCountryPicker(true)} className="flex items-center font-bold text-lg mr-2 cursor-pointer">{countryCode} <FaArrowRight size={15} /> </p>} placeholder='Please enter phone number' type="tel" /> </>)
            :
            (<>
              <h1 className='text-xl mb-2 text-white '>
                Mail
              </h1>
              <AppInput placeholder="Please input the email address" value={email} handleOnChange={(e) => setEmail(e.target.value)} LeftIcon={<FaEnvelope size={20} className="mr-2" />} type="email" />
            </>)

          }
          <h1 className='text-xl  mb-2 '>
            New Password
          </h1>
          <AppInput value={password} handleOnChange={(e) => setPassword(e.target.value)} LeftIcon={<FaLock size={20} className="mr-2" />} type={passwordType} placeholder='Please enter new password' RightIcon={passwordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setPasswordType("password")} size={25} />} />
          <h1 className='text-xl mb-2 text-white '>
            Confirm Password
          </h1>
          <AppInput value={confirmPassword} handleOnChange={(e) => setConfirmPassword(e.target.value)} LeftIcon={<FaLock size={20} className="mr-2" />} type={confirmPasswordType} placeholder='Enter password again' RightIcon={confirmPasswordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setConfirmPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setConfirmPasswordType("password")} size={25} />} />

          <h1 className='text-xl mb-2 text-white '>
            Verification code
          </h1>
          <AppInput value={code} handleOnChange={(e) => setCode(e.target.value)} LeftIcon={<FaShieldAlt className="scale-125 mr-2" size={30} />} placeholder="Please enter verification code" RightIcon={<button onClick={requestCode} className="text-indigo-600 px-1 text-sm w-full bg-white font-bold cursor-pointer outline-none">{reqestCodeText}</button>} />

          <input className=' cursor-pointer bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg' type='submit' value="Confirm submission" />

        </div>
      </form>
    </motion.div>
  )
}

export default ForgotPassword
