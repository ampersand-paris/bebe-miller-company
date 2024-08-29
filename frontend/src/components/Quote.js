import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


const Quote = (props) => {
   
    let quote = props.data
    let quote_image = props.data.Quote_Image.data.attributes

    return (
        <>
            <div className="color-block">
                <div className="quote-color-block-white"></div>
                <div className="quote-color-block-black"></div>
            </div>
            <div className="quote-container"> 
                <div className="quote-image-wrapper">
                    <img className="quote-image" src={`${quote_image.url}`}/>
                    <p className="quote-image-caption">{quote_image.caption}</p>
                </div>
                <div className="quote-text">              
                    <ReactMarkdown>{ quote.Quote }</ReactMarkdown>
                </div> 
            </div>   
        </>
                    
    )
    
}
  
export default Quote;