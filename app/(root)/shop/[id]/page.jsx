"use client"
import Container from '@/app/components/Container'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import  Image  from 'next/image';
import Loading from './../../../loading';
import Rating from '../../../components/Rating';
import HomeProduct from './../../../components/HomeProduct';

const ProductDetails = () => {
    const Product  = useParams()
  const [product, setProduct] = useState(null)

  const singleProduct = () => {
    fetch(`https://dummyjson.com/products/${Product.id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
    .catch(err => console.log(err))
  }
  let handleCart =(item)=>{
    dispatchEvent(addToCart({...item, qun:1}))
  }

  useEffect(() => {
    singleProduct()
  }, [])
  if(!product){
    return <Loading/>
  }
  let discountPrice = (product.price / 100) * product.discountPercentage;
    let mainPrice = product.price - discountPrice
  return (
    <div>
      <Container>
        <div className="flex">
          <div className="w-1/2 relative h-120 p-5">
          <Image className=' border border-gray-300 px-10' src={product.thumbnail} alt='img'  fill />
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
            <div className="py-2">
              <h2 className='font-publicSans text-3xl'>{product.title}</h2>
            </div>
            <div className="py-6">
            <div className="">
              <div className="flex justify-between py-1">
                <div className="flex gap-2">
                  <p className='font-publicSans text-gray-600'>Sku:</p>
                  <h6 className='font-publicSans'>{product.sku}</h6>
                </div>
                <div className="flex gap-2">
                  <p className='font-publicSans text-gray-600'>Availability:</p>
                  <h6 className='font-publicSans text-[#2DB224]'>{product.availabilityStatus}</h6>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <p className='font-publicSans text-gray-600'>Brand:</p>
                  <h6 className='font-publicSans'>{product.brand}</h6>
                </div>
                <div className="flex gap-2">
                  <p className='font-publicSans text-gray-600'>Category:</p>
                  <h6 className='font-publicSans'>{product.category}</h6>
                </div>
              </div>
            </div>
            <div className="">
              {product.size}
            </div>
            </div>
            <div className="flex gap-2 items-center">
          <div className="">
           <h4 className='font-publicSans text-2xl text-[#2DA5F3]'>{mainPrice.toFixed(2)}</h4> 
          </div>
          <div className="font-publicSans text-[18px] text-[#77878F]">
            <del>{product.price}</del>
          </div>
          <div className="bg-[#EFD33D] hover:bg-white hover:text-black py-2 px-4 rounded">
            <h5 className='font-publicSans text-sm'>{product.discountPercentage}% OFF</h5>
          </div>
        </div>
        <div className="py-10 ">
          <h5 onClick={()=>handleCart(product)} className='font-publicSans bg-[#FA8232] py-5 text-white text-center rounded-xl'>Add to Cart</h5>
        </div>
        <div className=" py-6 border-2 border-gray-200 px-4 shadow-x">
          <p className='font-publicSans text-sm pb-3 '>100% Guarantee Safe Checkout</p>
          <Image src="/PaymentMethod.png" alt="payment" width={300} height={100}/>
        </div>
          </div>
        </div>
        <div className="py-20">
          <HomeProduct/>
        </div>
      </Container>
    </div>
  )
}

export default ProductDetails
