import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Header = () => {
  const { cartReducer  } = useSelector(state => state)
  const [ totalProducts, setTotalProducts ] = useState(0)

  useEffect(() => {

    let productsAux = 0
    let priceAux = 0
    cartReducer.forEach(product => {
        productsAux+= +product.select
        priceAux+= (product.price * productsAux)
    })
    setTotalProducts( productsAux )
  
  }, [cartReducer])
  

  return (
    <header>
      <ul>
        <li>
          <Link to={'/'}>
            <span>Products</span>
          </Link>
        </li>
      </ul>
      <Link to={'/cart'}>
        <div className='cart_logo'>
            <box-icon name="cart"></box-icon>
            <span className='item_total'>{totalProducts}</span>
        </div>
      </Link>

    </header>
  )
}
