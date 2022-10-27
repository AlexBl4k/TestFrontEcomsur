import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, deleteProduct } from '../reducers/cartReducer'
import { server } from '../services/server'

export const ItemCart = (product) => {
  const dispatch = useDispatch()

  const handelDeleteProduct = () => {
      dispatch( deleteProduct( product ))

  }
  const handleAddToCart = () => {
    dispatch( addProduct( product ))
}
  return (
    <div className='item_cart'>
        <img src={`${server}${product.image}`} alt={product.name}/>
      <div>
          <h3>{product.name}</h3>
          <p className='price'>{product.price}</p>
      </div>
      <div>
          <box-icon name="up-arrow" type="solid" onClick={() => handleAddToCart()}></box-icon>
          <p className='cant'>{product.select}</p>
          <box-icon name="down-arrow" type="solid" onClick={() => handelDeleteProduct()}></box-icon>
      </div>
      <div className='item_remove' onClick={() => handelDeleteProduct()}>
          <box-icon name="trash"></box-icon>
      </div>
    </div>
  )
}
