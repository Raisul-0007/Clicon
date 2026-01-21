"use client"
import { Data } from '@/app/components/ApiData'
import Container from '@/app/components/Container'
import { useContext, useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

const page = () => {
    let {info} = useContext(Data)
    let [cate, cateShow] = useState(true)
    let [category, setCategory] = useState([])
    let [filterCategory, setfilterCategory] = useState([])

    useEffect(()=>{
      setCategory([...new Set( info.map((item)=>item.category))])
    },[info])
    let handleCategory =(cItem)=>{
      let filterItem = info.filter((item : any)=> item.category)
      setfilterCategory(filterItem)
    }
    let handleAllProduct = ()=> {
    setfilterCategory("")
    }
  return (
    <div>
      <Container>
        <div onClick={(()=> cateShow(!cate))} className="flex items-center gap-2">
          <h2 className='text-3xl'>Category</h2>
        <div className="text-3xl">
        {cate ? <MdArrowDropUp/> : <MdArrowDropDown/>}
        </div>
        </div>
       {cate && (
         <ul>
          <li onClick={handleAllProduct} className='font-publicSans text-[18px] text-[#767676]'>All Prodructs</li>
          {category.map((item, index)=>(
          <li key={index} onClick={()=>handleCategory(item)} >
             <p className='font-publicSans text-[18px] text-[#767676]'> {item}</p>
                    <div className="p-1">
                        <AiOutlinePlus/>
                    </div>
          </li>
          ))}
        </ul>
       )}
      <div className="">
         {filterCategory.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
      </Container>
    </div>
  )
}

export default page
