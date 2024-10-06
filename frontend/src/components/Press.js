import { useState } from "react";
import useFetch from "../useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from 'react-router-dom'

const Press = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/about-page?populate[Work_History][populate]=*`)

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
            setHeight('200vH')

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
            <div className="history-card">
                 <div className="column-title">
                    <h3>Press</h3>
                    <svg onClick={()=> svgMouseClick()} className="accordian-bttn" id="press" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect id="vertical" x="9.0535" width="1.893" height="20" rx="0.946502" fill="black"/>
                        <rect  x="20" y="9.0535" width="1.893" height="20" rx="0.946502" transform="rotate(90 20 9.0535)" fill="black"/>
                    </svg>
                </div>
                <div className="column-body press" style={{maxHeight: height}}>
                    <BlocksRenderer content={ press.Press_Body }
                        blocks={{
                            link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                        }}
                    />
                </div>
            </div>          
        )
    }
    
}
  
export default Press;