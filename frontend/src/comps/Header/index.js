import React from "react";

import './Header.css'
import logo from "../../assets/images/logo.png";

class Header extends React.Component {
    
    handleScroll(e) {
        let header = document.querySelector(".header");
        header.classList.toggle("sticky", window.scrollY > 0);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    gotoHome() {
        alert("Go Home");
    }

    render() {
        return (
            <div className="header">
                <img onClick={this.gotoHome} src={logo}></img>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#benefits">Benefits</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="/register">Get Started</a></li>
                    <li><a href="/editor">Login</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;
