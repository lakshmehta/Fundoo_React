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
    addNote(data){
        let url =  baseUrl+'notes/addNotes';
        const headers={
            "content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
        return this.axios_service.post(url,data,headers);
    }
    getAllNotes(){
        let url = baseUrl+'notes/getNotesList';
        return this.axios_service.get(url);
    }
    updateNote(data){
        let url = baseUrl+'notes/updateNotes';
        const headers={
            "Content-Type": "multipart/form-data",
            "Token": localStorage.getItem('token')
        }
        return this.axios_service.post(url,data,headers)
    }
}