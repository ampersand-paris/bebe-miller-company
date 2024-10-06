// React Dependendecies
import React from "react";
import { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import useFetch from "../useFetch";
import ArchiveMenu from "../pages/ArchiveMenu/ArchiveMenu";

const Navigation = () => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/main-navigations`)
    
    const [subMenuHeight, setSubMenuHeight] = useState('0fr');
    const [mobile, setMobile] = useState(false);
    const [menuHeight, setMenuHeight] = useState('0');

    function archiveHandler() {
        setSubMenuHeight('1fr');
    }

    function callBack(arg) {
        setSubMenuHeight(arg)
    }

    function mobileMenuHandler() {

        if (menuHeight === '0') {
            document.getElementById('mobile-triangle').style.transform = 'rotate(180deg)'
            setMenuHeight('162px')
            console.log('yo')

        } else {
            document.getElementById('mobile-triangle').style.transform = 'rotate(0deg)'
            setMenuHeight('0')
        }
    }

    let navLinks = []
    let logo;

    function isMobile() {
        if (window.innerWidth > 900) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    }

    useEffect(() => {
        isMobile()
    });
    
    logo = <a className="wordmark" href="/"><h1>BEBE MILLER COMPANY</h1></a> 

    // if (window.location.href.indexOf("/calendar") > -1 || window.location.href.indexOf("/chronicle") > -1 || window.location.href.indexOf("/archives") > -1) {
    //     logo = <a className="wordmark" href="/"><h1>BEBE MILLER COMPANY</h1></a> 
    // } else {
    //     logo =  <div></div>        
    // }

    if (data) {

        navLinks = data.data

        if (mobile === true ) {
            return (
                <div className="nav-wrapper">                
                    <div className="header-container"> 
                        <a className="wordmark" href="/"><h1>BEBE MILLER COMPANY</h1></a> 
                        <div className="archive-menu-toggle">
                            <svg  onClick={() => mobileMenuHandler()} id="mobile-menu-triangle" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.02 29.39" fill="var(--main-green">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <polygon id="mobile-triangle" points="13.51 29.39 27.02 29.39 20.27 14.69 13.51 0 6.76 14.69 0 29.39 13.51 29.39"/>
                            </g>
                            </svg>
                        </div>
                    </div>
                    {/* This helps to solve the justify-content problem brought in by switching the logo in and out  */}
                    <div className="mobile-navigation-link-container" style={{height: menuHeight}}>
                        <a href="/">
                            <h2>About</h2>
                        </a>
                        <a href="/calendar">
                            <h2>Calendar</h2>
                        </a>
                        <h2 onClick={() => archiveHandler()}>Archive</h2>
                        <a href="/chronicle">
                            <h2>Chronicle</h2>
                        </a>
                    </div>
                    <ArchiveMenu height={subMenuHeight} handleCallBack={callBack}/>
                </div>
    
            )
        } else {
            return (
                <div className="nav-wrapper">                
                    <div className="header-container"> 
                        {logo}
                        <div></div> 
                    {/* This helps to solve the justify-content problem brought in by switching the logo in and out  */}
                        <div className="navigation-link-container">
                            <a href="/">
                                <h2>About</h2>
                            </a>
                            <a href="/calendar">
                                <h2>Calendar</h2>
                            </a>
                            <h2 onClick={() => archiveHandler()}>Archive</h2>
                            <a href="/chronicle">
                                <h2>Chronicle</h2>
                            </a>
                        </div>
                    </div>
                    <ArchiveMenu height={subMenuHeight} handleCallBack={callBack}/>
                </div>
    
            )
        }
    }
    
}

export default Navigation;