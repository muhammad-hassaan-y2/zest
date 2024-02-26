import Image from 'next/image'
import React from 'react'
import Google from '../../../public/assets/Google.svg'
import Slack from '../../../public/assets/Slack.svg'
import Trustpilot from '../../../public/assets/Trustpilot.svg'
import Cnn from '../../../public/assets/CNN.svg'
import Clutch from '../../../public/assets/Clutch.svg'

const TrustedCompanies = () => {
  // Array containing paths to your image assets
  const images = [Google, Slack, Trustpilot, Cnn, Clutch];

  return (
    <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
    <p className="text-[#FFFFFF] text-center lg:text-[18px]">
      Trusted by these companies
    </p>
    <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle  lg:grid-cols-5">

        {/* Mapping over the images array to generate Image components */}
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`Company ${index}`} />
          </div>
        ))}

      </div>
    </div>
  )
}

export default TrustedCompanies;
