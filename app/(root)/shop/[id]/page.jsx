"use client"
import Container from '@/app/components/Container'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import  Image  from 'next/image';
import Loading from './../../../loading';

const ProductDetails = () => {
    const Product  = useParams()
  const [product, setProduct] = useState(null)

  const singleProduct = () => {
    fetch(`https://dummyjson.com/products/${Product.id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    singleProduct()
  }, [])
  if(!product){
    return <Loading/>
  }
  return (
    <div>
      <Container>
        <div className="">
            <Image src={product.thumbnail} alt='img' height={100} width={300} />
            <h3>ami{product.title}</h3>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
