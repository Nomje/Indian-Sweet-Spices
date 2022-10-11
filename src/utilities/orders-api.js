import sendRequest from "./send-request";

const BASE_URL = '/api/orders'

export function fetchCart(){
    return sendRequest(`${BASE_URL}/cart`)
}

export function itemInCart(itemId){
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST')
}

export function itemQtyCart(itemId, newQty){
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
}

export function checkout(){
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getOrderHistory(){
    return sendRequest(`${BASE_URL}/history`);
}