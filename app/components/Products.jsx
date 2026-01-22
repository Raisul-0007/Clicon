"use client"
import React from 'react'

const Products = ({filterCategory,allProducts}) => {
    const productsToShow =filterCategory.length > 0 ? filterCategory : allProducts
  return (
    <div>
      {productsToShow.length === 0 ? (
        <p>No products found</p>
      ) : (
        productsToShow.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Products
