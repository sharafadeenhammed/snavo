import { useState } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import pageAnimation from "../data/pageAnimation";
import routesName from "../data/routesName";
import homeNoticeMore from "../assets/images/home_notice_more.png"
import { useNavigate } from "react-router-dom"
import infoError from "../assets/images/info_error.png"
import useUserContext from "../hooks/useUserContext";
import ToastMessage from "../components/ToastMessage";

function SecurityCenter() {
  const [ showToast, setShowToast ] = useState(false);
  const [ message, setMessage ] = useState("")
  const { user } = useUserContext();
  const navigate = useNavigate()
  function setEmail() {
    if (user.user.email !== null) {
      setMessage("Email already set");
      setShowToast(true);
      return;
    };
    navigate(routesName.SET_MAIL)
  }
  return (
    <Screen
      {...pageAnimation}>
      <div className='bg-slate-800 text-white py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Security center</h1>
          </div>
        </div>
      </div>
      <ToastMessage handleRemoveToast={() => setShowToast(false)} message={message} showToast={showToast} />

      <div className="w-full text-white">
        {/* transaction password */}
        <div onClick={() => navigate(routesName.SET_TRANSACTION_PASSWORD)} className="w-full p-5 flex text-base font-normal items-center justify-between border-b-2 border-b-slate-700" >
          <p className="">
            Transction password
          </p>
          {user.user.transactionPin === null ?
            <div className="flex items-center ">
              {/* show when not set */}
              <div className="flex text-red-500 items-center justify-center">
                <img className="inline-block mr-1" src={infoError} alt="" />
                <p>Not Set</p>
              </div>
              <img className="ml-3 h-5" src={homeNoticeMore} alt="" />
            </div> : null
          }
        </div>
        {/* login password */}
        <div onClick={() => navigate(routesName.UPDATE_LOGIN_PASSWORD)} className="w-full p-5 flex text-base font-normal items-center justify-between border-b-2 border-b-slate-700" >
          <p className="">
            Login password
          </p>
          <div className="flex items-center ">
            <img className="ml-3 h-5" src={homeNoticeMore} alt="" />
          </div>
        </div>
        {/* set mail */}
        <div onClick={setEmail} className="w-full p-5 flex text-base font-normal items-center justify-between border-b-2 border-b-slate-700" >
          <p className="">
            {user.user.email === null ? "Set Email" : user.user.email}
          </p>
          {
            user.user.email === null ?
              <div className="flex items-center ">
                {/* show when not set */}
                <div className="flex text-red-500 items-center justify-center">
                  <img className="inline-block mr-1" src={infoError} alt="" />
                  <p>Unbound</p>
                </div>
                <img className="ml-3 h-5" src={homeNoticeMore} alt="" />
              </div> : null
          }
        </div>


      </div>

    </Screen>
  )
}

export default SecurityCenter
