// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";

const Footer = () => {

    let year = new Date().getFullYear()


const url = 'https://api.cc.email/v3/contacts/sign_up_form';
const accessToken = '{access_token}';

const data = {
  email_address: 'dlang@example.com',
  list_memberships: [
    'efb072f0-541d-11e3-9c4e-d4ae52754007'
  ]
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  body: JSON.stringify(data)
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

    return (
        <>
            <div className="green-bar"></div>
            <div className="footer-container"> 
                <div className="socials-container">
                    <a href="https://www.instagram.com/bebemillerco/">
                        <h3>Instagram</h3>
                    </a>
                    <a href="https://www.facebook.com/bebemillercompany/">
                        <h3>Facebook</h3>
                    </a>
                </div>
                <div className="mailing-list-container">
                {/* <!-- Begin Constant Contact Inline Form Code --> */}
                <div class="ctct-inline-form" data-form-id="b54bbde4-3af9-48b5-ac5b-f7516d80e582">
                    
                </div>
                {/* <!-- End Constant Contact Inline Form Code --> */}
                    <h3>Join Our Mailing List</h3>
                    <div className="mailing-list-input">
                        <div className="input-field">
                            <label>Your Email</label>
                        </div>
                        <button id="mailchimp-footer-subscribe">Go</button>
                    </div>
                </div>
                <div className="IP-container">
                    <p><em>© Bebe Miller Company {year}</em></p>
                    <p><em>Designed and developed by <a href="www.failspacenyc.com/design-services">FAILSPACE Design Services</a></em></p>
                </div>
            </div>
        </>

    )    
}   

export default Footer;