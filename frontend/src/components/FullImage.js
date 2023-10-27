import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const FullImage = (props) => {
    
    let single_image = props.data.Image.data.attributes.url

    return (
        <div className="full-image-container">        
            <img className="full-image" src={`${process.env.REACT_APP_BACKEND}${ single_image }`} />
        </div>          
    )
    
}
  
export default FullImage;