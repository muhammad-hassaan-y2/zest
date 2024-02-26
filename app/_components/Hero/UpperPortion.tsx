import React from 'react'
import Arrow from '../../../public/assets/blue-button.svg'
import Image from 'next/image'

const UpperPortion = () => {
  return (
    <div>
        <div className='px-[20px] lg:px-[280px]'>
          
          <h1 className="text-center text-[32px] leading-[40px] font-medium
           text-[#172026] lg:text-[64px] lg:leading-[72px] ">Start monitoring your website like a pro</h1>
 
          <p className='text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7 '>Get a birds eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and effeiciency!</p>
          
          <div className='flex w-full pt-8 justify-center gap-x-6 '>
          
           <button className='bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit'>Try for free</button>
           <button className='w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit'>View Pricing 
             <span>
               <Image src={Arrow} alt='Arrow Button' />
             </span></button>
           
          </div>
        </div>
    </div>
  )
}

export default UpperPortion