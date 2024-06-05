import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Video = (props) => {
    
    let video = props.data.video_URL
    console.log('props', props)
    return (
        <div className="full-image-container">        
            <iframe className="video" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>          
    )
    
}
  
export default Video;