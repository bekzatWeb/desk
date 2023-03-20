import React from 'react';
import './Chefs.css'
import chefs from '../../imgs/Group 4114.png'

const Chefs = () => {
    return (
        <section id="chefs">
            <div className="container">
                <div className="chefs">
                    <div className="left">
                        <img src={chefs} alt="img"/>
                    </div>
                    <div className="right">
                        <h1>
                            Fresh Vegetables <br/>
                            Every Day
                        </h1>
                        <p>Healthy life as informed declared we enjoy the margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chefs;