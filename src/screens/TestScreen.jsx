import { useEffect, useState } from 'react'

import Screen from '../components/Screen'
import { getCountry } from '../api/getCountry'
function TestScreen() {
  const [ countryData, setCountryData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const getCountryData = async () => {
    setIsLoading(true);
    const data = await getCountry();
    if (data == null) {
      setIsLoading(false);
      setCountryData([]);
      return;
    }
    setCountryData(data);
    setIsLoading(false);
    console.log(data);
  }

  useEffect(() => {
    getCountryData();
  }, [])
  const [ number, setNumber ] = useState("");

  return (
    <Screen>
      {
        countryData.map((item, index) => {
          return (
            <div key={index}>
              <div className='w-full flex justify-between px-5 py-3 border-b-2 border-slate-200'>
                <div className='flex items-center justify-start'>
                  <p className='mr-5'>
                    {/* <p> id: {index}</p> */}
                    <img className='' height="15px" width="30px" src={item.flags.svg} />
                  </p>
                  <p className='text-xl '>{item.name.common}</p>
                </div>

                <p className='text-xl'>{item.idd.root}{item.idd.suffixes[ 0 ].length > 3 && item.idd.suffixes[ 1 ]?.length < 4 ? item.idd.suffixes[ 1 ] : item.idd.suffixes[ 0 ]}</p>
              </div>

            </div>
          )
        })
      }
    </Screen>
  )
}

export default TestScreen
