const axios = require('axios').default

export  function axios_service(){}

axios_service.prototype.post = function(url,data,headers){
    return axios.post(url,data,headers)
}
axios_service.prototype.get = function(url){
    return axios.get(url,{
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
}