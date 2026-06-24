"use client"
import React from 'react'
import Container from "../../components/Container"
import { useSelector } from 'react-redux'
const page = () => {
 const cartData = useSelector((state)=> state.cart.cartItem)
  return (
    <div>
    <Container>
      <div className="">
        <h2 className='text-3xl font-bold' >Cart</h2>
      </div>
      <div className=""></div>
    </Container> 
    </div>
  )
}

export default page
