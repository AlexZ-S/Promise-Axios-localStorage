// request.js
import axios from 'axios';

// post请求
function postRequest(url, data, method = 'post') {
    return new Promise((resolve, reject) => {
        axios({
                url: url,
                method: method,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: data
            })
            .then(res => {
                //成功
                resolve(res.data)
            })
            .catch(err => {
                //失败
                reject(err)
            })

    })
}

// get请求
function getRequest(url, method = 'get') {
    return new Promise((resolve, reject) => {
        axios({
                url: url,
                method: method,
            })
            .then(res => {
                //成功
                resolve(res.data)
            })
            .catch(err => {
                //失败
                reject(err)
            })

    })
}

export default {
    postRequest: postRequest,
    getRequest: getRequest
}