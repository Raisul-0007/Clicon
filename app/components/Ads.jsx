import React from 'react'
import Container from './Container';
import Image  from 'next/image';

const Ads = () => {
  return (
    <div>
      <Container className="flex flex-wrap justify-between py-15">
        <div className="w-1/2 pr-3">
            <Image src="/AdsOne.png" alt="ads" width={700} height={400}/>
        </div>
        <div className="w-1/2 pl-3">
            <Image src="/AdsTwo.png" alt="ads" width={700} height={400}/>
        </div>
      </Container>
    </div>
  )
}

export default Ads
