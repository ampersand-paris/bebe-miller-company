import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Press = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forum-page?populate[Forum_Page][populate]=*&populate[Work_History][populate]=*`)

    let components = [] 
    let press = null;
    

    if (data) {
        
        components = data.data.attributes.Work_History;
        console.log(data.data.attributes)

        for (let i=0; i < components.length; i++) {
            if (components[i].__component === "forum.press") {
                press = components[i]
            }
        }

        return (
            <div className="forum-card-last-row press">
                <ReactMarkdown>{press.Press_Body}</ReactMarkdown>
            </div>          
        )
    }
    
}
  
export default Press;