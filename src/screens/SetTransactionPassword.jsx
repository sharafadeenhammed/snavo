import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Screen from "../components/Screen";
import Back from "../components/Back";
import AppInput from "../components/AppInput";
import ToastMessage from "../components/ToastMessage";
import pageAnimation from "../data/pageAnimation";
import useUserContext from "../hooks/useUserContext";

function SetTransactionPassword() {
  const [ oldPasswordType, setOldPasswordType ] = useState("password");
  const [ passwordType, setPasswordType ] = useState("password");
  const [ confirmPasswordType, setConfirmPasswordType ] = useState("password");
  const [ oldPassword, setOldPassword ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showToast, setShowToast ] = useState(false);
  const [ toastMessge, setToastMessge ] = useState("")
  const { user } = useUserContext();

  async function handleSubmit(e) {
    e.preventDefault();
    if (user.user.transactionPin && oldPassword == "") {
      setToastMessge("enter old transaction pin");
      setShowToast(true);
      isLoading(false);
      return;
    }
    if (password == "" || confirmPassword == "") {
      setToastMessge("Please enter pin and confirm pin");
      setShowToast(true);
      isLoading(false);
      return;
    }
    if (password.length !== 4) {
      setToastMessge("pin must be exactly 4 characters");
      setShowToast(true);
      isLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setToastMessge("pin is not same");
      setShowToast(true);
      isLoading(false);
      return;
    }
    console.log("update transaction pin");
  }
  return (
    <Screen
      {...pageAnimation}>
      <ToastMessage message={toastMessge} showToast={showToast} handleRemoveToast={() => setShowToast(false)} />
      <div className='bg-slate-800 text-white py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Modify transaction pin</h1>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="w-full text-white">

          {
            user.user.transactionPin !== null ?
              (<>
                <p className="text-xl">Old transaction pin</p>
                <AppInput
                  value={oldPassword}
                  handleOnChange={(e) => setOldPassword(e.target.value)}
                  type={oldPasswordType}
                  placeholder='Please enter old transaction pin'
                  RightIcon={oldPasswordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setOldPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setOldPasswordType("password")} size={25} />
                  }

                />
              </>) : null
          }
          <p className="text-xl">New transaction pin</p>
          <AppInput
            value={password}
            handleOnChange={(e) => setPassword(e.target.value)}
            type={passwordType}
            placeholder='Please enter a new transaction pin'
            RightIcon={passwordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setPasswordType("password")} size={25} />} />

          <p className="text-xl">Confirm transaction pin</p>
          <AppInput value={confirmPassword} handleOnChange={(e) => setConfirmPassword(e.target.value)} type={confirmPasswordType} placeholder='Please confirm the transaction pin' RightIcon={confirmPasswordType === "password" ? < FaEyeSlash color="darkgray" onClick={() => setConfirmPasswordType("text")} size={25} /> : <FaEye color="darkgray" onClick={() => setConfirmPasswordType("password")} size={25} />} />
        </div>

        <input className='bg-indigo-600 mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg cursor-pointer' type='submit' value="Submit" />
      </form>
    </Screen>
  )
}

export default SetTransactionPassword
