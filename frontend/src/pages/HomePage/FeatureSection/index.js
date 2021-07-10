import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./FeatureSection.css";

class FeatureSection extends React.Component {
    
    componentDidMount() {
        AOS.init({ duration:1500 });
    }
    
    render() {
        return (
            <div className='banner1' id="features">
                <div className = 'leftside1'  >
                    <img data-aos='fade-left' style={{width:'80%'}} className='image1' 
                        src='https://blush.design/api/download?shareUri=F5XJfMMqm&s=0.1%7EB28B67-0.2%7E57331F-0.3%7E57331F&w=800&h=800&fm=png'/>    
                </div>
                <div className = 'rightside1' >
                    <div className='text'>
                    <h1>Features </h1>
                    <ul>
                        <li>Resume-building</li>
                        <li>E-repository (Your-Epresence ) having all your detail required for interview</li> 
                        <li>Document verified by DigiLocker.</li> 
                        <li>Formal templates for firing up your E-resume</li>
                    </ul>
                </div>                  
                </div>
            </div>
        );
    }
}

export default FeatureSection;
