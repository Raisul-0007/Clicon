"use client"
import React, { useContext } from 'react'
import { Data } from './ApiData'
import Image from 'next/image'
const products = () => {
    const {info, loading} = useContext(Data)
    
    if(loading){
        return <div className='text-4xl text-center'>Loading...</div>
    }
    return (
    <div>
      {info.map((item)=>{
        return(
            <div key={item.id} className="">
                <Image src={item.thumbnail} alt={item.title} height="500" width="500" />
                <h4 className='font-publicSans'>{item.title}</h4>
            </div>
        )
      })}
    </div>
  )
}

export default products
