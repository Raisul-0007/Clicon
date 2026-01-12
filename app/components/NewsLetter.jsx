import React from 'react'
import Container from './Container'
import  Link  from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const NewsLetter = () => {
  return (
    <div className='bg-[#1B6392]'>
      <Container className="w-150 py-15">
        <h3 className='text-[32px] font-semibold text-white text-center'>Subscribe to our newsletter</h3>
        <p className='text-sm text-gray-300 text-center py-5 px-15'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
        <div className="bg-white py-3 px-3 flex gap-4">
            <input className='bg-white w-105 border-none outline-none focus:ring-0 py-3 pl-5' type="text" placeholder='Email address'/>
            <Link href="#" className="bg-[#FF6E14] hover:bg-[rgba(206,97,30,0.97)] uppercase text-white hover:text-gray-300 py-3 px-8 no-underline flex items-center gap-2">Subscribe <FaArrowRight /></Link>
        </div>
        <div className="flex justify-between px-5 py-3">
            <Image src="/NewsOne.svg" alt="newsletter" width={80} height={80}/>
            <Image src="/NewsTwo.svg" alt="newsletter" width={80} height={80}/>
            <Image src="/NewsThree.svg" alt="newsletter" width={80} height={80}/>
            <Image src="/NewsFour.svg" alt="newsletter" width={80} height={80}/>
            <Image src="/NewsFive.svg" alt="newsletter" width={80} height={80}/>
        </div>
      </Container>
    </div>
  )
}

export default NewsLetter
