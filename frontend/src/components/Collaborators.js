import { useState } from "react";
import useFetch from "../useFetch";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from 'react-router-dom'

const Collaborators = () => {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/about-page?populate[Collaborator_List][populate]=deep`)
    
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState('0px')
    

    let lists = [] 

    if (data) {

        lists = data.data.attributes.Collaborator_List;
        console.log(data)
        return (
            <div className="collaborator-container">
                <div>
                    <h1>Collaborators</h1>
                </div>
                <div className="collaborator-list">
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