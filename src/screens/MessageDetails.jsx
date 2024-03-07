


import { useState } from "react"
import Screen from "../components/Screen";
import Back from "../components/Back";
import ThinSpinner from "../components/ThinSpinner";
import pageAnimation from "../data/pageAnimation";
import noREcord from "../assets/images/no-record.png"


function MessageDetails() {
  return (
    <Screen
      // objectStyle={{
      //   padding: 0,
      //   paddingTop: "50px"
      // }}
      {...pageAnimation}>
      <div className='bg-white  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Message details</h1>
          </div>
        </div>
      </div>
    </Screen>
  )
}

export default MessageDetails
