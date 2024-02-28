import { useEffect, useState, useRef } from 'react'
import { FaTimes, FaSearch } from "react-icons/fa"
import { motion } from "framer-motion"
import country from '../data/country';

import Spinner from './Spinner';
import { getCountry } from '../api/getCountry';

function CountryPicker({ showPicker, handleChange, handleClosePicker, data = [] }) {
  const dataRef = useRef(country);
  const [ countryData, setCountryData ] = useState([ ...country ]);
  const [ countryInput, setCountryInput ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const getCountryData = async () => {
    setIsLoading(true);
    const data = await getCountry();
    if (data == null) {
      setIsLoading(false);
      setCountryData([]);
      return;
    }
    dataRef.current = data;
    setCountryData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    // if (data.length == 0) getCountryData();
    // else dataRef.current = data;
    // console.log(countryData)
  }, [])

  // search country
  const search = (text) => {
    if (countryInput !== "") {
      const newData = dataRef.current.filter((item) => {
        return item.name.includes(countryInput)
      })
      setCountryData(newData)

    }
    else setCountryData(dataRef.current)
  }

  const inputSearch = (text) => {
    if (countryInput !== "") {
      const newData = dataRef.current.filter((item) => {
        return item.name.includes(text)
      })
      setCountryData(newData)

    }
    else setCountryData(dataRef.current)
  }

  return (
    <motion.div
      onClick={(e) => e.target.id == "parent" ? handleClosePicker() : null}
      id='parent'
      layout
      initial={{ x: 500 }}
      animate={{ x: -15 }}
      exit={{ x: 500, width: 0, }}
      transition={{ duration: 0.5, ease: [ 0, 0.71, 0.2, 1.01 ] }}
      className={'container min-h-screen mx-auto max-w-lg bg-black bg-opacity-70 pl-16 fixed top-0 bottom-0  z-50 overflow-auto'}>
      {isLoading ? <Spinner /> :
        <div className='bg-white min-h-screen'>
          <div className='sticky top-0 bg-white px-5'>
            <div className='flex justify-between items-center mb-5 '>
              <p className='text-xl'>Select country or region</p>
              <div className='cursor-pointer' onClick={() => handleClosePicker()}>
                <FaTimes size={40} />
              </div>
            </div>
            {/* search */}
            <div className='rounded h-10 flex items-center justify-center pl-2 bg-gray-100 w-full '>
              <FaSearch size={30} color='lightgray ' className='mr-5' />
              <input
                className='w-full h-full bg-inherit outline-none'
                type="text"
                value={countryInput}
                onChange={(e) => {
                  setCountryInput(e.target.value)
                  inputSearch(e.target.value)
                }}
                placeholder="Please enter a country to search"
              />
              {countryInput !== "" ?
                <div onClick={() => {
                  setCountryInput('')
                  setCountryData(dataRef.current)
                }
                } className=' bg-gray-300 rounded-full cursor-pointer'>
                  <FaTimes size={15} color='white' />
                </div>
                : null
              }
              <p onClick={search} className=' flex items-center text-xl cursor-pointer ml-2 h-full px-2 bg-white'>
                Search
              </p>
            </div>
          </div>
          {
            countryData.map((item, index) => {
              return (
                <div key={index} onClick={() => handleChange && handleChange(item.idd)
                }>
                  <div className='w-full flex justify-between px-5 py-3 border-b-2 border-slate-200'>
                    <div className='flex items-center justify-start'>
                      <p className='mr-5'>
                        <img className='' height="15px" width="30px" src={item.flag} />
                      </p>
                      <p className='text-xl '>{item.name}</p>
                    </div>

                    <p className='text-xl'>{item.idd}</p>
                  </div>

                </div>
              )
            })
          }
        </div>
      }
    </motion.div>
  )
}

export default CountryPicker
