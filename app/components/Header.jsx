import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import Container from './Container';
const Header = () => {
  return (
    <div className='bg-black '>
      <Container className="flex items-center justify-between py-1.5 px-4">
        <div className=" ">
        <Link className="" href="/"><Image src="/header.png" height="45" width="160" alt="header"/></Link>
      </div>
      <div className="flex gap-3 items-center">
        <p className="font-publicSans text-sm text-white">up to</p>
        <h3 className="font-publicSans text-[40px] text-[#EBC80C]">59%</h3>
        <h4 className="font-publicSans text-md text-white">OFF</h4>
      </div>
      <div className="">
       <Link href="#" className='bg-[#EBC80C] uppercase flex gap-2 items-center px-4 py-3'>Shop Now <BsArrowRight/></Link> 
      </div>
      </Container>
    </div>
  )
}

export default Header
