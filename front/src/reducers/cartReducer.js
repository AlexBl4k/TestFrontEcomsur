const initialState = []

export const savedData = ( data ) =>({
    type: 'save-cart',
    payload: JSON.parse(data)
})

export const  cartReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case 'save-cart':
            return action.payload
        case 'add-product':
            return state
        case 'delete-product':
            return state
    
        default:
            return state
    }
}