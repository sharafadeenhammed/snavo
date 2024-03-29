import { QRCode } from 'react-qrcode-logo';
import { useState } from "react"

import Screen from "../components/Screen";
import Back from "../components/Back";
import ToastMessage from "../components/ToastMessage";
import pageAnimation from "../data/pageAnimation";
import useUserContext from '../hooks/useUserContext';
import routesName from '../data/routesName';
import { useLocation } from 'react-router-dom';
function InviteFriends() {
  const { user } = useUserContext();
  const [ toastMessage, setToastMessage ] = useState("");
  const [ showToast, setShowToast ] = useState(false);
  const location = useLocation();
  function copyLink() {
    navigator.clipboard.writeText(` ${window.location.protocol}//${window.location.host}/#${routesName.REGISTER}?ref=${user.user.referalCode}`);
    setToastMessage("Copy successfully");
    setShowToast(true);
  }
  return (
    <Screen
      objectStyle={{
        paddingRight: 0,
        paddingLeft: 0
      }}
      {...pageAnimation}>
      <ToastMessage message={toastMessage} showToast={showToast} handleRemoveToast={() => setShowToast(false)} />
      <div className=' bg-gray-800 text-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Invite friends</h1>
          </div>
        </div>
      </div>
      <div className='w-full bg-blue-500 min-h-screen flex items-center justify-center '>
        <div className=' p-5 w-11/12 rounded-lg bg-white h-8/12 flex flex-col items-center'>
          <div className='p-1 border-2 border-indigo-500 mb-20'>
            <QRCode size={200} value={`${import.meta.env.VITE_FRONTEND_URL}?uid=${user.user.referalCode}`} />
          </div>
          <p className='rounded w-full my-10 text-center px-5 py-2 bg-slate-300 text-black text-lg'>
            {` ${window.location.protocol}//${window.location.host}/#${routesName.REGISTER}?ref=${user.user.referalCode}`}
          </p>
          <p
            onClick={copyLink}
            className='bg-indigo-600 cursor-pointer text-center mb-5 w-full py-3 px-2 border-2 rounded-lg outline-none text-white text-lg '>
            Copy invite link
          </p>
        </div>
      </div>
    </Screen>
  )
}

export default InviteFriends
