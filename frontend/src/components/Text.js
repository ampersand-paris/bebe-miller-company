import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Text = (props) => {
   
    let text = props.data.Text_Body_Rich_Text

    return (

        <div className="text-component-card">
            <div className="side-bar"></div>
            <div className="text-component-body">
                <BlocksRenderer content={text}/>
            </div>
        </div>
                    
    )
    
}
  
export default Text;