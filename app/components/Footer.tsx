import React from 'react'
import Container from './Container';
import  Image  from 'next/image';
import { FaApple, FaArrowRight, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <Container className="flex">
        <div className="w-1/5">
          <Image src="/footerLogo.png" alt='foot' height="48" width="177"/>
          <div className="pt-6">
          <p className='font-publicSans text-sm text-gray-400'>Customer Supports:</p>
            <h5 className='font-publicSans text-md text-white'>(629) 555-0129</h5>
          </div>
          <p className='font-publicSans text-sm text-gray-400 py-2 pr-10'>4517 Washington Ave. Manchester, Kentucky 39495</p>
          <h5 className='font-publicSans text-md text-white'>info@kinbo.com</h5>
        </div>
        <div className="w-2/5 flex justify-center gap-25">
          <div className="font-publicSans text-gray-400 space-y-1.5">
            <h5 className='text-white text-lg pb-2'>Top Category</h5>
            <p>Computer & Laptop</p>
            <p>SmartPhone</p>
            <p>Headphone</p>
            <div className='flex items-center gap-2'><div className="h-1 w-6 bg-[#EBC80C]"></div> <p>Accessories</p></div>
            <p>Camera & Photo</p>
            <p>TV & Homes</p>
            <p className='text-[#EBC80C] flex items-center gap-3'>Browse All Product<FaArrowRight/></p>
          </div>
          <div className="font-publicSans text-gray-400 space-y-1.5">
            <h5 className='text-white text-lg pb-2'>Quick links</h5>
            <p>Shop Product</p>
            <p>Shoping Cart</p>
            <p>Wishlist</p>
            <p>Compare</p>
            <p>Track Order</p>
            <p>Customer Help</p>
            <p>About Us</p>
          </div>
        </div>
        <div className="w-2/5 font-publicSans text-white mx-auto w-fit">
          <h5 className='text-white text-lg pb-4'>Download APP</h5>
          <div className="flex gap-3 w-45 h-20 bg-gray-800 items-center justify-center  rounded my-2">
            <div className="text-4xl ">
              <FaGooglePlay />
            </div>
            <div className="">
              <p className='text-[12px] text-gray-300'>Get it now</p>
              <h6>Google Play</h6>
            </div>
          </div>
            <div className="flex gap-3 w-45 h-20 bg-gray-800 items-center justify-center  rounded my-4">
              <div className="text-5xl">
                <FaApple />
              </div>
              <div className="">
                <p className='text-[12px] text-gray-300'>Get it now</p>
              <h6>App Store</h6>
              </div>
            </div>
        </div>      
        </Container>
    </div>
  )
}

export default Footer
