import React from 'react'
import Category from '../components/Category'
import Ads from '../components/Ads'
import Features from '../components/Features'
import HomeProduct from '../components/HomeProduct'
import NewsLetter from '../components/NewsLetter'
import Banner  from '../components/Banner'

export default function page() {
  return (
    <div>
      <Banner/>
      <Category/>
      <Features/>
      <Ads/>
      <HomeProduct/>
      <NewsLetter/>
    </div>
  )
}
