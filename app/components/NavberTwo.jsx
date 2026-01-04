import React from 'react'
import Container from './Container';
import { IoIosArrowDown, IoIosGitCompare, IoIosInformationCircleOutline } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineCustomerService } from 'react-icons/ai';

const NavberTwo = () => {
  return (
    <div className='border-b border-[#5F6C72] py-3'>
      <Container>
        <div className="">
          <ul className=' flex '>
            <li className='font-publicSans bg-[#F2F4F5] text-sm flex gap-2 items-center px-6 py-3'>All Category <IoIosArrowDown /></li>
            <li className='font-publicSans flex gap-2 items-center text-[#5F6C72] text-sm px-6 py-3'><IoLocationOutline />Track Order</li>
            <li className='font-publicSans flex gap-2 items-center text-[#5F6C72] text-sm px-6 py-3'><IoIosGitCompare />Compare</li>
            <li className='font-publicSans flex gap-2 items-center text-[#5F6C72] text-sm px-6 py-3'><AiOutlineCustomerService />Customer Support</li>
            <li className='font-publicSans flex gap-2 items-center text-[#5F6C72] text-sm px-6 py-3'><IoIosInformationCircleOutline />Need Help</li>
          </ul>
        </div>
        <div className=""></div>
      </Container>
    </div>
  )
}

export default NavberTwo
