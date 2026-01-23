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
    let [cate, cateShow] = useState(true)
    let [category, setCategory] = useState<any[]>([])
    let [filterCategory, setfilterCategory] = useState<any[]>([])

    useEffect(()=>{
      setCategory([...new Set( info.map((item : any)=>item.category))])
    },[info])
    let handleCategory =(cItem : any)=>{
      let filterItem = info.filter((item : any)=> item.category == cItem)
      setfilterCategory(filterItem)
    }
    let handleAllProduct = ()=> {
    setfilterCategory([])
    }
    // Pagination
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
  return (
    <div>
      <Container className="flex gap-5">
        <div className="w-1/4">
          <div onClick={(()=> cateShow(!cate))} className="flex justify-between items-center gap-2">
          <h2 className='font-publicSans text-3xl py-5'>Category</h2>
        <div className="text-3xl">
        {cate ? <MdArrowDropUp/> : <MdArrowDropDown/>}
        </div>
        </div>
       {cate && (
         <ul>
          <li onClick={handleAllProduct} className='font-publicSans text-[18px]  text-gray-600 flex justify-between items-center py-0.5 hover:text-black cursor-pointer'>
            All Prodructs 
            <div className="p-1">
              <AiOutlinePlus/>
            </div>
          </li>
          {category.map((item, index)=>(
          <li key={index} onClick={()=>handleCategory(item)} >
             <div className='font-publicSans text-[18px] text-gray-600 flex justify-between items-center py-1 hover:text-black cursor-pointer'>
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
      <div className="w-3/4">
        <div className="font-publicSans flex justify-end gap-2 items-center">
          <p className='mx-0 text-lg'>Show :</p>
          <select className='w-20 h-8 px-2 border' onChange={handlePage} name="" id="">
            <option className='text-lg w-full' value="12">12</option>
            <option className='text-lg w-full' value="24">24</option>
            <option className='text-lg w-full' value="36">36</option>
          </select>
        </div>
        <div className="py-5">
          <Products allpage={allpage} filterCategory={filterCategory}/>
        </div>
        <div className="py-5 pb-20">
          <Pagination pageNumber={pageNumber} paginate={paginate} prev={prev} next={next} currentpage={currentpage} filterCategory={filterCategory}/>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default page
