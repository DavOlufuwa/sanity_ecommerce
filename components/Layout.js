import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <header className='bg-red-500 p-6'>
        <Link  href="/" className='text-2xl'>MAZON-SANITY</Link>
        <nav></nav>  
      </header>
      <main>
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