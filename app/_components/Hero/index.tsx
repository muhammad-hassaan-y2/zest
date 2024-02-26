import React from 'react'
import Button from './Button'
import Arrow from '../../../public/assets/blue-button.svg'
import Image from 'next/image'
import UpperPortion from './UpperPortion'
import LowerPortion from './LowerPortion'

const Hero = () => {
  return (
    <div className='pt-4 lg:pt-10 '>
       
       <UpperPortion />

       <LowerPortion />

    </div>
  )
}

export default Hero