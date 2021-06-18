import { TextField } from "@material-ui/core";
import React,{Component} from "react";
import '../Login/login.css';
import { Link } from "react-router-dom";
import utility from "../Utility/utility";
import UserService from "../../services/userService";


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regpass=/^(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;




class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email: " ",
            password: " ",
            emailerror:"",
            passworderror:""
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        // this.handleChangePassword = this.handleChangePassword.bind(this);
        //this.onClick = this.onClick(this)
    }
    handleChangeEmail(event){
      this.setState({ email: event })
      var response = utility.checkEmail(this.state.email, emailRegex) 
      console.log(response, "response log")
      if(utility.checkEmail(event,emailRegex)){
        this.setState({emailerror:""})
        return true;
      }  
      else{
        this.setState({emailerror:"enter valid email"})
        return false;
      }
    }
    handleChangePassword(event){
      this.setState({ password: event }) 
      var res = utility.checkPass(this.state.password,regpass)
      console.log("response log",res)
      if(utility.checkPass(event,regpass)){
        this.setState({passworderror:""})
        return true;
      }  
      else{
        this.setState({passworderror:"enter valid password"})
        return false;
      }
    }
      onSubmitClick =() => {
          const userData ={
            "email":this.state.email,
            "password":this.state.password
          }
      //  new UserService().login(userData).then((data)=>{
      //       console.log('data',data);
      //       localStorage.setItem('token',data)
      //   }).catch(error => {})
         if(this.handleChangeEmail(this.state.email) || this.handleChangePassword(this.state.password)){
            console.log("login succesful")
           new UserService().login(userData).then((data)=>{
                console.log('data',data.data.id);
                localStorage.setItem('token',data.data.id)
                this.props.history.push('/dashboard')
            }).catch(error => {})
         }
         else{
             console.log("login unsuccessful")
         }
      }
    render() { 
        return ( 
            <div className="body">
                <div className="frame">
                    <div className="fundoo">
                        <span style={{ color: "#4285F4" }}>F</span>
                        <span style={{ color: "#EA4335" }}>u</span>
                        <span style={{ color: "#FBBC04" }}>n</span>
                        <span style={{ color: "#4285F4" }}>d</span>
                        <span style={{ color: "#34A853" }}>o</span>
                        <span style={{ color: "#EA4335" }}>o</span>
                    </div>
                    <span className="sign-in">
                        Sign in
                    </span>
                    <span className="fundoo-text">
                        Use your Fundoo Account
                    </span>
                    <div>
                        <TextField value={this.state.email} 
                        size="small" className="input" label="Email" 
                        placeholder="Email or Phone" variant="outlined" 
                        onChange={(event)=>this.handleChangeEmail(event.target.value)} helperText={this.state.emailerror} 
                        error={this.state.emailerror}></TextField>
                        <TextField  size="small" value={this.state.password} className="input" label="Password" 
                        placeholder="Password" variant="outlined" onChange={(event)=> this.handleChangePassword(event.target.value)} 
                        helperText={this.state.passworderror} error={this.state.passworderror}></TextField>
                    </div>
                    <div className="btn-text">
                        <p className="help-text">Not your computer? Use guest mode to sign in privately.<br></br>
                        <a href className="learn-more">Learn More!</a></p>
                    </div>
                    <Link to="/register">
                        <div className="create-account">
                            Create account
                        </div>
                    </Link>
                    <button className="login" onClick={ ()=> this.onSubmitClick()}>Login</button>
                </div>
            </div>
         );
    }
}
 
export default Login;