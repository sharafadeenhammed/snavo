import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaEnvelope } from "react-icons/fa";


// import } from "react-icons/ai"

import AppInput from "../components/AppInput";




function ForgotPassword() {
  const [ passwordType, setPasswordType ] = useState("password");
  const [ confirmPasswordType, setConfirmPasswordType ] = useState("password");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ code, setCode ] = useState("")
  const [ countryCode, setCountryCode ] = useState("+234")
  const [ recoveryType, setRecoveryType ] = useState("phone")
  const [ reqestCodeText, setRequestCodeText ] = useState("Send the verification code")
  const [ reqestCode, setRequestCode ] = useState(false)
  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="container px-4 py-0.050  pt-20 border-x-2 border-slate-100 h-screen mx-auto max-w-md bg-gray-50">

      <div className='bg-gray-50 py-1 z-40 fixed top-0  w-full mx-auto max-w-md'>
        <div className=" flex items-center mr-10" >
          <div>
            <FaArrowLeft size={20} />
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
        <span className={recoveryType === "phone" ? "text-indigo-600 cursor-pointer" : "cursor-pointer"} onClick={() => setRecoveryType("phone")} >Find your phone</span> &nbsp; <span onClick={() => setRecoveryType("email")} className={recoveryType === "email" ? "text-indigo-600 cursor-pointer" : "cursor-pointer"}> Email recovery </span>
      </h1>
      <form onSubmit={handleSubmit}>
        {/* input */}
        <div className='mb-5'>
          {recoveryType === "phone" ?
            (<>
              <h1 className='text-xl mb-2 '>
                Phone number
              </h1>
              <AppInput value={phone} handleOnChange={(e) => setPhone(e.target.value)} LeftIcon={<p className="flex items-center text-indigo-600 font-bold text-lg mr-2">{countryCode} <FaArrowRight size={15} /> </p>} placeholder='Please enter phone number' type="tel" /> </>)
            :
            (<>
              <h1 className='text-xl mb-2 '>
                Mail
              </h1>
              <AppInput placeholder="Please input the email address" value={email} handleOnChange={(e) => setEmail(e.target.value)} LeftIcon={<FaEnvelope size={20} className="mr-2" />} type="email" />
            </>)

          }
          <h1 className='text-xl  mb-2 '>
            New Password
          </h1>
          <AppInput value={password} handleOnChange={(e) => setPassword(e.target.value)} LeftIcon={<FaLock size={20} className="mr-2" />} type={passwordType} placeholder='Please enter new password' RightIcon={passwordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setPasswordType("password")} size={25} />} />
          <h1 className='text-xl mb-2 '>
            Confirm Password
          </h1>
          <AppInput value={confirmPassword} handleOnChange={(e) => setConfirmPassword(e.target.value)} LeftIcon={<FaLock size={20} className="mr-2" />} type={confirmPasswordType} placeholder='Enter password again' RightIcon={confirmPasswordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setConfirmPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setConfirmPasswordType("password")} size={25} />} />

          <h1 className='text-xl mb-2 '>
            Verification code
          </h1>
          <AppInput value={code} handleOnChange={(e) => setCode(e.target.value)} LeftIcon={<FaShieldAlt className="scale-125 mr-2" size={30} />} placeholder="Please enter verification code" RightIcon={<button disabled={reqestCode} onClick={() => console.log("request code")} className="text-indigo-600 px-1 text-sm w-full bg-white font-bold cursor-pointer outline-none">{reqestCodeText}</button>} />

          <input className=' cursor-pointer bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg' type='submit' value="Confirm submission" />

        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
