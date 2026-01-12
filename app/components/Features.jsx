"use client"
import React, { useContext } from 'react'
import Container from './Container.jsx';
import { Data } from './ApiData.jsx'
import Image  from 'next/image';
const Features = () => {
    const {info, loading} =useContext(Data);
    if(loading){
        return(
            <p className='text-center'>Loading</p>
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
            <h4 className='text-4xl font-semibold pb-10'>Features Products</h4>
          </div>
          <div className="flex flex-wrap">
          {
            info.slice(100,108).map((item)=>(
              <div key={item.id} className=" w-1/4 px-4">
                <Image src={item.thumbnail} alt="" width={200} height={200}/>
                <h2>{item.title}</h2>
                <p className='text-[#7676768a]'>{item.category}</p>
                <p className='text-[#2DA5F3]'>${item.price}</p>
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
