"use client"
import { Data } from '@/app/components/ApiData'
import Container from '@/app/components/Container'
import { useContext, useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import Products from './../../components/Products';
import Pagination from './../../components/Pagination';

const page = () => {
   useEffect(() => {
    window.scrollTo(0, 0)
   },[])

    let {info} = useContext(Data)
    let [cate, cateShow] = useState(false)
    let [brandShow, brandSetShow] = useState(false)
    let [priceShow, setPriceShow] = useState(false)
    let [category, setCategory] = useState<any[]>([])
    let [brand, setBrand] = useState<any[]>([])
    let [low, setLow ] = useState()
    let [high, setHigh ] = useState()
    let [filterCategory, setfilterCategory] = useState<any[]>([])
    useEffect(()=>{
      setCategory([...new Set( info.map((item : any)=>item.category))])
    },[info])
    useEffect(()=>{
      setBrand([...new Set(info.map((item: any)=> item.brand))])
    },[info])

    let handleCategory =(cItem : any)=>{
      let filterItem = info.filter((item : any)=> item.category == cItem)
      setfilterCategory(filterItem)
    }
    let handleBrand = (bItem:any)=>{
      let brandItem = info.filter((item:any)=> item.brand == bItem)
      setfilterCategory(brandItem)
    }
    let handleAllProduct = ()=> {
    setfilterCategory([])
    }

    let [perpage, setPerpage] = useState(12)
    let [currentpage,setCurrentpage] = useState(1)
    let everyPage =  perpage * currentpage;
    let firstPage = everyPage - perpage;
    let allpage = info.slice(firstPage, everyPage)
    let pageNumber =[]

    for (let i=1; i<= Math.ceil(info.length/perpage); i++){
      pageNumber.push(i)
    }
    let prev= ()=>{
      if(currentpage > 1){
        setCurrentpage((index)=> index-1)
      }
    }
    let paginate = (index: any)=>{
      setCurrentpage(index + 1)
    }
    let next= ()=>{
      if(currentpage < pageNumber.length){
        setCurrentpage((index)=> index + 1)
      }
    }
    let handlePage=(e : any)=>{
      setPerpage(e.target.value)
    }
    let handlePrice = (value: any)=>{
      setLow(value.low)
      setHigh(value.high)
      let priceFilter = info.filter(((item: any)=> item.price > value.low && item.price < value.high))
      setfilterCategory(priceFilter)
    }
  return (
    <div>
      <Container className="">
        <div className="py-20">
          <h2 className='font-bold text-4xl'>Shop</h2>
        </div>
        <div className="flex lg:gap-5">
        <div className="w-1/4">
        <div className="">
          <div onClick={(()=> cateShow(!cate))} className="flex justify-between items-center">
          <h2 className='font-publicSans lg:text-3xl py-5'>Category</h2>
        <div className="lg:text-3xl">
        {cate ? <MdArrowDropUp/> : <MdArrowDropDown/>}
        </div>
        </div>
       {cate && (
         <ul>
          <li onClick={handleAllProduct} className='font-publicSans lg:text-[18px] text-[12px]  text-gray-600 flex justify-between items-center py-0.5 hover:text-black cursor-pointer'>
            All Prodructs 
            <div className="p-1">
              <AiOutlinePlus/>
            </div>
          </li>
          {category.map((item, index)=>(
          <li key={index} onClick={()=>handleCategory(item)} >
             <div className='font-publicSans lg:text-[18px] text-[12px] text-gray-600 flex justify-between items-center py-1 hover:text-black cursor-pointer'>
                {item}
                <div className="p-1">
                  <AiOutlinePlus/>
                </div>
                </div>
          </li>
          ))}
        </ul>
       )}
        </div>
        <div className="">
          <div onClick={(()=> brandSetShow(!brandShow))} className="flex justify-between items-center">
          <h2 className='font-publicSans lg:text-3xl py-5'>Brand</h2>
        <div className="lg:text-3xl">
        {brandShow ? <MdArrowDropUp/> : <MdArrowDropDown/>}
        </div>
        </div>
        {brandShow && (
         <ul>
          <li onClick={handleAllProduct} className='font-publicSans lg:text-[18px] text-[12px]  text-gray-600 flex justify-between items-center py-0.5 hover:text-black cursor-pointer'>
            All Prodructs 
            <div className="p-1">
              <AiOutlinePlus/>
            </div>
          </li>
          {brand.map((item, index)=>(
          <li key={index} onClick={()=>handleBrand(item)} >
             <div className='font-publicSans lg:text-[18px] text-[12px] text-gray-600 flex justify-between items-center py-1 hover:text-black cursor-pointer'>
                {item}
                <div className="p-1">
                  <AiOutlinePlus/>
                </div>
                </div>
          </li>
          ))}
        </ul>
       )}
       </div>
       <div className="">
        <div className="flex justify-between items-center">
          <h3 className="">Price</h3>
          <div onClick={(()=> setPriceShow(!priceShow))} className="lg:text-3xl">
        {priceShow ? <MdArrowDropUp/> : <MdArrowDropDown/>}
        </div>
        </div>
        <div className="">
          {priceShow && (
            <ul >
              <li onClick={handleAllProduct} className='font-publicSans lg:text-[18px] text-[12px]  text-gray-600 flex justify-between items-center py-0.5 hover:text-black cursor-pointer'>
                All Prodructs 
            <div className="p-1">
              <AiOutlinePlus/>
            </div>
              </li>
            <li >
             <div onClick={()=> handlePrice({low:0, high:100})}  className='font-publicSans lg:text-[18px] text-[12px] text-gray-600 flex justify-between items-center py-1 hover:text-black cursor-pointer'>
                $0-$100
                <div className="p-1">
                  <AiOutlinePlus/>
                </div>
                </div>
            </li>
             <li >
             <div onClick={()=> handlePrice({low:101, high:1000})} className='font-publicSans lg:text-[18px] text-[12px] text-gray-600 flex justify-between items-center py-1 hover:text-black cursor-pointer'>
              $101-$1000
                <div className="p-1">
                  <AiOutlinePlus/>
                </div>
                </div>
            </li>
             <li >
             <div onClick={()=> handlePrice({low:1001, high:10000})} className='font-publicSans lg:text-[18px] text-[12px] text-gray-600 flex justify-between items-center py-1 hover:text-black cursor-pointer'>
              $1001-$10000
                <div className="p-1">
                  <AiOutlinePlus/>
                </div>
                </div>
            </li>
             <li >
             <div onClick={()=> handlePrice({low:10001})} className='font-publicSans lg:text-[18px] text-[12px] text-gray-600 flex justify-between items-center py-1 hover:text-black cursor-pointer'>
               10000+
                <div className="p-1">
                  <AiOutlinePlus/>
                </div>
                </div>
            </li>
            </ul>
          )}
        </div>
       </div>
        </div>
      <div className="w-3/4">
        <div className="font-publicSans flex justify-end gap-2 items-center">
          <p className='mx-0 lg:text-lg text-[12px]'>Show :</p>
          <select className='lg:w-20 h-8 px-2 border lg:text-[16px] text-[12px]' onChange={handlePage} name="" id="">
            <option className='lg:text-lg text-[12px] w-full' value="12">12</option>
            <option className='lg:text-lg text-[12px] w-full' value="24">24</option>
            <option className='lg:text-lg w-full text-[12px]' value="36">36</option>
          </select>
        </div>
        <div className="py-5">
          <Products allpage={allpage} filterCategory={filterCategory}/>
        </div>
        <div className="py-5 pb-20">
          <Pagination pageNumber={pageNumber} paginate={paginate} prev={prev} next={next} currentpage={currentpage} filterCategory={filterCategory}/>
        </div>
      </div>
      </div>
      </Container>
    </div>
  )
}

export default page
