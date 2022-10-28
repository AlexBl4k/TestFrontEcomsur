const initialState = []

export const savedData = ( data ) =>({
    type: 'save-cart',
    payload: JSON.parse(data)
})

export const addProduct = ( product ) => {
    const newProduct = {...product, select: 1}
    return async (dispatch, getState) => {
        try {
            const cart = getState().cartReducer
            const exists = cart.some(( {_id} ) => _id === newProduct._id)
            if( exists ) {
                const products = cart.map( product => {
                    return (
                        (product._id === newProduct._id) 
                            ? { ...product, select: product.select+1 <= product.countInStock ? ++product.select :  product.select }
                            : product
                    )
                })
                localStorage.setItem('productsCart',JSON.stringify( products ))
                dispatch({
                    type: 'add-product',
                    payload: products
                })
            } else {
                const products = [...cart, newProduct ]
                localStorage.setItem('productsCart',JSON.stringify( products ))
                                dispatch({
                    type: 'add-product',
                    payload: products
                })
            }

        } catch (error) {
            console.log('Error al agregar el producto')
        }
    }
}

export const deleteProduct = ({ _id }) => {
    return async (dispatch, getState) => {
        try {
            const cartState = getState().cartReducer
            const products = cartState.map(( product ) =>{
                return (
                    (product._id === _id ) 
                        ? {...product, select: --product.select, }
                        : product
                    )
            })
            const cart = products.filter( product => product.select > 0 )
            localStorage.setItem('productsCart',JSON.stringify( cart ))
            dispatch({
                type: 'delete-product',
                payload: cart
            })
        } catch (error) {
            console.log('Error al eliminar el producto')
        }
    }
}

export const deleteAllProduct = ({_id}) => {
    return async (dispatch, getState) => {
        try {
            const cartState = getState().cartReducer
            const products = cartState.map(( product ) =>{
                return (
                    (product._id === _id ) 
                        ? {...product, select: 0, }
                        : product
                    )
            })
            const cart = products.filter( product => product.select > 0 )
            localStorage.setItem('productsCart',JSON.stringify( cart ))
            dispatch({
                type: 'delete-all-product',
                payload: cart
            })
        } catch (error) {
            console.log('Error al eliminar el producto')
        }
    }
}

export const cartReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'save-cart':
            return action.payload
        case 'add-product':
            return action.payload
        case 'delete-product':
            return action.payload
        case 'delete-all-product':
            return action.payload
        default:
            return state
    }
}