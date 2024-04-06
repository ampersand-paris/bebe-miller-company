// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ReachMarkdown from 'react-markdown';
// Components
import useFetch from "../useFetch";
import FullImage from "../components/FullImage";
import Quote from "../components/Quote";
import AboutBody from "../components/AboutBody";
import AboutHeader from "../components/AboutHeader";
import Choreography from "../components/Choreography";
import Teachings from "../components/Teachings";
import Press from "../components/Press";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const About = (props) => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/about-page?populate[About_Page][populate]=*&populate[Header_Image][populate]=*`)
    
    let about = null;
    let sections = [];
    let display = [];

    if (data) {

        about = data.data
        sections = about.attributes.About_Page


        for (let i = 0; i < sections.length; i ++) {
            if (sections[i].__component === "about-page.header") {
                display.push(<AboutHeader data={sections[i]} />)
            } else if (sections[i].__component === "about-page.quote") {
                display.push(<Quote data={sections[i]} />)
            } else if (sections[i].__component === "about-page.body") {
                display.push(<AboutBody data={sections[i]} />)
            } else if (sections[i].__component === "about-page.full-image") {
                display.push(<FullImage data={sections[i]} />)
            }
        }


        console.log(about)

        return (
            <div className="page-container">
                <img className="about-header-image" src={`${about.attributes.Header_Image.data.attributes.url}`} />
                {display.map((section, index) => 
                    <div key={ index }>
                        { section }
                    </div>
                )}
                <div className="forum-container-last-row">
                    <Choreography />
                    <Teachings />
                    <Press />
                </div>
            </div>                  
        )
    }
    
}

export default About;