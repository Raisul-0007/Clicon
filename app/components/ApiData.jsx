"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
const Data = createContext()
const ApiData = ({children}) => {
    let [info, setInfo] = useState([])
    let [loading, setLoading] =useState(true)
    let getData = ()=>{
        axios.get('https://dummyjson.com/products?&limit=0').then((response)=>{
            setInfo(response.data.products);
            setLoading(false)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
    <div>
      <Data.Provider value={{info, loading}}>{children}</Data.Provider>
    </div>
  )
}

export  {ApiData, Data}
