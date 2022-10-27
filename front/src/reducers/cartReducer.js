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
            const check = cart.some(( {_id} ) => _id === newProduct._id)
            if( check ) {
                const product = cart.map( product => {
                    return (
                        (product._id === newProduct._id) 
                            ? { ...product, select: product.select+1 <= product.countInStock ? ++product.select :  product.select }
                            : newProduct
                    )
                })
                localStorage.setItem('productsCart',JSON.stringify( product ))
                dispatch({
                    type: 'add-product',
                    payload: product
                })
            } else {
                const product = [...cart, newProduct ]
                localStorage.setItem('productsCart',JSON.stringify( product ))
                dispatch({
                    type: 'add-product',
                    payload: product
                })
            }

        } catch (error) {
            console.log('Error al agregar el productos')
        }
    }
}
export const deleteProduct = ({ _id }) => {
    return async (dispatch, getState) => {
        try {
            const cart = getState().cartReducer
            const products = cart.map(( product ) =>{
                return (
                    (product._id === _id ) 
                        ? {...product, select: --product.select, }
                        : product
                    )
            })
            const product = products.filter( product => product.select > 0 )
            localStorage.setItem('productsCart',JSON.stringify( product ))
            dispatch({
                type: 'delete-product',
                payload: product
            })
        } catch (error) {
            console.log('Error al agregar el productos')
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
        default:
            return state;
    }
}