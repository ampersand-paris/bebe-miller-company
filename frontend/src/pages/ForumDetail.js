// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ReachMarkdown from 'react-markdown';
import { useParams } from "react-router-dom"

// Components
import useFetch from "../useFetch";
import FullImage from "../components/FullImage";
import Quote from "../components/Quote";
import Text from "../components/Text";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ForumDetail = () => {
    const { id } = useParams()
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forums/${id}?populate=*`)

    let forum = [];
    let sections = [];
    let display = [];
    let i = 0;

    const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
      };


    if (data) {

        forum = data.data.attributes
        sections = forum.Forum_Body


        for (let i = 0; i < sections.length; i ++) {
            if (sections[i].__component === "forum.forum-text") {
                display.push(<Text data={sections[i]} />)
            } else if (sections[i].__component === "about-page.quote") {
                display.push(<Quote data={sections[i]} />)
            } else if (sections[i].__component === "about-page.full-image") {
                display.push(<FullImage data={sections[i]} />)
            }
        }
        
        return (
            <div className="page-container">
                <div className="forum-detail-container">
                    <div className="grey-block"></div>
                    <div className="forum-title-container">
                        <div className="date-and-category">
                            <p>{forum.Forum_Category}</p>
                            <p>{new Date(forum.Date_Published).toLocaleString("en-US", options)}</p>
                        </div>
                        <h1>{forum.Forum_Title}</h1>
                        <p>{forum.Forum_Description}</p>
                    </div>
                    <div className="forum-header-image">
                        <img src={`${process.env.REACT_APP_BACKEND}${forum.Header_Image.data.attributes.url}`}/>
                    </div>
                </div>
                {display.map((section, index) => 
                    <div key={ index }>
                        { section }
                    </div>
                )}
            </div>                  
        )
    }
    
}

export default ForumDetail;