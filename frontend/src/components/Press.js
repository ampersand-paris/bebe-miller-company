import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Press = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forum-page?populate[Forum_Page][populate]=*&populate[Work_History][populate]=*`)

    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState('0px')
    
    let components = [] 
    let press = null;
    
    const svgMouseClick = () => {
        const svg = document.getElementById('press');
        const vertical = svg.getElementById('vertical')

        if (open == false) {
            vertical.style.transform = "rotate(90deg)"
            setOpen(true)
            setHeight('80vH')

        } else {
            vertical.style.transform = "rotate(0deg)"
            setOpen(false)
            setHeight('0px')
        }
    }

    if (data) {
        
        components = data.data.attributes.Work_History;

        for (let i=0; i < components.length; i++) {
            if (components[i].__component === "forum.press") {
                press = components[i]
            }
        }

        return (
            <div className="forum-card-last-row">
                 <div className="column-title">
                    <h1>Press</h1>
                    <svg onClick={()=> svgMouseClick()} className="accordian-bttn" id="press" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect id="vertical" x="9.0535" width="1.893" height="20" rx="0.946502" fill="black"/>
                        <rect  x="20" y="9.0535" width="1.893" height="20" rx="0.946502" transform="rotate(90 20 9.0535)" fill="black"/>
                    </svg>
                </div>
                <div className="column-body press" style={{maxHeight: height}}>
                    <ReactMarkdown>{press.Press_Body}</ReactMarkdown>
                </div>
            </div>          
        )
    }
    
}
  
export default Press;