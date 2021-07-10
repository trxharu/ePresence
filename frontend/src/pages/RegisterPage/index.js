import React from "react";

class RegisterPage extends React.Component {
    componentDidMount() {
        document.title = "Register for a new account"
    }
    render() {
        return (
            <h1>Registration Page</h1>
        );
    }
}

export default RegisterPage;