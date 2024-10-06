import { useState } from "react";
import useFetch from "../useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from 'react-router-dom'

const Teachings = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/about-page?populate[Work_History][populate]=*`)

    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState('0px')
    
    let components = [] 
    let teaching = null;

    const svgMouseClick = () => {
        const svg = document.getElementById('teaching');
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
            if (components[i].__component === "forum.teachings") {
                teaching = components[i]
            }
        }

        return (
            <div className="history-card teachings">
                <div className="column-title">
                    <h3>Teaching</h3>
                    <svg onClick={()=> svgMouseClick()} className="accordian-bttn" id="teaching" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect id="vertical" x="9.0535" width="1.893" height="20" rx="0.946502" fill="black"/>
                        <rect  x="20" y="9.0535" width="1.893" height="20" rx="0.946502" transform="rotate(90 20 9.0535)" fill="black"/>
                    </svg>
                </div>
                <div className="column-body teachings" style={{maxHeight: height}}>
                    <BlocksRenderer content={ teaching.Teaching_Body }
                        blocks={{
                            link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                        }}
                    />
                </div>
            </div>          
        )
    }
    
}
  
export default Teachings;