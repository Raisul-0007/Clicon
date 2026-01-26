"use client"
import Container from '@/app/components/Container'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import  Image  from 'next/image';
import Loading from './../../../loading';
import Rating from '../../../components/Rating';

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
        <div className="flex">
          <div className="w-1/2 p-5">
          <Image className=' border border-gray-300' src={product.thumbnail} alt='img'  height={200} width={600} />
          </div>
          <div className="w-1/2 p-5">
            <div className=" flex items-center gap-3">
              <div className="flex gap-1  text-[#FA8232]">
              <Rating rating={product.rating}/>
              </div>
              <div className="">
                {product.rating}
              </div>
            </div>
            <div className="">
              {product.title}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
