import React from 'react'

const Pagination = ({pageNumber, paginate, prev, next, currentpage, filterCategory}) => {
  return (
    <div className='flex justify-center'>
      <nav aria-label="Page navigation example" className={`${filterCategory.length > 0 ? "hidden" : ""}`}>
  <ul className="flex -space-x-px text-sm">
    <li onClick={prev}>
      <a href="#" className="font-publicSans lg:text-[14px] text-[10px] px-3 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-[#2DA5F3] hover:text-white cursor-pointer">Previous</a>
    </li>
    {pageNumber.map((item, index)=>(
    <li key={index} onClick={()=>paginate(index)}>
      <a href="#" aria-current="page" className={`${currentpage == index + 1 ? "font-publicSans lg:text-[14px] text-[10px] px-3 py-2 border hover:bg-[#2DA5F3] border-gray-300 bg-[#2DA5F3] text-white cursor-pointer" : "font-publicSans lg:text-[14px] text-[10px] px-3 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-[#2DA5F3] hover:text-white cursor-pointer"}`}>{item}</a>
    </li>
    ))}
    <li onClick={next}>
      <a href="#" className="font-publicSans lg:text-[14px] text-[10px] px-3 py-2  text-gray-500 bg-white border  border-gray-300 hover:bg-[#2DA5F3] hover:text-white cursor-pointer">Next</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Pagination
