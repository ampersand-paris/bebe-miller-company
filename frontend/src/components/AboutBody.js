import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from 'react-router-dom'

const AboutBody = (props) => {

    let body = props.data
    let single_image = props.data.Single_Image.data.attributes
    console.log(`props`, body)

    return (
        <>        
            <div className="body-container">  
                <div className="body-text">
                    <BlocksRenderer content={ body.Biography }
                        blocks={{
                            link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                        }}
                    />
                </div>
                <div className="body-images">
                    <img className="single-image" src={`${ single_image.url }`} />
                    <p className="about-body-caption">{ single_image.caption }</p>
                    <h4>{ body.Quote }</h4>
                </div>
                <div>

                </div>
            </div>  
        </>
              
    )
    
}
  
export default AboutBody;