// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";

const Footer = () => {


    return (
        <>
            <div className="green-bar"></div>
            <div className="footer-container"> 
                <div className="socials-container">
                    <a href="">
                        <h3>Instagram</h3>
                    </a>
                    <a href="">
                        <h3>Facebook</h3>
                    </a>
                </div>
                <div className="mailing-list-container">
                    <h3>Join Our Mailing List</h3>
                    <div className="mailing-list-input">
                        <div className="input-field">
                            <label>Your Email</label>
                        </div>
                        <button id="mailchimp-footer-subscribe">Go</button>
                    </div>
                </div>
                <div className="IP-container">
                    <p><em>© Bebe Miller Company 2022</em></p>
                    <p><em>Designed and developed by <a href="www.failspacenyc.com/design-services">FAILSPACE Design Services</a></em></p>
                </div>
            </div>
        </>

    )    
}   

export default Footer;