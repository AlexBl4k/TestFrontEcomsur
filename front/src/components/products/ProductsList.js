import React from 'react'
import { useSelector } from 'react-redux'
import { ItemProduct } from './ItemProduct'

export const ProductsList = () => {
  const { productsReducer } = useSelector(state => state)
  return (
    <>
      <h1 className='title'>PRODUCTS</h1>
      <div className='products'>
      {
        (productsReducer.length > 0) 
            && productsReducer.map( product => <ItemProduct key={`item-product-${product._id}`} {...product}/> )
      }
      </div>
    </>
  )
}
