import React from 'react'
import Container from './Container'
import Image  from 'next/image';
import { IoSearch } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart, FaUser } from 'react-icons/fa';
const Navber = () => {
  return (
    <div className='bg-[#1B6392] py-2'>
      <Container className="flex items-center">
          <div className="w-1/5">
            <Image src="/Logo.png" alt="logo" height="100" width="180" />
          </div>
          <div className="w-3/5 relative py-2">
            <input type='text' className='bg-white pl-5 py-4 w-full' placeholder='Search for anything...' /> 
              <IoSearch className="absolute right-5 top-6 text-2xl" />       
            </div>
          <div className="w-1/5 flex gap-5 justify-end text-white text-4xl">
            <LuShoppingCart />
            <FaRegHeart />
            <FaUser />
          </div>
      </Container>
    </div>
  )
}

export default Navber
