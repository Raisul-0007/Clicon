import React from 'react'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'

const Rating = ({rating = 0}) => {
  return ( 
    <>
    {Array.from({length:5 }, (_,index)=>{
    if (rating >= index+ 1){
        return<IoIosStar key={index}/>
    }else if(rating >= index+0.5){
      return <IoIosStarHalf key={index}/>
    }else{
      return<IoIosStarOutline key={index}/>
    }
  })}
  </>
)
}
export default Rating