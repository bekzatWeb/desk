import React from 'react';
import imgImg from '../../imgs/header Image.png'
import './Hero.css'


const Hero = () => {
    return (
        <section id='hero'>
            <div className="container">
                <div className="hero">
                    <div className="text">
                        <h1 className="textH">
                            Just <span>Eat healthy</span> food to live a healthier life
                        </h1>
                        <p className="word">
                            Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future
                        </p>
                        <button className="buttonB">Order Now</button>
                    </div>
                    <div className="img">
                        <img src={imgImg} alt="img" className="imgImg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;