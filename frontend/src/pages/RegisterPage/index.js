import { TextInputField, Button } from "evergreen-ui";
import React from "react";
import axios from "axios";

import "./RegisterPage.css";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isRegistering: false,
            isEmailInvalid: false,
            emailError: "",
            isPassInvalid: false,
            passError: ""
        };

        this.validateAndRegister = this.validateAndRegister.bind(this);
    }

    validateAndRegister(e) {
        let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value; 
        
        if (email.match(regex)) {
            this.setState({ 
                isEmailInvalid: false,
                emailError: ""
            });
            this.state.email = email;
        } else {
            this.setState({ 
                isEmailInvalid: true,
                emailError: "Invalid email address."
            });
        }
        
        if (password.length >= 8) {
            this.setState({ 
                isPassInvalid: false,
                passError: ""
            });
            this.state.password = password;
        } else {
            this.setState({ 
                isPassInvalid: true,
                passError: "Password is less than 8 characters."
            });
        }

        if (this.state.emailError && this.state.passError){
            return ;
        } else {
            let payload = {
                email: this.state.email,
                password: this.state.password
            };
            
            this.setState({ isRegistering: true });

            axios({
                method: "POST",
                url: "http://localhost:8000/auth/register",
                responseType: "json",
                data: JSON.stringify(payload)
            }).then((res) => {
                let data = res.data;
                if (data.status) {
                    localStorage.setItem("token", data.token);
                    this.setState({ isRegistering: false });
                } else {
                    this.setState({ 
                        isRegistering: false,
                        isEmailInvalid: true,
                        emailError: data.message
                    });
                    this.setState({ isRegistering: false });
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    componentDidMount() {
        document.title = "Register for a new account";
        let token = localStorage.getItem("token");
        if (token) {
            this.props.history.push("/dashboard");
        }
    }
    render() {
        return (
            <div className="register-page">
                <div className="container">
                <h1>Registration</h1>
                <p>{this.state.emailError}</p>
                <TextInputField
                    id="email"
                    placeholder="Enter your email"
                    label="Email"
                    required
                    isInvalid={this.state.isEmailInvalid}
                    inputWidth="250px"
                />
                
                <p>{this.state.passError}</p>
                <TextInputField 
                    id="password"
                    placeholder="Create a password"
                    label="Password"
                    type="password"
                    required
                    isInvalid={this.state.isPassInvalid}
                    inputWidth="250px"
                    hint="Password must be atleast 8 characters."
                />
                <Button 
                    appearance="primary" 
                    onClick={this.validateAndRegister}
                    isLoading={this.state.isRegistering}>
                        Register
                </Button>

                <span className="login-link">Already registered ? <a href="/login">Login Here</a></span>
                </div>
            </div>
        );
    }
}

export default RegisterPage;