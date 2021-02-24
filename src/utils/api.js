//api.js

import requestAll from './request.js';

const baseUrl = 'http://api.tianapi.com/txapi/oilprice/index'

const api = {

    //获取信息
    postNum(key, prov) {
        let data = {
            key,
            prov
        }
        // console.log(data);
        return requestAll.postRequest(baseUrl, data);
    },
    getNum(key, prov) {
        // console.log(data);
        return requestAll.getRequest(baseUrl + '?key=' + key + '&prov=' + prov);
    },
}

export default api