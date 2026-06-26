"use client"
import React from 'react'
import Container from "../../components/Container"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeCart } from '../../components/cart/cartSlice'
import { RxCross2 } from 'react-icons/rx'
import { FiMinus, FiPlus } from 'react-icons/fi'
const page = () => {
  let dispatch = useDispatch()
 const cartData = useSelector((state)=> state.cart.cartItem)

 let handleRemove = (item)=>{
  dispatch(removeCart(item))
 }
 let handleIncrement = (item)=>{
  dispatch(increment(item))
 }
 let handleDecrement = (item)=>{
  dispatch(decrement(item))
 }
 let grandTotal = cartData.reduce((total, item)=>{
  return total + (
    (item.price - (item.price * item.discountPercentage / 100)) * item.qun
  )
 }, 0)
  return (
    <div>
    <Container>
      <div className="">
        <h2 className='text-3xl font-bold' >Cart</h2>
      </div>
      {/* {cartData.length > 0 ?
      ( */}
      <div className="">
        {cartData.map((item) => (
        <div className=""></div>
        ))}
      </div>
      {/* )
      :
      (  */}
        <div className="">
        <h4 className='text-center text-4xl font-bol '>No Product</h4>
      </div> 
      {/* )
      } */}
    </Container> 
    </div>
  )
}

export default page
