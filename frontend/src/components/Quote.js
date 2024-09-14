import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from 'react-router-dom'

const Quote = (props) => {
   
    let quote = props.data
    let quote_image = props.data.Quote_Image.data.attributes

    return (
        <>
            <div className="color-block">
                <div className="quote-color-block-white"></div>
                <div className="quote-color-block-black"></div>
            </div>
            <div className="quote-container"> 
                <div className="quote-image-wrapper">
                    <img className="quote-image" src={`${quote_image.url}`}/>
                    <p className="quote-image-caption">{quote_image.caption}</p>
                </div>
                <div className="quote-text">   
                    <BlocksRenderer content={ quote.Quote }
                        blocks={{
                            link: ({ children, url }) => <Link to={url} target="blank">{children}</Link>,
                        }}
                    />    
                </div> 
            </div>   
        </>
                    
    )
    
}
  
export default Quote;