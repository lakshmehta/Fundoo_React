import { TextField } from "@material-ui/core";
import React,{Component} from "react";
import '../Login/login.css';
import { Link } from "react-router-dom";
import utility from "../Utility/utility";


const regemail=/^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$'/;
const regpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;




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
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    handleChangeEmail(event){
        this.setState({ email: event.target.value }) 
        if(utility.checkRegex(event,regemail)){
          this.setState({emailerror:""})
        }  
        else{
          this.setState({emailerror:"enter valid email"})
        }
      }
      handleChangePassword(event){
        this.setState({ password: event.target.value }) 
        if(utility.checkRegex(event,regpass)){
          this.setState({passworderror:""})
        }  
        else{
          this.setState({passworderror:"enter valid password"})
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
                        <TextField value={this.state.email} size="small" className="input" label="Email" placeholder="Email or Phone" variant="outlined" onChange={this.handleChangeEmail} helperText={this.state.emailerror} error={this.state.emailerror}></TextField>
                        <TextField  size="small" value={this.state.password} className="input" label="Password" placeholder="Password" variant="outlined" onChange={this.handleChangePassword} helperText={this.state.passworderror} error={this.state.passworderror}></TextField>
                    </div>
                    <div className="btn-text">
                        <p className="help-text">Not your computer? Use guest mode to sign in privately.</p>
                    </div>
                    <Link to="/register">
                        <div className="create-account">
                            Create account
                        </div>
                    </Link>
                    <button className="login">Login</button>
                </div>
            </div>
         );
    }
}
 
export default Login;