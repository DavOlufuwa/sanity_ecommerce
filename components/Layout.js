import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { Store } from '../utils/Store'

const Layout = ({children}) => {
  // For dark mode
  const {state, dispatch} = useContext(Store)
  const {darkMode} = state;

  
  const darkModeChanger = ()=>{
    dispatch({type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON'})
    const newDarkMode = darkMode
    Cookies.set('darkMode', newDarkMode ? 'OFF': 'ON')
  }
  return (
    <div>
      <header className={`flex justify-between ${darkMode ? "bg-gray-600 text-white":"bg-red-500"} p-6`}>
        <Link  href="/" className='text-2xl'>MAZON-SANITY</Link>
        <nav></nav> 
        <button 
          className='border-2 rounded-md px-4 border-grey-300'
          onClick={darkModeChanger}
          >
          {darkMode ? 'Light Mode' : 'Dark Mode' }
        </button> 
      </header>
      <main className={`${darkMode ? "bg-gray-700 text-gray-200" : ""}`}>
        {children}
      </main>
      <footer>
        <div className="text-center text-xs">
          All Rights Reserved
        </div>
      </footer>
    </div>
  ) 
}

export default Layout