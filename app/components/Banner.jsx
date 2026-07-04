import React from 'react'
import Container from './Container';
import Image  from 'next/image';

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-6 py-5">
            <div className="w-4/6">
            <Image src="/BanOne.png" alt="Banner" width={1200} height={400} />
            </div>
            <div className="w-2/6">
                <Image className='pb-2' src="/BanTwo.png" alt="Banner" width={500} height={350} />
                <Image className='pt-2' src="/BanThree.png" alt="Banner" width={500} height={350} />
            </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="md:w-1/4 w-2/4 py-2 flex items-center gap-2">
            <Image className='md:w-10 w-8' src="/banIconOne.png" alt="one" height={40} width={40}/>
            <div className="">
              <h4 className='font-publicSans md:text-[16px] text-[14px]'>Fasted Delivery</h4>
              <p className='font-publicSans text-[#5F6C72] md:text-[12px] text-[10px]'>Delivery in 24/H</p>
            </div>
          </div>
          <div className="md:w-1/4 w-2/4 py-2 flex items-center gap-2">
            <Image className='md:w-10 w-8' src="/banIconTwo.png" alt="Two" height={40} width={40}/>
            <div className="">
              <h4 className='font-publicSans md:text-[16px] text-[14px]'>24 Hours Return</h4>
              <p className='font-publicSans text-[#5F6C72] md:text-[12px] text-[10px]'>100% money-back guarantee</p>
            </div>
          </div>
          <div className="md:w-1/4 w-2/4 py-2 flex items-center gap-2">
            <Image className='md:w-10 w-8' src="/banIconThree.png" alt="Three" height={40} width={40}/>
            <div className="">
              <h4 className='font-publicSans md:text-[16px] text-[14px]'>Secure Payment</h4>
              <p className='font-publicSans text-[#5F6C72] md:text-[12px] text-[10px]'>Your money is safe</p>
            </div>
          </div>
          <div className="md:w-1/4 w-2/4 py-2 flex items-center gap-2">
            <Image className='md:w-10 w-8' src="/banIconFour.png" alt="Four" height={40} width={40}/>
            <div className="">
              <h4 className='font-publicSans md:text-[16px] text-[14px]'>Support 24/7</h4>
              <p className='font-publicSans text-[#5F6C72] md:text-[12px] text-[10px]'>Live contact/message</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner