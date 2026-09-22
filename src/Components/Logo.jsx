import React from 'react'
import logoImage from '../assets/alogo.png';

const Logo = () => {
  return (
    <div className='py-1'>
       <div className='max-w-6xl md:w-2xl md:mx-auto mx-auto flex justify-between items-center'>
        <img src={logoImage} className={`cursor-pointer w-auto lg:ml-20 sm:ml-4 md:ml-1 transition-transform duration-300 hover:pulse rounded-full h-12 `} alt="" />
       </div>
    </div>
  )
}

export default Logo
