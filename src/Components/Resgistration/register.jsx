import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Resgistration/register.css";
import utility from "../Utility/utility";

const regF = /^[A-Z]{1}[a-z]{2}[a-z]*$/;
const regl=/^[A-Z]+[a-zA-Z]{2,}$/;
const regemail=/^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$'/;
const regpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;


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
     this.handleChangeConfirmPassword=this.handleChangeConfirmPassword(this);

  }
  handleChangeFirstName(event){
    this.setState({ firstname: event.target.value }) 
    if(utility.checkRegex(event,regF)){
      this.setState({firstnameerror:""})
    }  
    else{
      this.setState({firstnameerror:"enter valid first name"})
    }
  }
  handleChangeLastName(event){
    this.setState({ lastname: event.target.value }) 
    if(utility.checkRegex(event,regl)){
      this.setState({lastnameerror:""})
    }  
    else{
      this.setState({lastnameerror:"enter valid last name"})
    }
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
  handleChangeConfirmPassword(event){
    this.setState({ confirmpassword: event.target.value }) 
    if(utility.checkRegex(event,regpass)){
      this.setState({confirmpassworderror:""})
    }  
    else{
      this.setState({confirmpassworderror:"password did not match"})
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
                      onChange={this.handleChangeFirstName}
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
                      onChange={this.handleChangeLastName}
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
                      onChange={this.handleChangeEmail}
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
                      onChange={this.handleChangePassword}
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
                      onChange={this.handleChangeConfirmPassword}
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
                <Link to="/"><div className="signin">Sign in instead</div></Link>
                  <button  className="next">
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
