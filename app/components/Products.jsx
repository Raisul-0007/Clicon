"use client"
import Image from 'next/image'
import Link from 'next/link'

const Products = ({filterCategory,allpage}) => {
  let data = filterCategory.length > 0 ? filterCategory : allpage
  return (
    <div className="flex flex-wrap ">
      {data.map((item)=>(
      <div key={item.id} className='w-1/4 p-3 relative'>
        <div className="relative">
          <Link href={`/shop/${item.id}`}>
            <Image className='w-[100%]' height="200" width='200' src={item.thumbnail} alt="" />
          </Link>
          <div className="font-publicSans lg:text-[12px] text-[10px] bg-[#2DA5F3] text-[#FFFFFF] py-1 lg:px-2 px-1 absolute lg:top-[15px] top-0 lg:left-[15px] left-0">
            {item.discountPercentage} %
          </div>
        </div>
          <div className="py-5">
            <h3 className='font-publicSans lg:text-[16px] text-[12px]'>{item.title}</h3>
            <p className='font-publicSans lg:text-[16px] text-[12px] text-[#767676]'>{item.category}</p>
            <h2 className='font-publicSans lg:text-[16px] text-[12px] text-[#2DA5F3]'>{item.price} $</h2>
          </div>
      </div>
      ))}
    </div>
  )
}

export default Products
