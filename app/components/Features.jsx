"use client"
import React, { useContext } from 'react'
import Container from './Container';
import { Data } from './ApiData.jsx'
import Image  from 'next/image';
import Link from 'next/link.js';
const Features = () => {
    const {info, loading} =useContext(Data);
    if(loading){
        return(
            <div className="flex justify-center flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce"></div>
          <div
            className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>
        )
    }
  return (
    <div>
      <Container className="flex gap-4">
        <div className="w-1/4">
          <Image src="/Feature.png" alt="fet" width={300} height={700}/>
        </div>
        <div className="w-4/5">
          <div className="">
            <h4 className='font-publicSans text-4xl font-semibold pb-10'>Features Products</h4>
          </div>
          <div className="flex flex-wrap">
          {
            info.slice(100,108).map((item)=>(
              <div key={item.id} className=" w-1/4 px-4">
                <Link href="/shop">
                  <Image src={item.thumbnail} alt="" width={200} height={200}/>
                </Link>
                <h2>{item.title}</h2>
                <p className='font-publicSans text-[#7676768a]'>{item.category}</p>
                <p className='font-publicSans text-[#2DA5F3]'>${item.price}</p>
              </div>
            ))
          }
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Features
