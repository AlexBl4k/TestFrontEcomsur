import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProductsList } from '../components/products/ProductsList'
import { getProducts } from '../reducers/productsReducer'

export const ProductsPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch( getProducts() )
}, [ dispatch ])
  return (
    <ProductsList/>
  )
}
