import { baseUrl } from './environment'
import  {axios_service}  from './axiosService';



export default class UserService{
        constructor(){
            this.axios_service = new axios_service()      
        }
        
    login(data){
        let url = baseUrl+'user/login';
        const headers={
            "content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
        return this.axios_service.post(url,data,headers)

    }
    register(data){
        let url = baseUrl+ 'user/userSignUp';
        const headers={
            "content-type": "application/json",
            Authorization: localStorage.getItem('token',)
        }
        return this.axios_service.post(url,data,headers);
    }
    

}