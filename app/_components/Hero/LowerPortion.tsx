import Image from 'next/image'
import React from 'react'
import Gradient from "../../../public/assets/Gradient.svg"
import HeroImage from '../../../public/assets/Image.svg'
import TrustedCompanies from './TrustedCompanies'

const LowerPortion = () => {
  return (
    <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

     <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
          />

        <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20 '>
          <TrustedCompanies />
        </div>

     </div>
   </div>
  )
}

export default LowerPortion