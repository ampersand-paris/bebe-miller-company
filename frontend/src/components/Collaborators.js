import { useState } from "react";
import useFetch from "../useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from 'react-router-dom'

const Collaborators = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/about-page?populate[Collaborator_List][populate]=deep`)
    
    let lists = [] 
    
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState('0px')
    
    const svgMouseClick = () => {
        const svg = document.getElementById('collaborators');
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

        lists = data.data.attributes.Collaborator_List;

        return (
            <div className="collaborator-container">
                <div className="column-title-collaborators">
                    <h1>Collaborators</h1>
                    <svg onClick={()=> svgMouseClick()} className="accordian-bttn" id="collaborators" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect id="vertical" x="9.0535" width="1.893" height="20" rx="0.946502" fill="white"/>
                        <rect  x="20" y="9.0535" width="1.893" height="20" rx="0.946502" transform="rotate(90 20 9.0535)" fill="white"/>
                    </svg>
                </div>
                <div className="collaborator-list" style={{maxHeight: height}}>
                    {lists.map((list) =>
                        <div>
                            <h3>{ list.List_Title }</h3>
                            <BlocksRenderer content={ list.List }
                                blocks={{
                                    link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>          
        )
    }
    
}
  
export default Collaborators;