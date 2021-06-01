import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../../services/userService";
import "../Resgistration/register.css";
import utility from "../Utility/utility";

const regF = /^[A-Z]{1}[a-z]{2}[a-z]*$/;
const regl=/^[A-Z]+[a-zA-Z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regpass=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      firstnameerror: "",
      lastnameerror:"",
      emailerror:"",
      passworderror:"",
      confirmpassworderror:""
    };
     this.handleChangeLastName = this.handleChangeLastName.bind(this);
     this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
     this.handleChangeEmail = this.handleChangeEmail.bind(this);
     this.handleChangePassword = this.handleChangePassword.bind(this);
     this.handleChangeConfirmPassword=this.handleChangeConfirmPassword.bind(this);
  }
  handleChangeFirstName(event){
    this.setState({ firstname: event }) 
    if(utility.checkRegex(event,regF)){
      this.setState({firstnameerror:""})
    }  
    else{
      this.setState({firstnameerror:"enter valid first name"})
    }
  }
  handleChangeLastName(event){
    this.setState({ lastname: event }) 
    if(utility.checkRegex(event,regl)){
      this.setState({lastnameerror:""})
    }  
    else{
      this.setState({lastnameerror:"enter valid last name"})
    }
  }
  handleChangeEmail(event){
    this.setState({ email: event })
    var response = utility.checkEmail(this.state.email, emailRegex) 
    console.log(response, "response log")
    if(utility.checkEmail(event,emailRegex)){
      this.setState({emailerror:""})
    }  
    else{
      this.setState({emailerror:"enter valid email"})
    }
  }
  handleChangePassword(event){
    this.setState({ password: event }) 
    var res = utility.checkPass(this.state.password,regpass)
    console.log("response log",res)
    if(utility.checkPass(event,regpass)){
      this.setState({passworderror:""})
    }  
    else{
      this.setState({passworderror:"enter valid password"})
    }
  }
  handleChangeConfirmPassword(event){
    this.setState({ confirmpassword: event }) 
    var res = utility.checkPass(this.state.confirmpassword,regpass)
    console.log("response log",res)
    if(utility.checkPass(event,regpass)){
      this.setState({confirmpassworderror:""})
    }  
    else{
      this.setState({confirmpassworderror:"password did not match"})
    }
  }
  onSubmit = () =>{
    if(this.handleChangeFirstName(this.state.firstname) || this.handleChangeLastName(this.state.lastname)
     || this.handleChangeEmail(this.state.email) || this.handleChangePassword(this.state.password)){
      let data ={
        "firstname": this.state.firstname,
        "lastname": this.state.lastname,
        "email": this.state.email,
        "password": this.state.password,
        service : "advance", 
      };
      new UserService().register(data).then((response)  => {
        if(response.status === 400){
          console.log("user already registered")
        }else{
          console.log(response.data);
        }
      })
      .catch((error)=>{
        console.log("Registration Failed")
      })
    }else{
      console.log("All fields are required")
    }
  }
  render() {
    console.log(this.state.firstname);
    return (
      <div className="register">
        <div className="register-frame">
          <div className="fundoo">
            <span style={{ color: "#4285F4" }}>F</span>
            <span style={{ color: "#EA4335" }}>u</span>
            <span style={{ color: "#FBBC04" }}>n</span>
            <span style={{ color: "#4285F4" }}>d</span>
            <span style={{ color: "#34A853" }}>o</span>
            <span style={{ color: "#EA4335" }}>o</span>
          </div>
          <div className="input-body">
            <div className="input-info">
              <div className="fundoo-account">Create your Fundoo Account</div>
              <form>
                <div className="name">
                  <div className="f-name">
                    <TextField
                    size="small"
                      value={this.state.firstname}
                      className="input-name"
                      label="First Name"
                      placeholder="First Name"
                      variant="outlined"
                      onChange={(event)=>this.handleChangeFirstName(event.target.value)}
                      helperText={this.state.firstnameerror}
                      error={this.state.firstnameerror.length>0}
                    />
                  </div>
                  <div className="f-name">
                    <TextField
                    size="small"
                      value={this.state.lastname}
                      className="input-name"
                      label="Last Name"
                      placeholder="Last Name"
                      variant="outlined"
                      onChange={(event)=>this.handleChangeLastName(event.target.value)}
                      helperText={this.state.lastnameerror}
                      error={this.state.lastnameerror.length>0}
                    />
                  </div>
                </div>
                <div className="email-div">
                  <div className="f-name">
                    <TextField
                      size="small"
                      value={this.state.email}
                      className="email"
                      label="Email"
                      placeholder="abc@example.com"
                      variant="outlined"
                      onChange={(event)=>this.handleChangeEmail(event.target.value)}
                      helperText={this.state.emailerror}
                      error={this.state.emailerror}
                    />
                     <span className="email-text">
                    You can use letters,numbers & periods
                  </span>
                  </div> 
                </div>
                {/* <span className="cadd">Use my current email address instead</span> */}
                <div className="name password">
                  <div className="f-name">
                    <TextField
                    size="small"
                      value={this.state.password}
                      className="input-name"
                      label="Password"
                      type="password"
                      placeholder="Password"
                      variant="outlined"
                      onChange={(event)=>this.handleChangePassword(event.target.value)}
                      error={this.state.passworderror}
                      helperText={this.state.passworderror.length>0}
                    />
                  </div>
                  <div className="f-name">
                    <TextField
                    size="small"
                      value={this.state.confirmpassword}
                      className="input-name"
                      label="Confirm Password"
                      placeholder="Confirm Password"
                      type="password"
                      variant="outlined"
                      onChange={(event) => this.handleChangeConfirmPassword(event.target.value)}
                      error={this.state.confirmpassworderror}
                      helperText={this.state.confirmpassworderror}
                    />
                  </div>
                </div>
                <div className="passhelper">
                <span className="email-text">
                  Use 8 or more characters with a mix of letters,numbers &
                  symbols
                </span>
                </div>
                <div className="direction-div">
                <Link to="/">
                    <div className="signin">
                        Sign in instead
                    </div>
                </Link>
                  <button  className="next" onClick={this.onSubmit}>
                    Next
                  </button>
                </div>
              </form>
            </div>
            <div className="logo">
              <img
                src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                alt=""
              />
              <p className="account-text">
                One account. All of Fundoo working for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
