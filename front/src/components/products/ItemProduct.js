import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../../reducers/cartReducer'
import { server } from '../../services/server'
import { Stars } from '../Stars'

export const ItemProduct = (product) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        if(product.countInStock < 1 ){
          window.alert('Sorry, no more in stock')
        } else {
          dispatch( addProduct( product ))
        }
    }
  return (
    <div className='product'>
        <Link to={`product/${product._id}`}>
            <div className='image_product'>
                <img src={`${server}${product.image}`} alt={product.name}/>
            </div>
        </Link>
        <div className='footer_product'>
        <h1>{product.name}</h1>
        <p className='description'>{product.description}</p>
        <div style={{flexDirection: 'row', display: 'flex'}}>
            <p className='brand'>{product.brand}</p>
            <p style={{marginLeft: '10px', marginRight: '10px'}}>-</p>
            <p className='category'>{product.category}</p>
        </div>
        <p className='price'>${product.price}</p>
        <Stars star={product.rating}/>
        <p className='numReviews'>{product.numReviews} reviews</p>
        </div>
        <div className='button'>
            <button className='btn' disabled={product.countInStock < 1} onClick={()=>handleAddToCart()}>
                {
                    (product.countInStock < 1) ? 'Not available' : 'Add to cart'
                }
            </button>
            <div>
            <Link to={`product/${product._id}`} className='btn'>More Info</Link>
            </div>
        </div>
    </div>
  )
}
