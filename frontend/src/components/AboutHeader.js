import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const AboutHeader = (props) => {
   
    let header = props.data
    let header_image = props.data.Header_Image.data.attributes.url

    return (
        <>
            <div className="color-block">
                <div className="header-color-block-black"></div>
                <div className="header-color-block-white"></div>
            </div>
            <div className="about-header"> 
                <div className="header-text">
                    <ReactMarkdown>{ header.Header_Text }</ReactMarkdown>
                </div> 
                <div className="header-image" style={{backgroundImage: `url(${process.env.REACT_APP_BACKEND}${header_image})`}}>
                </div>
            </div>      
        </>
                  
    )
    
}
  
export default AboutHeader;