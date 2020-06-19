import Cookies from 'js-cookie'

/**
 * 
 * @param {String} token 存入的token
 * @param {Number,String} expires  有效期时间  /天
 */
export function setToken(token, expires) {
    return Cookies.set('Token', token, { expires: expires })
}
export function removeToken() {
    return Cookies.remove('Token')
}
export function getToken() {
    return Cookies.get('Token')
}

// 设置token过期时间
export function getExpires() {
    return Cookies.get('expires')
}

export function setExpires(expires) {
    return Cookies.set('expires', expires)
}

export function removeExpires() {
    return Cookies.remove('expires')
}