import { TextInputField, Button } from "evergreen-ui";
import React from "react";
import axios from "axios";

import "./LoginPage.css";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isSigningIn: false,
            isInvalid: false,
            error: ""
        };

        this.validateAndLogin = this.validateAndLogin.bind(this);
    }

    validateAndLogin(e) {
        let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value; 
        
        if (email.match(regex)) {
            this.setState({ 
                isInvalid: false,
                error: ""
            });
            this.state.email = email;
        } else {
            this.setState({ 
                isInvalid: true,
                error: "Invalid email address."
            });
        }

        if (password.length == 0) {
            this.setState({ 
                isInvalid: true,
                error: "Please input password."
            });
        } else {
            this.setState({ 
                isInvalid: false,
                error: ""
            });
            this.state.password = password;
        }

        if (this.state.isInvalid){
            return ;
        } else {
            let payload = {
                email: this.state.email,
                password: this.state.password
            };
            
            this.setState({ isSigningIn: true });

            axios({
                method: "POST",
                url: "http://localhost:8000/auth/login",
                responseType: "json",
                data: JSON.stringify(payload)
            }).then((res) => {
                let data = res.data;
                if (data.status) {
                    localStorage.setItem("token", data.token);
                    this.props.history.push("/dashboard");
                } else {
                    console.log(data);
                    this.setState({ 
                        isSigningIn: false,
                        isInvalid: true,
                        error: data.message
                    });
                    this.setState({ isSigningIn: false });
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    componentDidMount() {
        document.title = "Login to your account";

        let token = localStorage.getItem("token");
        if (token) {
            this.props.history.push("/dashboard");
        }
    }
    render() {
        return (
            <div className="register-page">
                <div className="container">
                <h1>Sign In</h1>
                <p>{this.state.error}</p>
                <TextInputField
                    id="email"
                    placeholder="Enter your email"
                    label="Email"
                    required
                    isInvalid={this.state.isInvalid}
                    inputWidth="250px"
                />
                
                <TextInputField 
                    id="password"
                    placeholder="Create a password"
                    label="Password"
                    type="password"
                    required
                    isInvalid={this.state.isInvalid}
                    inputWidth="250px"
                />
                <Button 
                    appearance="primary" 
                    onClick={this.validateAndLogin}
                    isLoading={this.state.isSigningIn}>
                        Sign In
                </Button>

                <span className="login-link">Don't have account ? <a href="/register">Register Here</a></span>
                </div>
            </div>
        );
    }
}

export default LoginPage;