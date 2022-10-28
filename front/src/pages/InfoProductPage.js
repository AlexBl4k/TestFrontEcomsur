import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Stars } from '../components/Stars'
import { addProduct } from '../reducers/cartReducer'
import { productsReducer } from '../reducers/productsReducer'
import { server } from '../services/server'

export const InfoProductPage = () => {
  const { _id } = useParams()
  const  {productsReducer} = useSelector(state => state)
  const [product, setProduct] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('productInfo')
    setProduct(JSON.parse(data))
    console.log(product)
  }, [])

  useEffect(() => {
    productsReducer.forEach(product => {
      console.log(product._id, _id)
      if(product._id === _id){
        setProduct(product)
        localStorage.setItem('productInfo',JSON.stringify( product ))
        const data = localStorage.getItem('productInfo')
        console.log(data)
      }
    })
  },[_id, productsReducer])


  

  const dispatch = useDispatch()
  const handleAddToCart = () => {
    if(product.countInStock < 1 ){
      window.alert('Sorry, no more in stock')
    } else {
      window.alert('Added to Cart')
      dispatch( addProduct( product ))
    }
  }
  
  return (
    <>
        {
          <div className='details'>
            <img src={`${server}${product.image}`} alt={product.name}/>
            <div className='details_text'>
              <h2>{product.name}</h2>
              <div className='brand_category'>
                <p className='brand'>{product.brand}</p>
                <p  className='guide'>-</p>
                <p className='category'>{product.category}</p>
                <div className='star'>
                  <Stars star={product.rating}/>
                  <p className='numReviews'>{product.numReviews} reviews</p>
                </div>
              </div>

              <div className='description'>
                <p>
                  <b>Description:</b> {product.description}
                </p>
              </div>
              <p className='price'>$ {product.price}</p>
              
              <button disabled={product.countInStock < 1} onClick={()=>handleAddToCart()}>
                {
                    (product.countInStock < 1) ? 'Not available' : 'Add to cart'
                }
                </button>
            </div>


          </div>
        }
    </>

  )
}
