import React from 'react';
import './Header.css'
import {CiSearch} from "react-icons/ci";
import {BiCartAlt} from "react-icons/bi";

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <div className="headerGlobal">
                    <div className="header">
                        <div className="logo">
                            <h1 className="logoTip">UI.desk</h1>
                        </div>
                        <div className="nav">
                            <a className='aHre' href="#">Home</a>
                            <a className='aHre' href="#">About</a>
                            <a className='aHre' href="#">Contact</a>
                            <a className='aHre' href="#">Testimonials</a>
                        </div>
                        <div className="buttons">
                            <CiSearch className='search'/>
                            <BiCartAlt className='basket'/>
                            <button className="buttonA">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;