// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ReachMarkdown from 'react-markdown';
// Components
import useFetch from "../useFetch";
import CalendarLogic from "./CalendarLogic";

const ArchiveDetail = (props) => {

    // const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/calendars?sort=Start_Date:desc`)
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}api/archives/1?populate=*`)
    
    const [galleryInt, setGalleryInt] = useState(0)

    let project = null;
    let image = null;
    let galleryImages = [];

    if (data) {

        project = data.data.attributes
        galleryImages = project.Gallery.data

        function galleryLeft() {
            console.log('left')
            console.log(galleryInt)
            if (galleryInt === 0) {
                setGalleryInt(project.Gallery.data.length - 1);
            } else {
                setGalleryInt(galleryInt - 1);
            }
        }

        function galleryRight() {
            console.log('left')
            console.log(galleryInt)
            if (galleryInt === project.Gallery.data.length - 1) {
                setGalleryInt(0);
            } else {
                setGalleryInt(galleryInt + 1);
            }
        }

        return (
            <div className="page-container">
                <div className="project-header">
                    <h1>{project.Title} ({project.Year})</h1>
                </div>
                <div className="header-image-people-container">
                    <div className="project-header-image">
                        <img src={`http://localhost:1337${project.Header_Image.data.attributes.url}`} />
                        <div className="caption">
                            <p>{project.Header_Image.data.attributes.caption}</p>
                        </div>
                    </div>
                    <div className="project-people">
                        <ReachMarkdown>{project.People}</ReachMarkdown>
                    </div>
                </div>
                <div className="description-performances-container">
                    <div className="project-description">
                        <p>{project.Description}</p>
                        <ReachMarkdown className="press-quote">{project.Press_Quote}</ReachMarkdown>
                    </div>
                    <div className="performances">
                        <div className="premiere">
                            <p><b>{project.Premiere_Date}</b> (Premiere)</p>
                            <p>{project.Premiere_Location}</p>
                        </div>
                        <ReachMarkdown>{project.Performance_Dates}</ReachMarkdown>
                    </div>
                </div>
                <div className="header-image-people-container">
                    <div className="gallery">
                        <img src={`http://localhost:1337${galleryImages[galleryInt].attributes.url}`} />
                        <div className="caption">
                            <p>{project.Gallery.data[galleryInt].attributes.caption}</p>
                        </div>
                        <div onClick={() => galleryLeft()} className="gallery-toggle" id="gallery-toggle-left">
                            <h1> &#x3c; </h1>
                        </div>
                        <div onClick={() => galleryRight()} className="gallery-toggle" id="gallery-toggle-right">
                            <h1> &#x3e; </h1>
                        </div>
                    </div>
                    <div className="credits-header">
                        <h3>Funders</h3>
                    </div>
                </div>
                <div className="description-performances-container">
                    <div className="project-description">
                        <ReachMarkdown>{project.Funders}</ReachMarkdown>
                    </div>
                    <div className="performances">
                   
                    </div>
                </div>
            </div>                  
        )
    }
    
}

export default ArchiveDetail;