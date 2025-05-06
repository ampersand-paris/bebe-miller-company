// React Dependendecies
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { Link, Routes, Route } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

// Components
import useFetch from "../useFetch";
import CalendarLogic from "./CalendarLogic";
import Video from "../components/Video";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const ArchiveDetail = (props) => {
    const { id } = useParams()
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/archives?filters[slug][$eq]=${id}&[populate]=*`)    
    // GET /api/blogs?=create-a-slug-system-with-strapi-v4
    
    const [galleryInt, setGalleryInt] = useState(0)

    let project = null;
    let image = null;
    let galleryImages = [];
    let sections = [];
    let display = [];

    if (data) {

        project = data.data[0].attributes
        galleryImages = project.Gallery.data
        sections = project.Archive_Dynamic_Zone
        console.log(project)

        for (let i = 0; i < sections.length; i ++) {
            if (sections[i].__component === "forum.video") {
                console.log('video')
                display.push(<Video data={sections[i]} />)
            } 
        }

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
                    <div className="project-people blocks-renderer">
                        <BlocksRenderer 
                            content={project.People_New}
                            blocks={{
                                link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                            }}    
                        />
                    </div>
                </div>
                <div className="description-performances-container">
                    <div className="project-description blocks-renderer">
                        <BlocksRenderer 
                            content={project.Description}
                            blocks={{
                                link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                            }}
                        />
                        <BlocksRenderer 
                            content={project.Bebe_Writing_New}
                            blocks={{
                                link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                            }}
                        />
                    </div>
                    <div className="performances">
                        <div className="premiere">
                            <p><b>{project.Premiere_Date}</b></p>
                            <p>{project.Premiere_Location}</p>
                        </div>
                        <BlocksRenderer 
                            content={project.Performance_Dates_New}
                            blocks={{
                                link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                            }}
                        />
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
                        { project.Press_Quote ? (
                        <>
                        <h3>Press Quotes</h3>
                        <BlocksRenderer 
                            content={project.Press_Quote_New}
                            blocks={{
                                link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                            }}
                        />
                        </>
                        ) : null 
                    }
                    </div>
                </div>
                <div>
                    { display }
                </div>
                { project.Funders ? (
                    <div className="funders">
                        <div className="funders-info">
                            <h3>Funders</h3>
                            <BlocksRenderer 
                                content={project.Funders_New}
                                blocks={{
                                    link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                                }}
                            />
                        </div>
                    </div>
                ) : null }
            </div>                  
        )
    }
    
}

export default ArchiveDetail;