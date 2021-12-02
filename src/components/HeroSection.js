import React from "react";
import './HeroSection.css';
import {Button} from "./Button";
import '../App.css';


function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/vid1.mp4' type="video/mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className="hero-btns"></div>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                GET STARTED
            </Button>
            <Button
                className='btn'
                buttonStyle='btn--primary'
                buttonSize={'btn--large'}
            >
                WATCH TRAILER <i className="far fa-play-circle"></i>
            </Button>
        </div>

    )

}

export default HeroSection;