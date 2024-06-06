// React Dependendecies
import React from "react";

// Components
import useFetch from "../useFetch";
import ForumGrid from "../components/ForumGrid";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Forum = (props) => {

    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/forum-page?populate[Forum_Page][populate]=*&populate[featuredForums][populate]=*`)

    let forums = [];

    let i = 0;

    const options = {
        month: "long",
        day: "numeric",
      };


    if (data) {

        forums = data.data.attributes.featuredForums.data
        console.log(forums)
        return (
            <div className="page-container">
                <div className="forum-recent-container">
                    <div className="forum-recent-card">
                        <img src={`${forums[0].attributes.Header_Image.data.attributes.url}`}/>
                        <div className="publication-info">
                            <p>Published {new Date(forums[0].attributes.publishedAt).toLocaleString("en-US", options)}</p>
                        </div>
                        <div className="forum-recent-title">
                            <h1>{forums[0].attributes.Forum_Title}</h1>
                            <BlocksRenderer content={forums[0].attributes.Forum_Description_Rich_Text}/>
                            {console.log(forums[0].attributes.slug)}
                            <a href={`/chronicle/${forums[0].attributes.slug}`}><h5>Read more</h5></a>      
                        </div>             
                    </div>
                    <div className="forum-recent-card">
                        <img src={`${forums[1].attributes.Header_Image.data.attributes.url}`}/>
                        <div className="publication-info">
                            <p>Published {new Date(forums[1].attributes.publishedAt).toLocaleString("en-US", options)}</p>
                        </div>
                        <div className="forum-recent-title">
                            <h1>{forums[1].attributes.Forum_Title}</h1>
                            <BlocksRenderer content={forums[1].attributes.Forum_Description_Rich_Text}/>
                            <a href={`/chronicle/${forums[1].attributes.slug}`}><h5>Read more</h5></a>      
                        </div>             
                    </div>
                </div>
                <ForumGrid />
            </div>                  
        )
    }
    
}

export default Forum;