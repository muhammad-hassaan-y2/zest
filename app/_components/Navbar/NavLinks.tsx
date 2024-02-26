import React from 'react'

const navLink = [
    {name: 'Features'},
    {name: 'Pricing'},
    {name: 'Enterprise'},
    {name: 'Careers'}
]

const NavLinks = () => {
  return (
    <div className='lg:flex hidden pl-[74px] gap-x-[56px] '>
       {navLink.map((items, index) => (
        <p 
        key={index}
        className='text-[#36485C] font-medium '>{items.name}</p>
       ) )}
    </div>
  )
}

export default NavLinks