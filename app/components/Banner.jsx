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
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image src="/banIconOne.png" alt="one" height={40} width={40}/>
            <div className="">
              <h4 className='font-publicSans'>Fasted Delivery</h4>
              <p className='font-publicSans text-[#5F6C72] text-[12px]'>Delivery in 24/H</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/banIconTwo.png" alt="Two" height={40} width={40}/>
            <div className="">
              <h4 className='font-publicSans'>24 Hours Return</h4>
              <p className='font-publicSans text-[#5F6C72] text-[12px]'>100% money-back guarantee</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/banIconThree.png" alt="Three" height={40} width={40}/>
            <div className="">
              <h4 className='font-publicSans'>Secure Payment</h4>
              <p className='font-publicSans text-[#5F6C72] text-[12px]'>Your money is safe</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/banIconFour.png" alt="Four" height={40} width={40}/>
            <div className="">
              <h4 className='font-publicSans'>Support 24/7</h4>
              <p className='font-publicSans text-[#5F6C72] text-[12px]'>Live contact/message</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
