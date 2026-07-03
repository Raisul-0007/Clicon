"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Image  from 'next/image';
import { IoSearch } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { FaRegHeart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Data } from './ApiData';
const Navber = () => {
  let searchRef = useRef()
  let {info} = useContext(Data)
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
    router.push(`/shop/${id}`)
    setSearch(false)
  }

  useEffect(()=>{
    const handleClick = (e)=>{
      if(searchRef.current && !searchRef.current.contains(e.target)){
        setSearch(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return ()=>{
       document.removeEventListener("mousedown", handleClick)
    }
  },[])
  return (
    <div className='bg-[#1B6392] py-2'>
      <Container className="flex items-center gap-2 px-1">
          <div className="w-1/5">
          <Link href="/">
            <Image src="/Logo.png" alt="logo" height="100" width="180" />
            </Link>
          </div>
          <div ref={searchRef} className="w-3/5 relative">
            <div className=" relative py-2">
            <input onChange={handleSearch} type='text' className='bg-white pl-5 lg:py-4 py-1.5 w-full border-b ' placeholder='Search for anything...' /> 
              <IoSearch className="absolute lg:right-5 right-2 lg:top-6 top-5 lg:text-2xl" />       
            </div>
            {search && (
              <div className="bg-white w-full absolute lg:top-[65px] top-11.25 left-0 z-999 h-120 overflow-y-auto">
                {filter.map((item)=>(
                  <Link key={item.id} onClick={()=>handleProduct(item.id)} href={`/shop/${item.id}`} className='py-2 flex items-center border-b border-[#e2e2e2] px-5 gap-4 '>
                    <Image width={50} height={50} src={item.thumbnail} alt={item.id} />
                    <h5 className='lg:text-[18px] text-[12px]'>{item.title}</h5>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="w-1/5 flex lg:gap-5 gap-2 justify-end text-white lg:text-4xl">
          <Link href="/cart">
          <div className="relative ">
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
