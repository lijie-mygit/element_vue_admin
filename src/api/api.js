import axios from './axios'

export function get(params) {
    return axios({
        url: 'transaction/order/list/',
        method: 'get',
        data: params
    })
}

export function post(params) {
    return axios({
        method: 'post',
        url: '/user/12345',
        data: params
    })
}

export function delet(params) {
    return axios({
        method: 'delete',
        url: `advertising/permanent/delete/`,
        data: params
    })
}