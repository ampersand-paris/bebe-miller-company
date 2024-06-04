// React Dependendecies
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { Link, Routes, Route } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
// Components
import useFetch from "../useFetch";
import CalendarLogic from "./CalendarLogic";

const ArchiveDetail = (props) => {
    const { id } = useParams()
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/archives?filters[slug][$eq]=${id}&[populate]=*`)    
    // GET /api/blogs?=create-a-slug-system-with-strapi-v4
    
    const [galleryInt, setGalleryInt] = useState(0)

    let project = null;
    let image = null;
    let galleryImages = [];

    if (data) {

        project = data.data[0].attributes
        galleryImages = project.Gallery.data

        function galleryLeft() {
            if (galleryInt === 0) {
                setGalleryInt(project.Gallery.data.length - 1);
            } else {
                setGalleryInt(galleryInt - 1);
            }
        }

        function galleryRight() {
            if (galleryInt === project.Gallery.data.length - 1) {
                setGalleryInt(0);
            } else {
                setGalleryInt(galleryInt + 1);
            }
        }
yarn 
        return (
            <div className="page-container">
                <div className="project-header">
                    <h1>{project.Title}</h1>
                </div>
                <div className="header-image-people-container">
                    <div className="project-header-image">
                        <img src={`${project.Header_Image.data.attributes.url}`} />
                        <div className="caption">
                            <p>{project.Header_Image.data.attributes.caption}</p>
                        </div>
                    </div>
                    <div className="project-people">
                        <ReactMarkdown>{project.People}</ReactMarkdown>
                    </div>
                </div>
                <div className="description-performances-container">
                    <div className="project-description">
                        <ReactMarkdown>{project.Description_Rich_Text}</ReactMarkdown>
                        <ReactMarkdown className="press-quote">{project.Press_Quote}</ReactMarkdown>
                    </div>
                    <div className="performances">
                        <div className="premiere">
                            <p><b>{project.Premiere_Date}</b></p>
                            <p>{project.Premiere_Location}</p>
                        </div>
                        <ReactMarkdown>{project.Performance_Dates}</ReactMarkdown>
                    </div>
                </div>
                <div className="header-image-people-container">
                    { project.Gallery.data ? (
                    <div className="gallery" style={{backgroundImage: `url(${galleryImages[galleryInt].attributes.url})`}}>
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
                    ) : ( <div className="gallery"></div> )
                    }
                    <div className="credits-header">
                        <h3>Funders</h3>
                        <ReactMarkdown>{project.Funders}</ReactMarkdown>
                    </div>
                </div>
                <div className="description-performances-container">
                    <div className="project-description">
                        <ReactMarkdown>{project.Bebe_Writing}</ReactMarkdown>
                    </div>
                    <div className="performances">
                   
                    </div>
                </div>
            </div>                  
        )
    }
    
}

export default ArchiveDetail;