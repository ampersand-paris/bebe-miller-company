import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


const Text = (props) => {
   
    let text = props.data.Text_Body
    console.log('props', props)
    return (

        <div className="text-component-card">
            <div className="side-bar"></div>
            <div className="text-component-body">
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
                    
    )
    
}
  
export default Text;