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
                <Image className='pb-4' src="/BanTwo.png" alt="Banner" width={400} height={400} />
                <Image className='pt-4' src="/BanThree.png" alt="Banner" width={400} height={400} />
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
