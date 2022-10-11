import sendRequest from "./send-request";

const BASE_URL = '/api/orders'

export function fetchCart(){
    return sendRequest(`${BASE_URL}/cart`)
}

export function itemInCart(){

}

export function itemQtyCart(){

}

export function checkout(){

}

export function getOrderHistory(){

}