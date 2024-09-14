import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from 'react-router-dom'

const AboutHeader = (props) => {
   
    let header = props.data
    let header_image = props.data.Header_Image.data.attributes

    return (
        <>
            <div className="color-block">
                <div className="header-color-block-black"></div>
                <div className="header-color-block-white"></div>
            </div>
            <div className="about-header"> 
                <div className="header-text">
                    <BlocksRenderer content={ header.Header_Text }
                        blocks={{
                            link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                        }}
                    />
                </div> 
                <div className="header-image" style={{backgroundImage: `url(${header_image.url})`}}>
                    <p className="header-text-caption">{header_image.caption}</p>
                </div>
            </div>      
        </>
                  
    )
    
}
  
export default AboutHeader;