"use client"
import React from 'react'
import Container from './Container'
import Image  from 'next/image';
import { IoSearch } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Navber = () => {
  let addToCart = useSelector((state)=> state.cart.cartItem)
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
          <div className="relative">
            <LuShoppingCart />
            {addToCart.length > 0 && (
            <p className="text-sm h-5 w-5 rounded-full bg-white text-[#1b6392] absolute -top-3 -right-3 flex justify-center items-center">{addToCart.length}</p>
            )}
          </div>
            <FaRegHeart />
            <FaUser />
          </div>
      </Container>
    </div>
  )
}

export default Navber
