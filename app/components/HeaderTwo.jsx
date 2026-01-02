import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { BiLogoPinterestAlt } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaReddit, FaTwitter, FaYoutube } from 'react-icons/fa'
const HeaderTwo = () => {
  return (
    <div className='bg-[#1B6392] border-b border-gray-300'>
      <Container>
        <div className=" py-4 flex justify-between">
          <div className="">
            <p className='font-publicSans text-sm text-white'>Welcome to Clicon online eCommerce store. </p>
          </div>
          <div className="flex gap-3 text-white">
            <p className='font-publicSans text-sm text-white'>Follow us:</p>
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
