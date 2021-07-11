import React from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import { CitationIcon } from "evergreen-ui";

import "./AboutSection.css";

class AboutSection extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 2000 });
    }

    render() {
        return (
            <div className="about" id="benefits">
                <div className="center" data-aos='fade-up' >
                    <CitationIcon color="#000" size={28}/>    
                    <h2>
                        Here we provide solution to this problem by just put your info here you will we getting key
                            <br/> which can be projected anywhere at any time
                    </h2>
                </div>
            </div>
        );
    }
}

export default AboutSection;
