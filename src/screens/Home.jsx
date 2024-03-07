
import { useState, useEffect } from "react"
import { Slide } from "react-slideshow-image"
import { AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FaUser, FaHeadphones, FaEnvelope } from "react-icons/fa"
import 'react-slideshow-image/dist/styles.css'

import ThinSpinner from "../components/ThinSpinner"
import ActionCard from "../components/ActionCard"
import Coincard from "../components/Coincard"
import Spinner from "../components/Spinner"
import LeftPanel from "../components/LeftPanel"
import Screen from "../components/Screen"
import Announcement from "../components/Announcement"
import { getCoinData } from "../api/homeFeed"



import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import news_icon from "../assets/images/news_icon.png"
import homeNoticeMore from "../assets/images/home_notice_more.png"


const images = [ image1, image2, image3 ]
import coinData from "../data/coinData"
import actionData from "../data/actionData"
import routesName from "../data/routesName"
import pageAnimation from "../data/pageAnimation"


const anouncementText = 'Dear SNAVO global participants Register as a new user and get 3 USDT (1) Invite subordinates to recharge 50USDT for the first time, and superiors can receive 3USDT (2) Invite subordinates to recharge 100 USDT for the first time, and superiors can receive 7 USDT For more details, please consult the SNAVO product manager!'
function Home() {
  const navigate = useNavigate();
  const [ showAnnouncement, setShowAnnouncement ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showLeftPanel, setShowLeftPanel ] = useState(false);
  const [ coinApiData, setCoinApiData ] = useState([]);
  // get initial coin dta from api
  const getCoinDataList = async () => {
    setIsLoading(true);
    const response = await getCoinData();
    if (response == null) {
      setIsLoading(false);
      setShowAnnouncement(true);
      setCoinApiData([]);
      return;
    }

    const responseArray = []
    for (let item in response) {
      responseArray.push({
        name: item,
        ...response[ item ]
      })
    }
    setCoinApiData(responseArray);
    setShowAnnouncement(true);
    setIsLoading(false);
  }

  // get coin data from api every 5 seconds
  async function coinDataUpdate() {
    console.log("refresh running...")
    const response = await getCoinData();
    if (response == null) {
      return;
    }

    const responseArray = []
    for (let item in response) {
      responseArray.push({
        name: item,
        ...response[ item ]
      })
    }
    setCoinApiData(responseArray);
  }

  useEffect(() => {
    getCoinDataList()
    const coinDataUpdateInternal = setInterval(coinDataUpdate, 5000)
    return clearInterval(coinDataUpdateInternal)
  }, [])
  return (
    <Screen

      objectStyle={{ paddingTop: "60px" }}
      {...pageAnimation}>
      {/* left panel */}
      <AnimatePresence>
        {showLeftPanel ? <LeftPanel panelOpen={showLeftPanel} hadleClosePanel={() => setShowLeftPanel(false)} /> : null}
      </AnimatePresence>

      {/* nav bar */}
      <div className=' bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className="justify-between w-full flex items-center mr-10" >
          <div className="p-2 bg-indigo-100 rounded-full bg-indigo-100'">
            <FaUser onClick={() => setShowLeftPanel(true)} size={20} color='#4f46e5' />
          </div>
          <div className='flex items-center'>
            <div className='mr-2 p-2 rounded-full bg-indigo-100'>
              <FaHeadphones size={20} color='#4f46e5' />
            </div>
            <div onClick={() => navigate(routesName.MESSAGE_CENTER)} className='rounded-full bg-indigo-100 p-2'>
              <FaEnvelope size={20} color='#4f46e5' />
            </div>
          </div>

        </div>
      </div>
      {/* image slider */}
      <div className="w-full relative">
        <Slide
          className="w-full"
          autoplay={true}
          indicators={true}
          arrows={false}
          duration={3000}
          transitionDuration={400}
          easing="ease"

        >

          {
            images.map((image, index) => {
              return (
                <div
                  className=" flex justify-center w-full each-slide"
                  key={index}
                >
                  <img
                    style={{
                      width: "97%"
                    }}
                    className="inline-block h-full rounded-xl"
                    src={image}
                  />
                </div>
              )
            })
          }
        </Slide>
      </div>
      <div className="relative w-full px-2 mt-3 mb-5 flex justify-center items-center">
        <div onClick={() => setShowAnnouncement(true)} className="bg-white  bg-inherit px-1">
          <img className="h-6" src={news_icon} alt="" />
        </div>
        <marquee onClick={() => setShowAnnouncement(true)} behaviour="scrool" direction="left" className="w-full font-medium">
          {anouncementText}
        </marquee>
        <img className="cursor-pointer" onClick={() => console.log("goto message center ")} src={homeNoticeMore} alt="" />
      </div>
      {/* action menu */}
      <div className=" rounded-lg mb-3 px-3 py-4 bg-white flex items-center justify-between w-full">
        {
          actionData.map((item, index) => <ActionCard onClick={navigate} key={index} data={item} />)
        }
      </div>
      {/* coin list */}
      {
        isLoading ? <Spinner /> : (
          <div className=" bg-white px-1 py-3 rounded-md w-full">
            <div className=" flex justify-between items-center">
              <p className="text-gray-400 font-semibold">Trading pair
              </p>
              <p className="text-gray-400 font-semibold">
                Latest price
              </p>
              <p className="text-gray-400 font-semibold">
                Quote change</p>
            </div>
            {
              coinApiData.map((item, index) => <Coincard key={index} data={item} icon={coinData[ index ]} />)
            }

          </div>
        )
      }



      {/* annnouncement */}
      <AnimatePresence>

        {
          showAnnouncement ?
            <Announcement close={() => setShowAnnouncement(false)} /> : null
        }

      </AnimatePresence>

    </Screen>



  )
}

export default Home
