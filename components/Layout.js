import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <header className='bg-red-500 p-6'>
        <h1 className='text-2xl'>MAZON-SANITY</h1>
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