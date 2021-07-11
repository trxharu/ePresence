import React from "react";

import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FeatureSection from "./FeatureSection";
import Benefits from "./Benefits";
import Footer from "./Footer";

import "./style.css";

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Header />
                <HeroSection />
                <AboutSection />
                <Benefits />
                <FeatureSection />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
