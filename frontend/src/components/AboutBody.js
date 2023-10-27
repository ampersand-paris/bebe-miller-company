import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const AboutBody = (props) => {
    
    let body = props.data
    let single_image = props.data.Single_Image.data.attributes.url
    let multiple_images = props.data.Image_Gallery.data
    
    console.log(body)
    return (
        <>        
            <div className="body-container">  
                <div className="body-text">
                    <ReactMarkdown>{ body.Biography }</ReactMarkdown>
                </div>
                <div className="body-images">
                    <img className="single-image" src={`${process.env.REACT_APP_BACKEND}${ single_image }`} />
                    <h4>{ body.Quote }</h4>
                </div>
                <div>

                </div>
            </div>  
        </>
              
    )
    
}
  
export default AboutBody;