import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header className='h-16 shadow-2xl'>
      <div className='container mx auto'>
        <div className=''>
          <Navbar w={100} h={60}/>
        </div>
      </div>
    </header>
  )
}

export default Header
