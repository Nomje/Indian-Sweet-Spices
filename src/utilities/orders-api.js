import sendRequest from "./send-request";

const BASE_URL = '/api/orders'

export function fetchCart(){
    return sendRequest(`${BASE_URL}/cart`)
}

export function itemInCart(itemId){
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST')
}

export function itemQtyCart(){

}

export function checkout(){

}

export function getOrderHistory(){

}