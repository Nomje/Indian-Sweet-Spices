import sendRequest from "./send-request";

const BASE_URL = '/api/items';

export function fetchAll(){
    return sendRequest(BASE_URL)
}

export function getItem(){
    return sendRequest(`${BASE_URL}/${id}`)
}