const axios = require('axios').default

export default function axios_service(){}

axios_service.prototype.post = function(url,data){
    return axios.post(url,data,{
        headers:{
            "content-type": "application/json"
        }
    })
}
axios_service.prototype.get = function(url){
    return axios.get(url,{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
}