import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import User from '../../../public/assets/User.svg'
import Menu from '../../../public/assets/Menu.svg'
import Profile from './Profile_image'
import NavLinks from './NavLinks'



const Navbar = () => {
  return (
    <nav className='flex items-center w-full justify-between px-[20px] py-[16px]
          lg:container lg:mx-auto lg:px-20 '>

      {/* Logo */}
      <div className='flex items-center'>
        <Logo />
        <NavLinks />
      </div>
       
       
       <div className='flex gap-x-5'>

       {/* Profile */} 
        <Profile />
        
        <div className='flex lg:hidden'>
          <Image src={Menu} alt='Menu Button' />
        </div>

       </div>
    </nav>
  )
}

export default Navbar