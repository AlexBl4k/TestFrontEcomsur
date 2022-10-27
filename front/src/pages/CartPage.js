import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ItemCart } from '../components/ItemCart'


export const CartPage = () => {
    const { cartReducer  } = useSelector(state => state)
    const [ totalPrice, setTotalPrice ] = useState(0)

    useEffect(() => {
        let productsAux = 0
        let priceAux = 0
        cartReducer.forEach(product => {
            productsAux+= +product.select
            priceAux+= (product.price * productsAux)
        })
        setTotalPrice( priceAux.toFixed(2) )

    }, [cartReducer])
    

    return (
        <div className="carts">
            <div className="cart">
                <h2>Your Products</h2>
                <div className='cart_center'>
                    {
                        (cartReducer.length > 0) 
                            ? cartReducer.map( product => <ItemCart key={`product-cart-${product._id}`} {...product} />)
                            :<p>The cart is empty</p>
                    }
                </div>
                <div className='cart_footer'>
                    <h3>Total: $ {totalPrice}</h3>
                    <button className='btn' disabled={cartReducer.length <1}>Payment</button>
                </div>
            </div>
        </div>
    )
}
