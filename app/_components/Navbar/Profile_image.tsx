import React from 'react'
import User from '../../../public/assets/User.svg'
import Image from 'next/image'


const Profile = () => {
  return (
    <div className='flex gap-x-2 items-center font-medium text-[#36485C] '>
          <p className='hidden lg:block pr-[56px]'>Open an Account</p>
          <Image src={User} alt='Profile Image' />
          <span className='hidden lg:block  '>Sign in</span>
    </div>
  )
}

export default Profile