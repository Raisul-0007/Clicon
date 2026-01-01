"use client"
import React, { useContext } from 'react'
import { Data } from './ApiData'
import Image from 'next/image'
const products = () => {
    const {info} = useContext(Data)
    console.log(info);
  return (
    <div>
      {info.map((item)=>{
        return(
            <div key={item.id} className="">
                <Image src={item.thumbnail} alt={item.title} height="500" width="500" />
                <h1>{item.title}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default products
