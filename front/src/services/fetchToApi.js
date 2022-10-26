import { api } from "./server"


export const fetchToApi = async ( type, endpoint, data = {} ) => {
    let datarecived
    let resp
    try {
        const url =`${api}${endpoint}`
        if( type === 'GET') {
            resp = await fetch( url )
            datarecived = await resp.json()
            return datarecived

        } else {
            resp = await fetch( url, {type, body: JSON.stringify( data )})
            datarecived = await resp.json()
            return datarecived
        }
    } catch (error) {
        console.log('Error en Fetch', error)
    }
}
