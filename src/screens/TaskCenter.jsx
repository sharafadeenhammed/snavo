
import { useState, useEffect } from "react";
import Screen from "../components/Screen";
import Back from "../components/Back";
import pageAnimation from "../data/pageAnimation";
import taskImage from "../assets/images/task.png"

function TaskCenter() {
  return (
    <Screen
      {...pageAnimation}>
      <div className='bg-slate-800 text-white py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <Back />
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full text-white">
        <div className="w-full justify-between items-center flex px-5">
          <div>
            <p className="text-3xl">Task center</p>
            <p className=" text-lg font-normal">Do tasks, win rewards</p>
          </div>
          <div> <img className="h-36" src={taskImage} alt="" /></div>
        </div>
      </div>
    </Screen>
  )
}

export default TaskCenter
