import React from "react";
import Parallax from "react-rellax";
import AOS from "aos";
import "aos/dist/aos.css";

import "./HeroSection.css";
import HeroImg from "./bg.png";

class HeroSection extends React.Component {

    componentDidMount() {
        AOS.init({ duration: 750 });
    }

    render() {
        let specialText = {
            color: "var(--primary)",
            fontSize: "2.25rem",
        };

        return (
            <div className='banner' id="home">
                <div className = 'leftside'>
                    <p data-aos='fade-up' className="herotext">Hey there, <br/> Wanna get rid of carring 
                        your <br/> <span style={specialText}>Boring Documents</span> repository while giving interviews.
                    </p>
                    <div data-aos='fade-up'>
                        <a href="/register" className="action-btn">Get Started Now</a>
                    </div>
                </div>
                <Parallax speed={8}>
                    <div className = 'rightside'><img  className='image' src={HeroImg}/></div>
                </Parallax>
            </div>
        );
    }
}

export default HeroSection;
