import { baseUrl } from './environment'
import  axios_service  from './axiosService';



export default class UserService{
        constructor(){
            this.axios_service = new axios_service()      
        }
        
    login(data){
        let url = baseUrl+'user/login';
        return this.axios_service.post(url,data)
    }
    register(data){
        let url = baseUrl+ 'user/userSignUp';
        return axios_service.post(url,data);
    }
}