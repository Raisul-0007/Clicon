"use client"
import React from 'react'
import Container from "../../components/Container"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeCart } from '../../components/cart/cartSlice'
import { RxCross2 } from 'react-icons/rx'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Link from 'next/link'
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
      <div className="pt-10">
        <h2 className='lg:text-4xl text-2xl font-bold' >Cart</h2>
      </div>
      <div className="py-20">
        <div className="">
      {cartData.length > 0 ?
      (
        <div className="">
          <div className="flex  bg-[#1b6392] text-white">
        <div className="w-2/5 py-5 border border-b-0 border-r-0 border-[#dbdbdb] text-center">
        <h3 className='font-bold lg:text-xl text-[14px]'>Product Details</h3>
        </div>
        <div className="w-1/5 py-5 border border-b-0 border-r-0 border-[#dbdbdb] text-center">
        <h3 className='font-bold lg:text-xl text-[14px]'>Price</h3>
        </div>
        <div className="w-1/5 py-5 border border-b-0 border-r-0 border-[#dbdbdb] text-center">
        <h3 className='font-bold lg:text-xl text-[14px]'>Quantity</h3>
        </div>
        <div className="w-1/5 py-5 border border-b-0  border-[#dbdbdb] text-center">
        <h3 className='font-bold lg:text-xl text-[14px]'>Total</h3>
        </div>
      </div>
      <div className="">
        {cartData.map((item) => (
        <div key={item.id} className="">
           <div className="flex ">
          <div className="w-2/5 py-3 border border-t-0 border-r-0 border-[#dbdbdb]  flex justify-center items-center lg:gap-5">
          <div onClick={()=>handleRemove(item)} className="border border-[#dbdbdb] h-5 w-5 cursor-pointer flex items-center justify-center">
            <RxCross2 />
          </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="h-15 w-15 border border-[#f5f5f5]">
                <img src={item.thumbnail} alt={item.id} />
              </div>
              <h3 className='font-bold lg:text-xl text-[14px]'>{item.title}</h3>
            </div>
          </div>
          <div className="w-1/5 py-3 border border-t-0 border-r-0 border-[#dbdbdb] flex items-center justify-center lg:text-[16px] text-[12px]">
            $ {((item.price - (item.price * item.discountPercentage) / 100)).toFixed(2)}
          </div>
          <div className="w-1/5 py-3 flex justify-center items-center gap-2 border border-t-0 border-r-0 border-[#dbdbdb]">
          <div onClick={()=> handleDecrement(item)} className="border border-[#dbdbdb] cursor-pointer p"><FiMinus/></div>
          <div className="lg:text-[16px] text-[12px]">
            {item.qun}
          </div>
          <div onClick={()=>handleIncrement(item)} className="border border-[#dbdbdb] cursor-pointer p"><FiPlus/></div>
          </div>
          <div className="w-1/5 py-3 flex justify-center items-center border border-t-0  border-[#dbdbdb] lg:text-[16px] text-[12px]">
          <h3>$ {(((item.price - (item.price * item.discountPercentage) / 100))* item.qun).toFixed(2)}</h3>
          </div>
        </div>
        </div>
        ))}
      </div>
      </div>
      )
      :
      ( 
        <div className="">
        <h4 className='text-center text-4xl font-bol '>No item</h4>
      </div> 
      )
      }
      </div>
      <div className="">
      {cartData.length > 0 &&(
              <div className=" border ml-auto lg:w-1/5 w-1/3 my-8 flex items-center rounded-2xl">
                    <div className="py-2 w-3/5 text-center border-r lg:text-xl text-[12px] text-white  bg-[#1b6392] rounded-l-2xl">
                        Grand Total :
                    </div>
                    <div className="lg:text-[18px] text-[10px] w-2/5 py-2 text-center">
                        ${grandTotal.toFixed(2)}
                    </div>
                </div>
                )}
          </div>
          <div className="">
            {cartData.length > 0 &&(
              <div className="flex justify-center">
                <Link className='bg-[#1b6392] py-3 px-8 text-white cursor-pointer rounded-xl lg:text-[16px] text-[12px]' href="/checkout">checkout</Link>
              </div>
            )}
          </div>
       </div>
    </Container> 
    </div>
  )
}

export default page