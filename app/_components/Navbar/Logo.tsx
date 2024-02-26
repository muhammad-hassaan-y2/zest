import React from 'react'
import Logos from '../../../public/assets/Logo.svg'
import Image from 'next/image'

const Logo = () => {
  return (
        <div>
         <Image src={Logos} alt='Logo' />
       </div>
  )
}

export default Logo