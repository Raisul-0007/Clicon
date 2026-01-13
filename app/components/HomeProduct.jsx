"use client"
import { useContext } from 'react'
import Container from './Container';
import Image from 'next/image';
import { Data } from './ApiData';


const HomeProduct = () => {
    const {info, loading} = useContext(Data)
    if (loading){
        return (
            <div className="flex justify-center flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce"></div>
          <div
            className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>
        )
    }
  return (
    <div>
      <Container className="flex flex-wrap">
        <div className="md:w-1/4 w-[70%] px-2.5">
            <div className="">
                <h4 className='font-publicSans text-[18px] font-semibold'>FLASH SALE TODAY</h4>
            </div>
            <div className="">
                {info.slice(109,112).map((item)=>(
                    <div key={item.id} className="flex gap-3 border border-gray-200 my-4 py-2 pr-2">
                        <Image className='' src={item.thumbnail} alt="" width={70} height={70}/>
                        <div className="py-3">
                            <h2 className='font-publicSans'>{item.title}</h2>
                            <p className='font-publicSans text-[#2DA5F3] text-sm pt-1.5'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="md:w-1/4 w-[70%] px-2.5">
            <div className="">
                <h4 className='font-publicSans text-[18px] font-semibold'>BEST SELLERS</h4>
            </div>
                <div className="">
                {info.slice(113,116).map((item)=>(
                    <div key={item.id} className="flex gap-3 border border-gray-200 my-4 py-2 pr-2">
                        <Image className='' src={item.thumbnail} alt="" width={70} height={70}/>
                        <div className="py-3">
                            <h2 className='font-publicSans'>{item.title}</h2>
                            <p className='font-publicSans text-[#2DA5F3] text-sm pt-1.5'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="md:w-1/4 w-[70%] px-2.5">
            <div className="">
                <h4 className='font-publicSans text-[18px] font-semibold'>TOP RATED</h4>
            </div>
                <div className="">
                {info.slice(121,124).map((item)=>(
                    <div key={item.id} className="flex gap-3 border border-gray-200 my-4 py-2 pr-2">
                        <Image className='' src={item.thumbnail} alt="" width={70} height={70}/>
                        <div className="py-3">
                            <h2 className='font-publicSans'>{item.title}</h2>
                            <p className='font-publicSans text-[#2DA5F3] text-sm pt-1.5'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="md:w-1/4 w-[70%] px-2.5">
            <div className="">
                <h4 className='font-publicSans text-[18px] font-semibold'>NEW ARRIVALS</h4>
            </div>
            <div className="">
                {info.slice(136,139).map((item)=>(
                    <div key={item.id} className="flex gap-3 border border-gray-200 my-4 py-2 pr-2">
                        <Image className='' src={item.thumbnail} alt="" width={70} height={70}/>
                        <div className="py-3">
                            <h2 className='font-publicSans'>{item.title}</h2>
                            <p className='font-publicSans text-[#2DA5F3] text-sm pt-1.5'>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeProduct
