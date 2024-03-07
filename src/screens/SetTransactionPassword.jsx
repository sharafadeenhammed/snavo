import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Screen from "../components/Screen";
import Back from "../components/Back";
import AppInput from "../components/AppInput";
import ToastMessage from "../components/ToastMessage";
import pageAnimation from "../data/pageAnimation";

function SetTransactionPassword() {
  const [ passwordType, setPasswordType ] = useState("password");
  const [ confirmPasswordType, setConfirmPasswordType ] = useState("password");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showToast, setShowToast ] = useState(false);
  const [ toastMessge, setToastMessge ] = useState("")

  async function handleSubmit(e) {
    e.preventDefault();
    if (password == "" || confirmPassword == "") {
      setToastMessge("Please enter password and confirm password");
      setShowToast(true);
      isLoading(false);
      return;
    }
    if (password.length < 4) {
      setToastMessge("Password must be at least 4 characters");
      setShowToast(true);
      isLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setToastMessge("Password is not same");
      setShowToast(true);
      isLoading(false);
      return;
    }
    console.log("update transactionpassword");
  }
  return (
    <Screen
      {...pageAnimation}>
      <ToastMessage message={toastMessge} showToast={showToast} handleRemoveToast={() => setShowToast(false)} />
      <div className='bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Modify transaction password</h1>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="w-full">
          <p className="text-xl">New transaction password</p>
          <AppInput
            value={password}
            handleOnChange={(e) => setPassword(e.target.value)}
            type={passwordType}
            placeholder='Please enter a new transaction password'
            RightIcon={passwordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setPasswordType("password")} size={25} />} />

          <p className="text-xl">Confirm transaction password</p>
          <AppInput value={confirmPassword} handleOnChange={(e) => setConfirmPassword(e.target.value)} type={confirmPasswordType} placeholder='Please confirm the transaction password' RightIcon={confirmPasswordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setConfirmPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setConfirmPasswordType("password")} size={25} />} />
        </div>

        <input className='bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg cursor-pointer' type='submit' value="Submit" />
      </form>
    </Screen>
  )
}

export default SetTransactionPassword
