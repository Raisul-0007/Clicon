"use client"
import Container from '@/app/components/Container'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useState } from 'react'
const ProductDetails = () => {
    let productId = useParams()
    let [product, setProduct ] =useState([])
     let singleProduct =async ()=>{
       const res = await fetch(`https://dummyjson.com/products?&limit=0/products/${productId.id}`)
       const data = await res.json()
       setProduct(data)
     }
  return (
    <div>
      <Container>
        <div className=""></div>
      </Container>
    </div>
  )
}

export default ProductDetails
