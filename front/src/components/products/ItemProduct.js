import React from 'react'
import { Link } from 'react-router-dom'
import { server } from '../../services/server'

export const ItemProduct = (product) => {
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
        <p className='rating'>{product.rating}</p>
        <p className='numReviews'>{product.numReviews} reviews</p>
        </div>
        <div className='button'>
            <button className='btn'>
            Añadir al carrito
            </button>
            <div>
            <Link to={`product/${product._id}`} className='btn'>More Info</Link>
            </div>
        </div>
    </div>
  )
}
