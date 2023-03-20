import React from 'react';
import './AboutUs.css'
import leftOne from '../../imgs/Image 01.png'
import leftTwo from '../../imgs/Image 02.png'
import leftTre from '../../imgs/Image 03.png'
import '../../imgs/Image 03.png'

const AboutUs = () => {
    return (
        <section id='about'>
            <div className="container">
                <div className="about">
                    <div className="text">
                        <h1>About US</h1>
                        <p>
                            Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.
                        </p>
                        <button>Learn More</button>
                    </div>
                    <div className="fon">
                        <div className="left">
                            <img src={leftOne} alt="" style={{marginBottom:'20px'}}/>
                            <img src={leftTwo} alt=""/>
                        </div>
                        <img src={leftTre} alt="" className='right'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;