import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Gallery = (props) => {
   
    const [galleryInt, setGalleryInt] = useState(0)
    console.log('props', props)

    let project = props;
    let galleryImages = props.data.Image_Gallery.data;

    function galleryLeft() {
        if (galleryInt === 0) {
            setGalleryInt(project.data.Image_Gallery.data.length - 1);
        } else {
            setGalleryInt(galleryInt - 1);
        }
    }

    function galleryRight() {
        if (galleryInt === project.data.Image_Gallery.data.length - 1) {
            setGalleryInt(0);
        } else {
            setGalleryInt(galleryInt + 1);
        }
    }

    return (

        <div className="text-component-card">
            <div className="side-bar"></div>
            <div className="event-gallery" style={{backgroundImage: `url(${galleryImages[galleryInt].attributes.url})`}}>
                <div onClick={() => galleryLeft()} className="event-gallery-toggle" id="gallery-toggle-left">
                    <h1> &#x3c; </h1>
                </div>
                <div onClick={() => galleryRight()} className="event-gallery-toggle" id="gallery-toggle-right">
                    <h1> &#x3e; </h1>
                </div>
                <div className="event-gallery-caption">
                    <p>{ galleryImages[galleryInt].attributes.caption}</p>
                </div>
            </div>
        </div>              
    )
}
  
export default Gallery;