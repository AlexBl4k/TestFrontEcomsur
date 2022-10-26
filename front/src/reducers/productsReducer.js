import { fetchToApi } from "../services/fetchToApi"

const initialState = []

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchToApi('GET','/products')
            dispatch({
                type: 'set-products',
                payload: [...resp]
            })
        } catch (error) {
            console.log('Error a la insercion de productos')
        }
    }
}
export const  productsReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case 'set-products':
            return action.payload
        default:
            return state
    }
}