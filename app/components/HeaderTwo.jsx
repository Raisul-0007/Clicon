import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { BiLogoPinterestAlt } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa'
const HeaderTwo = () => {
  return (
    <div className='bg-[#1B6392] border-b border-gray-300'>
      <Container>
        <div className=" py-4 flex items-center justify-between">
          <div className="">
            <p className='font-publicSans md:text-sm text-[8px] text-white'>Welcome to Clicon online eCommerce store. </p>
          </div>
          <div className="flex items-center gap-3 text-white md:text-[16px] text-sm ">
            <p className='font-publicSans text-white md:text-sm text-[8px] '>Follow us:</p>
            <Link href="/"><FaTwitter /></Link>
            <Link href="/"><FaFacebook /></Link>
            <Link href="/"><BiLogoPinterestAlt /></Link>
            <Link href="/"><FaReddit /></Link>
            <Link href="/"><FaYoutube /></Link>
            <Link href="/"><FaInstagram /></Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeaderTwo
