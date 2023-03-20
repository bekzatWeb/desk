import React from 'react';
import './Hwy.css'
import icon from '../../imgs/Icon.svg'
import iconOne from '../../imgs/Icon (1).svg'
import iconTwo from '../../imgs/leaf 1.svg'


const Hwy = () => {
    return (
        <section id='hwy'>
            <div className="container">
                <div className="hwy">
                    <div className="heading">
                        <h1>Why Choose US?</h1>
                        <h6>Organic food is grown without the use of synthetic chemicals</h6>
                    </div>
                    <div className="map">
                        <div className="easy">
                            <img src={icon} alt="img"/>
                            <h3>Easy to order</h3>
                            <p>foods include fresh produce, meats as well as processed</p>
                        </div>
                        <div className="live">
                            <img src={iconOne} alt="img"/>
                            <h3>Live Order</h3>
                            <p>Place your online Order easily and get the food instantly</p>
                        </div>
                        <div className="organic">
                            <img src={iconTwo} alt="img"/>
                            <h3>100% Organic</h3>
                            <p>Organic food is grown without the use of synthetic chemicals</p>
                        </div>
                    </div>
                    <div className="depart">
                        <div className="food">
                            <h2>40+</h2>
                            <h5>Food Partners</h5>
                        </div>
                        <div className="clients">
                            <h2>459+</h2>
                            <h5>Trusted Clients</h5>
                        </div>
                        <div className="online">
                            <h2>12k+</h2>
                            <h5>Order Online</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hwy;