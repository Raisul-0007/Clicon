"use client"
import React, { useState } from 'react'
import Container from './Container'
import Image  from 'next/image';
import { IoSearch } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navber = () => {
  const router = useRouter();
  let addToCart = useSelector((state)=> state.cart.cartItem)
  let [filter, setFilter] = useState([])
  let [search, setSearch] = useState(false)
  let handleSearch = (e)=>{
    if(e.target.value){
      setSearch(true)
      let productFilter = info.filter((item)=> item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setFilter(productFilter)
    }else{
      setSearch(false)
    }
  }
  let handleProduct= (id)=>{
    router(`/shop/${id}`)
     window.location.reload()
  }
  return (
    <div className='bg-[#1B6392] py-2'>
      <Container className="flex items-center">
          <div className="w-1/5">
          <Link href="/">
            <Image src="/Logo.png" alt="logo" height="100" width="180" />
            </Link>
          </div>
          <div className="w-3/5 relative py-2">
            <input type='text' className='bg-white pl-5 py-4 w-full' placeholder='Search for anything...' /> 
              <IoSearch className="absolute right-5 top-6 text-2xl" />       
            </div>
          <div className="w-1/5 flex gap-5 justify-end text-white text-4xl">
          <Link href="/cart">
          <div className="relative">
            <LuShoppingCart />
            {addToCart.length > 0 && (
            <p className="text-sm h-5 w-5 rounded-full bg-white text-[#1b6392] absolute -top-3 -right-3 flex justify-center items-center">{addToCart.length}</p>
            )}
          </div>
          </Link>
            <FaRegHeart />
            <FaUser />
          </div>
      </Container>
    </div>
  )
}

export default Navber
