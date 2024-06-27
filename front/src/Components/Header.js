import React from 'react'
import Logos from './Logos'

const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className='container mx auto'>
        <div className=''>
          <Logos w={100} h={60}/>
        </div>
      </div>
    </header>
  )
}

export default Header
