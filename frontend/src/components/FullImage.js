import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const FullImage = (props) => {
    
    let single_image = props.data.Image.data.attributes

    return (
        <div className="full-image-container">        
            <img className="full-image" src={`${ single_image.url }`} />
            <p className="full-image-caption">{single_image.caption}</p>
        </div>          
    )
    
}
  
export default FullImage;