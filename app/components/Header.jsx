import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import Container from './Container';
const Header = () => {
  return (
    <div className='bg-black '>
      <Container className="flex items-center justify-between md:py-1.5 py-2 px-4">
        <div className="">
          <Image className='md:w-40 w-20' src="/header.png" height="40" width="160" alt="header"/>
      </div>
      <div className="flex gap-3 items-center">
        <p className="font-publicSans text-sm text-white">up to</p>
        <h3 className="font-publicSans md:text-[40px] text-[#EBC80C] text-[12px]">59%</h3>
        <h4 className="font-publicSans text-md text-white md:text-[17px] text-[12px]">OFF</h4>
      </div>
      <div className="">
       <Link href="/shop" className='bg-[#EBC80C] uppercase flex items-center gap-3 md:px-4 px-2 md:py-3 py-1 md:text-[16px] text-[12px]'>Shop Now <BsArrowRight/></Link> 
      </div>
      </Container>
    </div>
  )
}

export default Header
