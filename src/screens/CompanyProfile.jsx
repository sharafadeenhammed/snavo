
import { useState } from 'react'
import Screen from '../components/Screen'
import Back from '../components/Back'
import pageAnimation from '../data/pageAnimation'
function CompanyProfile() {
  const [ textClass, setTextClass ] = useState("text-xl mb-5")
  return (
    <Screen
      {...pageAnimation}
    >
      <div className=' bg-gray-200  py-3 px-3 z-30 fixed top-0 w-full box-border mx-auto max-w-lg left-1/2 -translate-x-1/2'>
        <div className=" flex items-center mr-10" >
          <div>
            <Back />
          </div>
          <div className="w-full text-center">
            <h1 className='text-center text-2xl font-medium'>
              Company Profile</h1>
          </div>

        </div>
      </div>
      <p className={textClass}>Cryptocurrency Smart Data Analytics Company (SNAVO)</p>

      <p className={textClass}>
        *Trust, Imtoken or the more familiar SNAVO, such an impressive name has been frequently associated with the Bitcoin circle in the past year.
        <br />
        *For the currency circle, the trend of SNAVO has even become an indicator of market popularity. Countless people hope to make profits through quantitative trading. Some people compare the online promotion of the SN intelligent quantitative system in 2015 to a superstar in the US encryption market. So why do so many people admire SN quantitative trading so much?
        <br />
      </p>
      <p className={textClass}>
        *SNAVO is a dynamic technology company located in Nevada, USA. We founded SNAVO in 2015 because we knew the world was ready for the revolution in artificial intelligence and blockchain. SNAVO focuses on artificial intelligence quantification and blockchain trading services. We focus on delivering innovative solutions to clients around the world, leveraging our team’s expertise in artificial intelligence, blockchain, finance and technology.
      </p>
      <p className={textClass}>
        *SNAVO is a dynamic technology company located in Nevada, USA. We founded SNAVO in 2015 because we knew the world was ready for the revolution in artificial intelligence and blockchain. SNAVO focuses on artificial intelligence quantification and blockchain trading services. We focus on delivering innovative solutions to clients around the world, leveraging our team’s expertise in artificial intelligence, blockchain, finance and technology.
      </p>
      <p className={textClass} >
        *At SNAVO, we believe in building a strong team that can work together to provide the best service to our clients. Our workforce structure is designed to ensure we have the right people in the right roles, with a focus on promoting creativity, innovation and excellence.
      </p>
      <p className={textClass}>
        *Our company was founded in 2015 with the goal of using artificial intelligence and blockchain technology to change the way businesses operate. Since then, we have continued to push the boundaries of what is possible in our field, pioneering new technologies and strategies to help our clients succeed.
      </p>
      <p className={textClass}>
        * SNAVO has very strong strength and is one of the most active and influential cryptocurrency investment companies in the world. It basically covers most trading channels, including spot, contract, futures, trust and quantitative trading, etc.
      </p>
      <p className={textClass}>
        *Looking ahead, SNAVO is committed to continuing our tradition of innovation and excellence and expanding our products and capabilities to meet the ever-changing needs of our customers. We are excited about the future of artificial intelligence and blockchain technology, and we believe our team is uniquely positioned to help businesses succeed in this rapidly changing environment.
      </p>
    </Screen>
  )
}

export default CompanyProfile
