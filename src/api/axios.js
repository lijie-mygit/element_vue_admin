import axios from 'axios'
import { Message, MessageBox, Notification } from 'element-ui'
import AuthAction from './token'
// axios.defaults.baseURL = 'http://zswenlv.mini.backstage.xunbaowang.net/interface/v1/';  //线上
axios.defaults.baseURL = '/interface/v1/'; //开发

const http = axios.create({
    timeout: 10000, // 请求超时时间
    headers: { 'Access-Control-Allow-Origin': 'http://zswenlv.mini.backstage.xunbaowang.net/' } //,'Access-Control-Max-Age':1000
})

http.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'Bearer access_token=' + AuthAction.getToken()
        config.headers['Content-Type'] = 'application/json'
        config.headers['Accept'] = 'application/json';
        return config;
    },
    err => {
        return Promise.reject(err)
    }
)

// http response 拦截器
http.interceptors.response.use(
    response => {
        const res = response.data
        if (res.error_code * 1 === 0) {
            return res.data;
        }
        if (res.error_code * 1 === 1001) {
            Notification.error({
                title: '错误',
                message: res.message,
                duration: 2000,
            });
            for (let i in res.error_fields) {
                res.error_fields[i].forEach(item => {
                    console.log(`ERROR! ==> ${i}: ${item}`)
                    setTimeout(() => {
                        Notification.error({
                            title: '错误',
                            message: `${i}: ${item}`,
                            duration: 2500,
                        });
                    }, 10);
                })
            }
            return Promise.reject('reject!')
        }
        if (res.error_code * 1 === 5000) {
            Notification.error({
                title: '错误',
                message: res.message,
                duration: 2000,
            });
            return Promise.reject('reject!')
        }
        if (res.error_code * 1 === 4001) {
            MessageBox(
                '登录超时，请重新登录',
                '确定登出', {
                    confirmButtonText: '重新登录',
                    type: 'warning',
                    showCancelButton: false,
                    showClose: false,
                    closeOnClickModal: false
                }
            ).then(() => {
                AuthAction.removeExpires();
                AuthAction.removeToken();
                location.reload();
            })
            return Promise.reject('reject!')
        }
        if (res.error_code * 1 === 4002) {
            MessageBox(
                '登录超时，请重新登录',
                '确定登出', {
                    confirmButtonText: '重新登录',
                    type: 'warning',
                    showCancelButton: false,
                    showClose: false,
                    closeOnClickModal: false
                }
            ).then(() => {
                AuthAction.removeExpires();
                AuthAction.removeToken();
                location.reload();
            })
            return Promise.reject('reject!')
        }
        if (res.error_code * 1 === 4003) {
            MessageBox(
                '登录超时，请重新登录',
                '确定登出', {
                    confirmButtonText: '重新登录',
                    type: 'warning',
                    showCancelButton: false,
                    showClose: false,
                    closeOnClickModal: false
                }
            ).then(() => {
                AuthAction.removeExpires();
                AuthAction.removeToken();
                location.reload();
            })
            return Promise.reject('reject!')
        }
        if (res.error_code * 1 === 4020) {
            Notification.error({
                title: '错误',
                message: res.message,
                duration: 2000,
            });
            return Promise.reject('reject!')
        }
        return response
    },
    error => {
        // console.log(error);
        if (error && error.response) {
            switch (error.response.status) {
                case '400':
                    Message({
                        message: '错误请求',
                        type: 'error'
                    })
                    break
                case '401':
                    MessageBox(
                        '登录超时，请重新登录',
                        '确定登出', {
                            confirmButtonText: '重新登录',
                            type: 'warning',
                            showCancelButton: false,
                            showClose: false,
                            closeOnClickModal: false
                        }
                    ).then(() => {
                        AuthAction.removeToken();
                    })
                    break
                case '403':
                    Message({
                        message: '拒绝访问',
                        type: 'error'
                    })
                    break
                case '404':
                    Message({
                        message: '请求错误,未找到该资源',
                        type: 'error'
                    })
                    break
                case '405':
                    Message({
                        message: '请求方法错误',
                        type: 'error'
                    })
                    break
                case '408':
                    Message({
                        message: '请求超时',
                        type: 'error'
                    })
                    break
                case '500':
                    Message({
                        message: '服务器内部错误',
                        type: 'error'
                    })
                    break
                case '501':
                    Message({
                        message: '服务器出小差了',
                        type: 'error'
                    })
                    break
                case '502':
                    Message({
                        message: '网络错误',
                        type: 'error'
                    })
                    break
                case 503:
                    Message({
                        message: '服务不可用',
                        type: 'error'
                    })
                    break
                case '504':
                    Message({
                        message: '网络超时',
                        type: 'error'
                    })
                    break
                case '505':
                    Message({
                        message: 'http版本不支持该请求',
                        type: 'error'
                    })
                    break
                case '4008':
                    Message({
                        message: '刷新token失败',
                        type: 'error'
                    })
                    break
                default:
                    Message({
                        message: `连接错误${error.response.status}`,
                        type: 'error'
                    })
            }
        } else {
            Message({
                message: '服务器出小差了',
                type: 'error'
            })
        }
        // console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default http