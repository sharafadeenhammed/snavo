
import { useState, useEffect } from "react";
import { FaShieldAlt, FaEnvelope } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import Screen from "../components/Screen";
import AppInput from "../components/AppInput";
import ToastMessage from "../components/ToastMessage";
import Back from "../components/Back";
import pageAnimation from "../data/pageAnimation";
import routesName from "../data/routesName";

function BindMail() {
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])

  const [ email, setEmail ] = useState("");
  const [ captcha, setCaptcha ] = useState("")
  const [ toastMessage, setToastMessage ] = useState("")
  const [ showToast, setShowToast ] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const captchValidate = validateCaptcha(captcha)

    if (!email) {
      setToastMessage("Please enter email");
      setShowToast(true);
      return;
    }
    if (!captchValidate) {
      setToastMessage("captcha invalid");
      setShowToast(true);
      return;
    }
    if (!captchValidate) return;
    console.log({ email });
  }
  return (
    <Screen
      {...pageAnimation}>
      <ToastMessage message={toastMessage} showToast={showToast} handleRemoveToast={() => setShowToast(false)} />
      <div className='bg-gray-50 py-1 z-40 fixed top-0  w-full mx-auto max-w-md'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Bind mail</h1>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <AppInput placeholder="Please input the email address" value={email} handleOnChange={(e) => setEmail(e.target.value)} LeftIcon={<FaEnvelope size={20} className="mr-2" />} type="email" />

        <AppInput value={captcha} handleOnChange={(e) => setCaptcha(e.target.value)} LeftIcon={<FaShieldAlt className="mr-2" size={30} />} placeholder="Please enter verification code" RightIcon={<LoadCanvasTemplateNoReload className="bg-slate-400" />} />
        <input className='bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg cursor-pointer' type='submit' value="Submit" />
      </form>
    </Screen>
  )
}

export default BindMail
