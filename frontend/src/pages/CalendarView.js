
// React Dependendecies
import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ReachMarkdown from 'react-markdown';
import { useParams } from "react-router-dom"

// Components
import useFetch from "../useFetch";
import Gallery from "../components/Gallery";
import Text from "../components/Text";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import EventVideo from "../components/EventVideo";

const CalendarView = () => {
    const { id } = useParams()
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/calendars?filters[slug][$eq]=${id}&populate=deep`)
    
    let event = [];
    let sections = [];
    let display = [];
    let i = 0;

    const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
      };


    if (data) {

        event = data.data[0].attributes
        sections = event.Additional_Event_Info

        console.log(event)

        if (sections.length > 0 ) {
            for (let i = 0; i < sections.length; i ++) {
                if (sections[i].__component === "forum.forum-text") {
                    display.push(<Text data={sections[i]} />)
                } else if (sections[i].__component === "forum.video") {
                    display.push(<EventVideo data={sections[i]} />)
                }  else if (sections[i].__component === "forum.multiple-image-field") {
                    display.push(<Gallery data={sections[i]} />)
                }
            }
        }
        
        
        return (
            <div className="page-container">
                <div className="forum-detail-container">
                    <div className="grey-block"></div>
                    <div className="forum-title-container">
                        <h1>{ event.Event_Title }</h1>
                        <h3>{new Date(event.Start_Date).toLocaleString("en-US", options)} 
                            { event.End_Date ? ( <span>– {new Date(event.End_Date).toLocaleString("en-US", options)}</span> ) : null } 
                            <br></br>
                            { event.Time ? (
                                <span className="thin-roman">{ event.Time }</span>) : (null)
                            }
                        </h3>
                        <h5>{event.Location}</h5>
                        <BlocksRenderer 
                            content={event.Description}
                            blocks={{
                                link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                            }}
                        />
                    </div>
                    <div className="forum-header-image">
                        <img src={`${event.Feature_Image.data.attributes.url}`}/>
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

export default CalendarView;