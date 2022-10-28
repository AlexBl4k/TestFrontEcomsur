import React, {  useEffect } from 'react'
import { Header } from './components/Header'
import 'boxicons'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { InfoProductPage } from './pages/InfoProductPage'
import { ProductsPage } from './pages/ProductsPage'
import { useDispatch } from 'react-redux'
import { savedData } from './reducers/cartReducer'
import { CartPage } from './pages/CartPage'


export const AppRouter = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        const data = localStorage.getItem('productsCart')
        if( !!data ) {
            dispatch(savedData(data))
        }
    },[])

    return (
        <div className='container'>
            <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<ProductsPage/>}/>
                <Route exact path="/product/:_id" element={<InfoProductPage/>}/>
                <Route exact path="/cart" element={<CartPage/>}/>
            </Routes>
            </Router>
        </div>
    )
}
